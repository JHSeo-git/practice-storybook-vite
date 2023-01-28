import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface CheckboxProps extends RadixCheckbox.CheckboxProps {
  /**
   * className of the `<checkbox>`
   */
  className?: string;
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  CheckboxProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixCheckbox.Root
      ref={forwardedRef}
      className={cn(
        'peer h-4 w-4 shrink-0 rounded-sm border border-base-7',
        'focus:outline-none focus:ring-2 focus:ring-base-7 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <RadixCheckbox.Indicator className="flex items-center justify-center">
        <Check className="h-4 w-4" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
});

Checkbox.displayName = RadixCheckbox.Root.displayName;
