import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface RadioGroupProps extends RadixRadioGroup.RadioGroupProps {
  /**
   * className of the `<radio-group>`
   */
  className?: string;
  /**
   * The name of the group. Submitted with its owning form as part of a name/value pair.
   */
  name?: RadixRadioGroup.RadioGroupProps['name'];
  /**
   * The controlled value of the radio item to check. Should be used in conjunction with `onValueChange`.
   */
  value?: RadixRadioGroup.RadioGroupProps['value'];
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: RadixRadioGroup.RadioGroupProps['onValueChange'];
  /**
   * The value of the radio item that should be checked when initially rendered. Use when you do not need to control the state of the radio items.
   */
  defaultValue?: RadixRadioGroup.RadioGroupProps['defaultValue'];
  /**
   * The reading direction of the radio group. If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode.
   */
  dir?: RadixRadioGroup.RadioGroupProps['dir'];
  /**
   * The orientation of the component.
   */
  orientation?: RadixRadioGroup.RadioGroupProps['orientation'];
  /**
   * When `true`, keyboard navigation will loop from last item to first, and vice versa.
   */
  loop?: RadixRadioGroup.RadioGroupProps['loop'];
  /**
   * When true, indicates that the user must check a radio item before the owning form can be submitted.
   */
  required?: RadixRadioGroup.RadioGroupProps['required'];
  /**
   * When `true`, prevents the user from interacting with radio items.
   */
  disabled?: RadixRadioGroup.RadioGroupProps['disabled'];
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixRadioGroup.RadioGroupProps['asChild'];
}

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Root>,
  RadioGroupProps
>(({ className, orientation = 'vertical', ...props }, forwardedRef) => {
  return (
    <RadixRadioGroup.Root
      ref={forwardedRef}
      className={cn(
        orientation === 'vertical' && 'grid gap-2',
        orientation === 'horizontal' && 'flex items-center gap-4',
        className
      )}
      {...props}
    />
  );
});
RadioGroup.displayName = RadixRadioGroup.Root.displayName;

interface RadioGroupItemProps extends RadixRadioGroup.RadioGroupItemProps {
  /**
   * className of the `<radio-group-item>`
   */
  className?: string;
}

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Item>,
  RadioGroupItemProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <RadixRadioGroup.Item
      ref={forwardedRef}
      className={cn(
        'peer h-4 w-4 rounded-full border border-base-7 text-base-hi',
        'hover:border-base-9',
        'focus:outline-none focus:ring-2 focus:ring-base-7 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-base-7',
        className
      )}
      {...props}
    >
      <RadixRadioGroup.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-primary-base" />
      </RadixRadioGroup.Indicator>
      {children}
    </RadixRadioGroup.Item>
  );
});
RadioGroupItem.displayName = RadixRadioGroup.Item.displayName;
