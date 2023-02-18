import type { DatePickerUserConfig, DPState } from '@rehookify/datepicker';
import { useDaysPropGetters } from '@rehookify/datepicker';
import { useCalendars, useMonthsPropGetters } from '@rehookify/datepicker';
import { useDatePickerState, useMonthsActions } from '@rehookify/datepicker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

import { Button } from '../Button';
import { CalendarCellButton } from './DatePicker.Base';
import { getNumericText } from './DatePicker.utils';
import { useDatePickerContext } from './DatePickerContext';

interface CalendarSingleRootProps {
  config: DatePickerUserConfig;
  onConfirm: () => void;
}
export const CalendarSingleRoot = ({ config, onConfirm }: CalendarSingleRootProps) => {
  const dpState = useDatePickerState(config);

  const { setMonth } = useMonthsActions(dpState);

  const onTodayClick = React.useCallback(() => {
    const today = new Date();

    setMonth(today);
  }, [setMonth]);

  return (
    <div>
      <div>
        <CalendarSingle dpState={dpState} onConfirm={onConfirm} />
      </div>
      <div className="mt-5 flex items-center justify-between">
        <Button size="small" onClick={onTodayClick}>
          Today
        </Button>
        <Button size="small" intent="success" onClick={onConfirm}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

interface CalendarSingleProps {
  dpState: DPState;
  onConfirm: () => void;
}
const CalendarSingle = ({ dpState, onConfirm }: CalendarSingleProps) => {
  const { calendars, weekDays } = useCalendars(dpState);
  const { previousMonthButton, nextMonthButton } = useMonthsPropGetters(dpState);
  const { autoClose } = useDatePickerContext();

  const { dayButton } = useDaysPropGetters(dpState);

  const calendar = calendars[0];
  const { year, month, days } = calendar;

  const onDayClick = React.useCallback(() => {
    if (autoClose) {
      onConfirm();
    }
  }, [autoClose, onConfirm]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <CalendarCellButton {...previousMonthButton()}>
            <ChevronLeft className="h-4 w-4" />
          </CalendarCellButton>
        </div>
        <div>
          {year} / {month}
        </div>
        <div>
          <CalendarCellButton {...nextMonthButton()}>
            <ChevronRight className="h-4 w-4" />
          </CalendarCellButton>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(7,_1fr)] items-center gap-1">
        {weekDays.map((d) => (
          <div
            className="flex h-9 w-9 items-center justify-center rounded-md p-1 text-bodyNormal2Regular text-base-hi outline-none"
            key={d}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-[repeat(7,_1fr)] items-center gap-1">
        {days.map((d) => (
          <CalendarCellButton
            key={d.$date.toISOString()}
            data-selected={d.selected}
            data-disabled={d.disabled}
            data-range={d.range}
            data-day={d.day}
            data-now={d.now}
            data-current-month={d.inCurrentMonth}
            {...dayButton(d, { onClick: onDayClick })}
          >
            {getNumericText(d.day)}
          </CalendarCellButton>
        ))}
      </div>
    </div>
  );
};
