import * as RadixSwitch from '@radix-ui/react-switch';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface SwitchProps extends RadixSwitch.SwitchProps {
  /**
   * className of the `<switch>`
   */
  className?: string;
  /**
   * The name of the switch. Submitted with its owning form as part of a name/value pair.
   */
  name?: RadixSwitch.SwitchProps['name'];
  /**
   * The value given as data when submitted with a `name`.
   */
  value?: RadixSwitch.SwitchProps['value'];
  /**
   * The controlled state of the switch. Must be used in conjunction with `onCheckedChange`.
   */
  checked?: RadixSwitch.SwitchProps['checked'];
  /**
   * The state of the switch when it is initially rendered. Use when you do not need to control its state.
   */
  defaultChecked?: RadixSwitch.SwitchProps['defaultChecked'];
  /**
   * Event handler called when the state of the switch changes.
   */
  onCheckedChange?: RadixSwitch.SwitchProps['onCheckedChange'];
  /**
   * When `true`, indicates that the user must check the switch before the owning form can be submitted.
   */
  required?: RadixSwitch.SwitchProps['required'];
  /**
   * When `true`, prevents the user from interacting with the switch.
   */
  disabled?: RadixSwitch.SwitchProps['disabled'];
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixSwitch.SwitchProps['asChild'];
  /**
   * size of the switch
   * @default "md"
   */
  size?: 'small' | 'medium';
}

export const Switch = React.forwardRef<React.ElementRef<typeof RadixSwitch.Root>, SwitchProps>(
  ({ className, size = 'medium', ...props }, forwardedRef) => {
    return (
      <RadixSwitch.Root
        ref={forwardedRef}
        className={cn(
          'peer inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors',
          'focus:ring-base-7 focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=unchecked]:bg-base-6',
          'data-[state=checked]:bg-primary-base',
          size === 'medium' && 'h-[24px] w-[44px]',
          size === 'small' && 'h-[16px] w-[32px]',
          className
        )}
        {...props}
      >
        <RadixSwitch.Thumb
          className={cn(
            'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform',
            'data-[state=unchecked]:translate-x-0',
            size === 'medium' && 'h-5 w-5',
            size === 'medium' && 'data-[state=checked]:translate-x-5',
            size === 'small' && 'h-3 w-3',
            size === 'small' && 'data-[state=checked]:translate-x-4'
          )}
        />
      </RadixSwitch.Root>
    );
  }
);

Switch.displayName = RadixSwitch.Root.displayName;
