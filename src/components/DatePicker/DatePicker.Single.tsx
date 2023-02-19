import type { DatePickerUserConfig, DPState } from '@rehookify/datepicker';
import { useDaysPropGetters } from '@rehookify/datepicker';
import { useCalendars } from '@rehookify/datepicker';
import { useDatePickerState, useMonthsActions } from '@rehookify/datepicker';
import * as React from 'react';

import { Button } from '../Button';
import {
  CalendarCellButton,
  CalendarHeader,
  CalendarMonths,
  CalendarYears,
} from './DatePicker.Base';
import { getNumericText } from './DatePicker.utils';
import { useCalendarViewMode, useDatePickerContext } from './DatePickerContext';

interface CalendarSingleRootProps {
  config: DatePickerUserConfig;
}
export const CalendarSingleRoot = ({ config }: CalendarSingleRootProps) => {
  const { onConfirm } = useDatePickerContext();
  const dpState = useDatePickerState(config);

  const { setMonth } = useMonthsActions(dpState);

  const onTodayClick = React.useCallback(() => {
    const today = new Date();

    setMonth(today);
  }, [setMonth]);

  return (
    <div>
      <div>
        <CalendarSingle dpState={dpState} />
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
}
const CalendarSingle = ({ dpState }: CalendarSingleProps) => {
  const [calendarViewMode, setCalendarViewMode] = useCalendarViewMode();

  return (
    <div>
      <CalendarHeader
        dpState={dpState}
        calendarViewMode={calendarViewMode}
        setCalendarViewMode={setCalendarViewMode}
      />
      <div className="mt-2">
        {calendarViewMode === 'days' && <CalendarDays dpState={dpState} />}
        {calendarViewMode === 'months' && (
          <CalendarMonths dpState={dpState} setCalendarViewMode={setCalendarViewMode} />
        )}
        {calendarViewMode === 'years' && (
          <CalendarYears dpState={dpState} setCalendarViewMode={setCalendarViewMode} />
        )}
      </div>
    </div>
  );
};

const CalendarDays = ({ dpState }: { dpState: DPState }) => {
  const { autoClose, onConfirm } = useDatePickerContext();
  const { calendars, weekDays } = useCalendars(dpState);

  const { dayButton } = useDaysPropGetters(dpState);

  const calendar = calendars[0];
  const { days } = calendar;

  const onDayClick = React.useCallback(() => {
    if (autoClose) {
      onConfirm?.();
    }
  }, [autoClose, onConfirm]);

  return (
    <>
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
    </>
  );
};
