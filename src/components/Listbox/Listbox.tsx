import type { MultiSelectUnstyledProps } from '@mui/base/MultiSelectUnstyled';
import MultiSelectUnstyled from '@mui/base/MultiSelectUnstyled';
import type { OptionUnstyledProps } from '@mui/base/OptionUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import type { PopperUnstyledProps } from '@mui/base/PopperUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import type { SelectUnstyledProps, SelectUnstyledRootSlotProps } from '@mui/base/SelectUnstyled';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import { styled } from '@mui/material';
import { Check, ChevronDown } from 'lucide-react';
import * as React from 'react';
import { mergeRefs } from 'react-merge-refs';

import { cn } from '@/lib/utils/styleUtils';

/* -------------------------------------------------------------------------------------------------
 * ListboxContext
 * -----------------------------------------------------------------------------------------------*/

interface ListboxContextProps {
  width: string | number;
  setWidth: (width: string | number) => void;
}
const ListboxContext = React.createContext<ListboxContextProps | null>(null);
const ListboxContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [width, setWidth] = React.useState<number | string>('auto');
  const value = React.useMemo(
    () => ({
      width,
      setWidth,
    }),
    [width, setWidth]
  );
  return (
    <ListboxContext.Provider value={value}>
      <ListboxStyleWrapper>{children}</ListboxStyleWrapper>
    </ListboxContext.Provider>
  );
};
const useListboxContext = () => {
  const context = React.useContext(ListboxContext);
  if (!context) {
    throw new Error('ListboxContext must be used within ListboxContextProvider');
  }
  return context;
};

const ListboxStyleWrapper = ({ children }: { children: React.ReactNode }) => {
  const { width } = useListboxContext();
  const style = React.useMemo(
    () => ({ '--listbox-trigger-width': typeof width === 'number' ? `${width}px` : width }),
    [width]
  ) as React.CSSProperties;

  return <div style={style}>{children}</div>;
};

/* -------------------------------------------------------------------------------------------------
 * ListboxTrigger
 * -----------------------------------------------------------------------------------------------*/

const ListboxTrigger = React.forwardRef(function ListboxTrigger<TValue extends {}>(
  { children, className, ownerState, ...props }: SelectUnstyledRootSlotProps<TValue>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
  const context = useListboxContext();
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (!buttonRef?.current) {
      return;
    }

    context.setWidth(buttonRef.current.getBoundingClientRect().width);
  }, [buttonRef]);

  return (
    <button
      type="button"
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-md border border-base-7 bg-transparent py-2 px-3 text-label4Regular placeholder:text-base-9',
        'focus:outline-none focus:ring-2 focus:ring-base-7 focus:ring-offset-2',
        '[&.Mui-focusVisible]:ring-2 [&.Mui-focusVisible]:ring-base-7 [&.Mui-focusVisible]:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        '[&.Mui-disabled]:cursor-not-allowed [&.Mui-disabled]:opacity-50',
        'space-x-2',
        className
      )}
      {...props}
      ref={mergeRefs([buttonRef, forwardedRef])}
    >
      <span className="min-w-0 truncate">{children}</span>
      <span className="shrink-0">
        <ChevronDown className="h-5 w-5" />
      </span>
    </button>
  );
});

/* -------------------------------------------------------------------------------------------------
 * ListboxContent
 * -----------------------------------------------------------------------------------------------*/

