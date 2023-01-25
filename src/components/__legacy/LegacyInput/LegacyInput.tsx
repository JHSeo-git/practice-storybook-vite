import { cva } from 'class-variance-authority';
import { Eye, EyeOff } from 'lucide-react';
import { forwardRef, useCallback, useEffect, useId, useRef, useState } from 'react';
import { mergeRefs } from 'react-merge-refs';

import { cn } from '@/lib/utils/styleUtils';

interface LegacyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label of the input
   */
  label?: string;
  /**
   * The orientation of the label, input and error
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * The left-side icon of the input
   */
  icon?: React.ReactNode;
  /**
   * The starting focused state of the input
   */
  startFocused?: boolean;
  /**
   * full width?
   */
  fullWidth?: boolean;
  /**
   * The error message of the input
   */
  error?: string;
  /**
   * Is disabled?
   */
  disabled?: boolean;
  /**
   * label class?
   */
  labelClassName?: string;
  /**
   * box class?
   */
  boxClassName?: string;
}

/**
 * The Input component is a wrapper around the native input element.
 */
export const LegacyInput = forwardRef<HTMLInputElement, LegacyInputProps>(
  (
    {
      //
      id,
      type: startingType,
      startFocused,
      ...props
    },
    forwardedRef
  ) => {
    const [type, setType] = useState(startingType);
    const togglePasswordType = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (type === 'password') {
          setType('text');
          return;
        }
        setType('password');
      },
      [type, setType]
    );

    const localRef = useRef<HTMLInputElement>(null);
    const didFocusOnStart = useRef(false);

    const inputId = id || `input_${useId()}`;

    useEffect(() => {
      if (localRef.current && startFocused && !didFocusOnStart.current) {
        localRef.current.focus();
        didFocusOnStart.current = true;
      }
    }, [localRef, didFocusOnStart]);

    return (
      <PureInput
        ref={mergeRefs([forwardedRef, localRef])}
        id={inputId}
        type={type}
        startingType={startingType}
        onActionClick={togglePasswordType}
        {...props}
      />
    );
  }
);

LegacyInput.displayName = 'LegacyInput';

interface PureInputProps extends LegacyInputProps {
  /**
   * The starting type of the input (example: 'password')
   */
  startingType?: string;
  /**
   * Optional click handler for right-side action
   */
  onActionClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A pure input component that can be used in other components
 */
export const PureInput = forwardRef<HTMLInputElement, PureInputProps>(
  (
    {
      id,
      label,
      orientation = 'vertical',
      icon = null,
      startingType = 'text',
      fullWidth,
      error,
      onActionClick,
      boxClassName,
      labelClassName,
      type,
      className,
      ...props
    },
    forwardedRef
  ) => {
    const isError = Boolean(error);

    return (
      <div
        className={cn(
          'relative',
          orientation === 'horizontal' && 'flex items-center gap-4',
          fullWidth && 'w-full',
          boxClassName
        )}
      >
        {label && (
          <div className="flex items-center py-1.5">
            <label
              htmlFor={id}
              className={cn(
                'text-label4Regular text-base-hi',
                isError && 'text-danger-base',
                labelClassName
              )}
            >
              {label}
            </label>
          </div>
        )}

        <div className="relative inline-flex w-[inherit] items-center">
          {icon && (
            <span className={cn('text-base-weak absolute left-3.5', isError && 'text-danger-base')}>
              {icon}
            </span>
          )}

          <input
            ref={forwardedRef}
            id={id}
            type={type}
            className={cn(
              pureInput({
                leftIcon: Boolean(icon),
                rightIcon: startingType === 'password',
                error: isError,
              }),
              className
            )}
            {...props}
          />

          {startingType === 'password' && (
            <button
              type="button"
              className={cn('text-base-weak absolute right-3.5', isError && 'text-danger-base')}
              onClick={onActionClick}
            >
              {type === 'password' ? (
                <>
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">Show</span>
                </>
              ) : (
                <>
                  <EyeOff className="h-4 w-4" />
                  <span className="sr-only">Hide</span>
                </>
              )}
            </button>
          )}
        </div>

        {error && <p className="text-danger-base text-label5Regular p-1">{error}</p>}
      </div>
    );
  }
);

PureInput.displayName = 'PureInput';

const pureInput = cva(
  [
    'outline-none w-full focus:border-primary-base transition text-base-hi text-bodyNormal2Regular rounded border border-base-7 py-2.5 px-3.5',
  ],
  {
    variants: {
      leftIcon: {
        true: ['pl-10'],
      },
      rightIcon: {
        true: ['pr-10'],
      },
      error: {
        true: ['border-danger-7'],
      },
    },
  }
);
