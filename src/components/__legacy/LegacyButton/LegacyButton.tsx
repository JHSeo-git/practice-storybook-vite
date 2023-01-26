import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface LegacyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  intent?: 'neutral' | 'primary' | 'success' | 'danger' | 'info' | 'warning';
  /**
   * What the variant to use
   */
  variant?: 'solid' | 'weak' | 'outline' | 'ghost';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Is rounded?
   */
  rounded?: boolean;
  /**
   * Is circle?
   */
  circle?: boolean;
  /**
   * Is disabled?
   */
  disabled?: boolean;
  /**
   * Is loading?
   */
  loading?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const LegacyButton = forwardRef<HTMLButtonElement, LegacyButtonProps>(
  (
    {
      intent = 'neutral',
      variant = 'solid',
      size = 'medium',
      rounded = false,
      circle = false,
      disabled = false,
      loading = false,
      children = 'Label',
      className,
      type = 'button',
      ...props
    },
    forwardedRef
  ) => {
    return (
      <button
        ref={forwardedRef}
        type={type}
        className={cn(
          button({ intent, variant, size, rounded, circle, disabled, loading }),
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

LegacyButton.displayName = 'LegacyButton';

const button = cva(
  ['inline-flex items-center justify-center gap-2 rounded font-semibold transition'],
  {
    variants: {
      intent: {
        neutral: ['bg-base-11 hover:bg-base-12'],
        primary: ['bg-primary-base hover:bg-primary-10'],
        danger: ['bg-danger-base hover:bg-danger-10'],
        success: ['bg-success-base hover:bg-success-10'],
        info: ['bg-info-base hover:bg-info-10'],
        warning: ['bg-warning-base hover:bg-warning-10'],
      },
      variant: {
        solid: ['text-base-lo'],
        weak: [],
        ghost: ['bg-transparent'],
        outline: ['border'],
      },
      size: {
        small: ['py-1 px-2 text-sm'],
        medium: ['py-1.5 px-4 text-base'],
        large: ['py-2 px-6 text-lg'],
      },
      rounded: {
        true: ['rounded-full'],
      },
      circle: {
        true: ['rounded-full'],
      },
      disabled: {
        true: ['pointer-events-none cursor-not-allowed opacity-50'],
      },
      loading: {
        true: ['pointer-events-none opacity-70'],
      },
    },
    compoundVariants: [
      // solid
      {
        intent: 'warning',
        variant: 'solid',
        class: ['text-black'],
      },
      // weak
      {
        intent: 'neutral',
        variant: 'weak',
        class: ['bg-base-4 text-base-hi hover:bg-base-5 active:bg-base-6'],
      },
      {
        intent: 'primary',
        variant: 'weak',
        class: ['bg-primary-4 text-primary-hi hover:bg-primary-5 active:bg-primary-6'],
      },
      {
        intent: 'danger',
        variant: 'weak',
        class: ['bg-danger-4 text-danger-hi hover:bg-danger-5 active:bg-danger-6'],
      },
      {
        intent: 'success',
        variant: 'weak',
        class: ['bg-success-4 text-success-hi hover:bg-success-5 active:bg-success-6'],
      },
      {
        intent: 'info',
        variant: 'weak',
        class: ['bg-info-4 text-info-hi hover:bg-info-5 active:bg-info-6'],
      },
      {
        intent: 'warning',
        variant: 'weak',
        class: ['bg-warning-4 text-warning-11 hover:bg-warning-5 active:bg-warning-6'],
      },
      // ghost
      {
        intent: 'neutral',
        variant: 'ghost',
        class: ['text-base-hi hover:bg-base-4 active:bg-base-5'],
      },
      {
        intent: 'primary',
        variant: 'ghost',
        class: ['text-primary-hi hover:bg-primary-4 active:bg-primary-5'],
      },
      {
        intent: 'danger',
        variant: 'ghost',
        class: ['text-danger-hi hover:bg-danger-4 active:bg-danger-5'],
      },
      {
        intent: 'success',
        variant: 'ghost',
        class: ['text-success-hi hover:bg-success-4 active:bg-success-5'],
      },
      {
        intent: 'info',
        variant: 'ghost',
        class: ['text-info-hi hover:bg-info-4 active:bg-info-5'],
      },
      {
        intent: 'warning',
        variant: 'ghost',
        class: ['text-warning-11 hover:bg-warning-4 active:bg-warning-5'],
      },
      // outline
      {
        intent: 'neutral',
        variant: 'outline',
        class: ['border-base-7 bg-base-1 text-base-hi hover:border-base-8 hover:bg-base-1'],
      },
      {
        intent: 'primary',
        variant: 'outline',
        class: [
          'border-primary-7 bg-primary-1 text-primary-hi hover:border-primary-8 hover:bg-primary-1',
        ],
      },
      {
        intent: 'danger',
        variant: 'outline',
        class: [
          'border-danger-7 bg-danger-1 text-danger-hi hover:border-danger-8 hover:bg-danger-1',
        ],
      },
      {
        intent: 'success',
        variant: 'outline',
        class: [
          'border-success-7 bg-success-1 text-success-hi hover:border-success-8 hover:bg-success-1',
        ],
      },
      {
        intent: 'info',
        variant: 'outline',
        class: ['border-info-7 bg-info-1 text-info-hi hover:border-info-8 hover:bg-info-1'],
      },
      {
        intent: 'warning',
        variant: 'outline',
        class: [
          'border-warning-7 bg-warning-1 text-warning-11 hover:border-warning-8 hover:bg-warning-1',
        ],
      },
      // circle
      {
        size: 'small',
        circle: true,
        class: ['p-1.5'],
      },
      {
        size: 'medium',
        circle: true,
        class: ['p-2'],
      },
      {
        size: 'large',
        circle: true,
        class: ['p-2.5'],
      },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
      variant: 'solid',
    },
  }
);