type ListboxContentProps = React.HTMLAttributes<HTMLUListElement>;
const ListboxContent = React.forwardRef<HTMLUListElement, ListboxContentProps>(
  function ListboxContent({ className, ...props }, ref) {
    return (
      <ul
        className={cn(
          'mt-1 w-[var(--listbox-trigger-width)] overflow-hidden rounded-md border border-base-6 bg-white text-base-weak shadow-md animate-in fade-in-80',
          'outline-none',
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

/* -------------------------------------------------------------------------------------------------
 * ListboxOption
 * -----------------------------------------------------------------------------------------------*/

const ListboxOption = React.forwardRef(function ListboxOption<TValue extends {}>(
  { className, children, ...props }: OptionUnstyledProps<TValue>,
  forwardedRef: React.ForwardedRef<HTMLLIElement>
) {
  return (
    <StyledOption
      className={cn(
        'flex cursor-default select-none items-center justify-between rounded-sm py-1.5 px-2 text-bodyNormal2Regular',
        'hover:bg-base-2',
        'outline-none focus:bg-base-2',
        'disabled:pointer-events-none disabled:opacity-50',
        '[&.Mui-disabled]:pointer-events-none [&.Mui-disabled]:opacity-50',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="min-w-0 truncate">{children}</div>
      <div className="mui-check-icon ml-2 shrink-0 items-center justify-center">
        <Check className="h-4 w-4" />
      </div>
    </StyledOption>
  );
});

const StyledOption = styled(OptionUnstyled)`
  & .mui-check-icon {
    display: none;
  }
  &.${optionUnstyledClasses.selected} {
    & .mui-check-icon {
      display: flex;
    }
  }
`;

/* -------------------------------------------------------------------------------------------------
 * ListboxPopper
 * -----------------------------------------------------------------------------------------------*/

const ListboxPopper = React.forwardRef(function ListboxPopper(
  { children, className, ownerState, ...props }: PopperUnstyledProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <PopperUnstyled className={cn('z-[1]', className)} {...props} ref={forwardedRef}>
      {children}
    </PopperUnstyled>
  );
});

/* -------------------------------------------------------------------------------------------------
 * Listbox
 * -----------------------------------------------------------------------------------------------*/

interface ListboxProps<TValue extends {}>
  extends Omit<SelectUnstyledProps<TValue>, 'listboxOpen' | 'onListboxOpenChange'> {
  open?: SelectUnstyledProps<TValue>['listboxOpen'];
  onOpenChange?: SelectUnstyledProps<TValue>['onListboxOpenChange'];
}
const Listbox = React.forwardRef(function Listbox<TValue extends {}>(
  { open, onOpenChange, ...props }: ListboxProps<TValue>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
  const slots: SelectUnstyledProps<TValue>['slots'] = {
    root: ListboxTrigger,
    listbox: ListboxContent,
    popper: ListboxPopper,
  };

  return (
    <ListboxContextProvider>
      <SelectUnstyled
        {...props}
        ref={forwardedRef}
        slots={slots}
        listboxOpen={open}
        onListboxOpenChange={onOpenChange}
        renderValue={(v): React.ReactNode => (
          <>
            {v?.value ? (
              v.label
            ) : (
              <span className="text-base-9">{props.placeholder || 'Select an option'}</span>
            )}
          </>
        )}
      />
    </ListboxContextProvider>
  );
}) as <TValue extends {}>(
  props: ListboxProps<TValue> & React.RefAttributes<HTMLButtonElement>
) => JSX.Element;

/* -------------------------------------------------------------------------------------------------
 * MultiListbox
 * -----------------------------------------------------------------------------------------------*/

interface MultiListboxProps<TValue extends {}>
  extends Omit<MultiSelectUnstyledProps<TValue>, 'listboxOpen' | 'onListboxOpenChange'> {
  open?: MultiSelectUnstyledProps<TValue>['listboxOpen'];
  onOpenChange?: MultiSelectUnstyledProps<TValue>['onListboxOpenChange'];
}
const MultiListbox = React.forwardRef(function MultiListbox<TValue extends {}>(
  { open, onOpenChange, renderValue, ...props }: MultiListboxProps<TValue>,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>
) {
  const slots: MultiSelectUnstyledProps<TValue>['slots'] = {
    root: ListboxTrigger,
    listbox: ListboxContent,
    popper: ListboxPopper,
  };

  return (
    <ListboxContextProvider>
      <MultiSelectUnstyled
        {...props}
        ref={forwardedRef}
        slots={slots}
        listboxOpen={open}
        onListboxOpenChange={onOpenChange}
        renderValue={(v): React.ReactNode => {
          if (!v || v.length === 0) {
            return <span className="text-base-9">{props.placeholder || 'Select options'}</span>;
          }

          const rendered = v.map((vv, index) => {
            if (index === 0) {
              return <div key={index}>{vv.label}</div>;
            }

            return (
              <div key={index} className="flex items-center">
                <span className="mx-0.5">·</span>
                {vv.label}
              </div>
            );
          });

          return (
            <div className="flex items-center space-x-1">
              {renderValue ? renderValue(v) : rendered}
            </div>
          );
        }}
      />
    </ListboxContextProvider>
  );
}) as <TValue extends {}>(
  props: MultiListboxProps<TValue> & React.RefAttributes<HTMLButtonElement>
) => JSX.Element;

export {
  //
  Listbox,
  ListboxOption,
  MultiListbox,
};
