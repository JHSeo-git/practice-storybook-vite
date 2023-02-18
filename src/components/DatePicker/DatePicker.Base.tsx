import { CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

type CalendarCellButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const CalendarCellButton = React.forwardRef<HTMLButtonElement, CalendarCellButtonProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <button
        type="button"
        ref={forwardedRef}
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-md p-1 text-bodyNormal2Regular text-base-hi outline-none',
          'hover:bg-base-3',

          'data-[now=true]:underline',

          'data-[current-month=false]:text-base-6',
          'data-[selected=true]:bg-info-base data-[selected=true]:text-base-lo data-[selected=true]:hover:bg-info-hi data-[selected=true]:hover:text-base-lo',

          'data-[range=in-range]:bg-base-7',
          'data-[range=will-be-in-range]:bg-base-7',

          'disabled:cursor-not-allowed disabled:opacity-50',
          'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
          className
        )}
        {...props}
      />
    );
  }
);
CalendarCellButton.displayName = 'CalendarCellButton';

interface DatePickerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onTriggerClick: () => void;
}
export const DatePickerInput = React.forwardRef<HTMLInputElement, DatePickerInputProps>(
  ({ onTriggerClick, className, ...props }, forwardedRef) => {
    return (
      <div className="relative">
        <input
          ref={forwardedRef}
          className={cn(
            'flex h-10 w-full rounded-md border border-base-7 py-2 pl-3 pr-8 text-label4Regular placeholder:text-base-9',
            'focus:outline-none focus:ring-2 focus:ring-base-7 focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...props}
        />
        <button
          type="button"
          className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded-md p-1 hover:bg-base-3"
          onClick={onTriggerClick}
        >
          <CalendarIcon className="h-4 w-4" />
        </button>
      </div>
    );
  }
);
DatePickerInput.displayName = 'DatePickerInput';
