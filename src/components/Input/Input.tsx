import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * className of the `<input>`
   */
  className?: string;
  /**
   * disabled of the `<input>`
   */
  disabled?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <input
        ref={forwardedRef}
        className={cn(
          'border-base-7 text-label4Regular placeholder:text-base-9 flex h-10 w-full rounded-md border py-2 px-3',
          'focus:ring-base-7 focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
