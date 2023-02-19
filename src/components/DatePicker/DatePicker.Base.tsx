import type { DPState } from '@rehookify/datepicker';
import {
  useCalendars,
  useMonths,
  useMonthsPropGetters,
  useYears,
  useYearsPropGetters,
} from '@rehookify/datepicker';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

import { getNumericText } from './DatePicker.utils';
import type { CalendarViewMode } from './DatePickerContext';

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

interface CalendarViewPanelProps {
  dpState: DPState;
  setCalendarViewMode: (mode: CalendarViewMode) => void;
}
export const CalendarMonths = ({ dpState, setCalendarViewMode }: CalendarViewPanelProps) => {
  const { months } = useMonths(dpState);

  const { monthButton } = useMonthsPropGetters(dpState);
  const selectedMonths = dpState.selectedDates.map((d) => d.getMonth() + 1);

  const onMonthClick = React.useCallback(() => {
    setCalendarViewMode('days');
  }, [setCalendarViewMode]);

  return (
    <div className="grid grid-cols-[repeat(4,_1fr)] items-center gap-1">
      {months.map((m) => (
        <CalendarCellButton
          key={m.$date.toISOString()}
          className="w-[4.125rem]"
          data-selected={m.selected}
          data-disabled={m.disabled}
          data-now={m.now}
          data-range={
            Math.min(...selectedMonths) < parseInt(getNumericText(m.month)) &&
            parseInt(getNumericText(m.month)) < Math.max(...selectedMonths)
              ? 'in-range'
              : ''
          }
          data-month={m.month}
          {...monthButton(m, { onClick: onMonthClick })}
        >
          {getNumericText(m.month)}
        </CalendarCellButton>
      ))}
    </div>
  );
};

export const CalendarYears = ({ dpState, setCalendarViewMode }: CalendarViewPanelProps) => {
  const { years } = useYears(dpState);

  const { yearButton } = useYearsPropGetters(dpState);
  const selectedYears = dpState.selectedDates.map((d) => d.getFullYear());

  const onYearClick = React.useCallback(() => {
    setCalendarViewMode('days');
  }, [setCalendarViewMode]);

  return (
    <div className="grid grid-cols-[repeat(4,_1fr)] items-center gap-1">
      {years.map((y) => (
        <CalendarCellButton
          key={y.$date.toISOString()}
          className="w-[4.125rem]"
          data-selected={y.selected}
          data-disabled={y.disabled}
          data-now={y.now}
          data-range={
            Math.min(...selectedYears) < y.year && y.year < Math.max(...selectedYears)
              ? 'in-range'
              : ''
          }
          data-year={y.year}
          {...yearButton(y, { onClick: onYearClick })}
        >
          {y.year}
        </CalendarCellButton>
      ))}
    </div>
  );
};

interface CalendarHeaderProps {
  dpState: DPState;
  calendarViewMode: CalendarViewMode;
  setCalendarViewMode: (mode: CalendarViewMode) => void;
}
export const CalendarHeader = ({
  dpState,
  calendarViewMode,
  setCalendarViewMode,
}: CalendarHeaderProps) => {
  const { calendars } = useCalendars(dpState);
  const { previousMonthButton, nextMonthButton } = useMonthsPropGetters(dpState);
  const { previousYearsButton, nextYearsButton } = useYearsPropGetters(dpState);
  const { years } = useYears(dpState);

  const onClickTitle = React.useCallback(() => {
    if (calendarViewMode === 'days') {
      setCalendarViewMode('months');
      return;
    }
    if (calendarViewMode === 'months') {
      setCalendarViewMode('years');
      return;
    }
    if (calendarViewMode === 'years') {
      setCalendarViewMode('days');
      return;
    }
  }, [calendarViewMode, setCalendarViewMode]);

  const composePreviousButtonProps = React.useCallback(() => {
    if (calendarViewMode === 'days') {
      return previousMonthButton();
    }
    if (calendarViewMode === 'months') {
      return previousMonthButton({ step: 12 });
    }
    if (calendarViewMode === 'years') {
      return previousYearsButton();
    }
  }, [previousMonthButton, previousYearsButton, calendarViewMode]);

  const composeNextButtonProps = React.useCallback(() => {
    if (calendarViewMode === 'days') {
      return nextMonthButton();
    }
    if (calendarViewMode === 'months') {
      return nextMonthButton({ step: 12 });
    }
    if (calendarViewMode === 'years') {
      return nextYearsButton();
    }
  }, [nextMonthButton, nextYearsButton, calendarViewMode]);

  const calendar = calendars[0];

  const composeTitle = React.useMemo(() => {
    if (calendarViewMode === 'days') {
      return `${calendar.year} / ${calendar.month}`;
    }
    if (calendarViewMode === 'months') {
      return `${calendar.year}`;
    }
    if (calendarViewMode === 'years') {
      return `${years.at(0)?.year} - ${years.at(-1)?.year}`;
    }
  }, [calendar, years, calendarViewMode]);

  return (
    <div className="flex items-center justify-between">
      <div>
        <CalendarCellButton {...composePreviousButtonProps()}>
          <ChevronLeft className="h-4 w-4" />
        </CalendarCellButton>
      </div>
      <div>
        <button type="button" className="px-3 py-2" onClick={onClickTitle}>
          {composeTitle}
        </button>
      </div>
      <div>
        <CalendarCellButton {...composeNextButtonProps()}>
          <ChevronRight className="h-4 w-4" />
        </CalendarCellButton>
      </div>
    </div>
  );
};
