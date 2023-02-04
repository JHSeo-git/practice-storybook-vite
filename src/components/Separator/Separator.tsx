import * as RadixSeparator from '@radix-ui/react-separator';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface SeparatorProps extends RadixSeparator.SeparatorProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixSeparator.SeparatorProps['asChild'];
  /**
   * The orientation of the separator.
   * @type "horizontal" | "vertical"
   * @default "horizontal"
   */
  orientation?: RadixSeparator.SeparatorProps['orientation'];
  /**
   * When `true`, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.
   * @default true
   */
  decorative?: RadixSeparator.SeparatorProps['decorative'];
}
export const Separator = React.forwardRef<
  React.ElementRef<typeof RadixSeparator.Root>,
  SeparatorProps
>(({ className, orientation = 'horizontal', decorative = true, ...props }, forwardedRef) => {
  return (
    <RadixSeparator.Root
      ref={forwardedRef}
      className={cn(
        'bg-base-7',
        orientation === 'horizontal' && 'h-px w-full',
        orientation === 'vertical' && 'h-full w-px',
        className
      )}
      orientation={orientation}
      decorative={decorative}
      {...props}
    />
  );
});
Separator.displayName = RadixSeparator.Root.displayName;
