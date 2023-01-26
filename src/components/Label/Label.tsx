import * as RadixLabel from '@radix-ui/react-label';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface LabelProps extends RadixLabel.PrimitiveLabelProps {
  /**
   * id of the target element
   */
  htmlFor?: string;
  /**
   * className of the `<label>`
   */
  className?: string;
  /**
   * children of the `<label>`
   */
  children?: React.ReactNode;
}

/**
 * The Label component is a wrapper around the @radix-ui/react-input.
 * It is used to label an input element.
 */
export const Label = React.forwardRef<React.ComponentRef<typeof RadixLabel.Root>, LabelProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <RadixLabel.Root
        ref={forwardedRef}
        className={cn(
          'text-label4Bold leading-none',
          'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          className
        )}
        {...props}
      />
    );
  }
);

Label.displayName = 'Label';
