import * as RadixSelect from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface SelectProps extends RadixSelect.SelectProps {
  /**
   * children of the `<select>`
   */
  children?: RadixSelect.SelectProps['children'];
  /**
   * The controlled value of the select. Should be used in conjunction with `onValueChange`.
   */
  value?: RadixSelect.SelectProps['value'];
  /**
   * The value of the select when initially rendered. Use when you do not need to control the state of the select.
   */
  defaultValue?: RadixSelect.SelectProps['defaultValue'];
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: RadixSelect.SelectProps['onValueChange'];
  /**
   * The controlled open state of the select. Must be used in conjunction with `onOpenChange`.
   */
  open?: RadixSelect.SelectProps['open'];
  /**
   * The open state of the select when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: RadixSelect.SelectProps['defaultOpen'];
  /**
   * Event handler called when the open state of the select changes.
   */
  onOpenChange?: RadixSelect.SelectProps['onOpenChange'];
  /**
   * The reading direction of the select when applicable. If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode.
   */
  dir?: RadixSelect.SelectProps['dir'];
  /**
   * The name of the select. Submitted with its owning form as part of a name/value pair.
   */
  name?: RadixSelect.SelectProps['name'];
  /**
   * autoComplete of the `<select>`
   */
  autoComplete?: RadixSelect.SelectProps['autoComplete'];
  /**
   * When `true`, prevents the user from interacting with select.
   */
  disabled?: RadixSelect.SelectProps['disabled'];
  /**
   * When `true`, indicates that the user must select a value before the owning form can be submitted.
   */
  required?: RadixSelect.SelectProps['required'];
}
/**
 * @see https://www.radix-ui.com/docs/primitives/components/select#root
 */
export const Select = (props: SelectProps) => {
  return <RadixSelect.Root {...props} />;
};

export const SelectGroup = RadixSelect.Group;

export const SelectValue = RadixSelect.Value;

interface SelectTriggerProps extends RadixSelect.SelectTriggerProps {
  /**
   * className of the `<select-trigger>`
   */
  className?: string;
}
export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Trigger>,
  SelectTriggerProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Trigger
      ref={forwardedRef}
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-md border border-base-7 bg-transparent py-2 px-3 text-label4Regular placeholder:text-base-9',
        'focus:outline-none focus:ring-2 focus:ring-base-7 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </RadixSelect.Trigger>
  );
});
SelectTrigger.displayName = RadixSelect.Trigger.displayName;

interface SelectContentProps extends RadixSelect.SelectContentProps {
  /**
   * className of the `<select-content>`
   */
  className?: string;
}
export const SelectContent = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Content>,
  SelectContentProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content
        ref={forwardedRef}
        className={cn(
          'relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-base-6 bg-white text-base-weak shadow-md animate-in fade-in-80',
          className
        )}
        {...props}
      >
        <RadixSelect.Viewport className="p-1">{children}</RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
});
SelectContent.displayName = RadixSelect.Content.displayName;

interface SelectLabelProps extends RadixSelect.SelectLabelProps {
  /**
   * className of the `<select-label>`
   */
  className?: string;
}
export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Label>,
  SelectLabelProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Label
      ref={forwardedRef}
      className={cn('py-1.5 pr-2 pl-8 text-label4Bold text-base-hi', className)}
      {...props}
    />
  );
});
SelectLabel.displayName = RadixSelect.Label.displayName;

interface SelectItemProps extends RadixSelect.SelectItemProps {
  /**
   * className of the `<select-item>`
   */
  className?: string;
}
export const SelectItem = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Item>,
  SelectItemProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Item
      ref={forwardedRef}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-bodyNormal2Regular',
        'outline-none focus:bg-base-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <RadixSelect.ItemIndicator>
          <Check className="h-4 w-4" />
        </RadixSelect.ItemIndicator>
      </span>

      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
});
SelectItem.displayName = RadixSelect.Item.displayName;

interface SelectSeperator extends RadixSelect.SelectSeparatorProps {
  /**
   * className of the `<select-separator>`
   */
  className?: string;
}
export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof RadixSelect.Separator>,
  SelectSeperator
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Separator
      ref={forwardedRef}
      className={cn('-mx-1 my-1 h-px bg-base-2', className)}
      {...props}
    />
  );
});
SelectSeparator.displayName = RadixSelect.Separator.displayName;
