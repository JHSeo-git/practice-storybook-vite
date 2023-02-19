import type { DatePickerUserConfig, DPState } from '@rehookify/datepicker';
import {
  useCalendars,
  useDatePickerState,
  useDaysPropGetters,
  useMonthsActions,
} from '@rehookify/datepicker';
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

interface CalendarRangeRootProps {
  config: DatePickerUserConfig;
}
export const CalendarRangeRoot = ({ config }: CalendarRangeRootProps) => {
  const { onConfirm } = useDatePickerContext();
  const startDpState = useDatePickerState(config);
  const endDpState = useDatePickerState(config);

  console.log({ startDpState });

  const { setMonth: startSetMonth } = useMonthsActions(startDpState);
  const { setMonth: endSetMonth } = useMonthsActions(endDpState);

  const onTodayClick = React.useCallback(() => {
    const today = new Date();

    startSetMonth(today);
    endSetMonth(today);
  }, [startSetMonth, endSetMonth]);

  return (
    <div>
      <div className="flex space-x-5">
        <CalendarRange startDpState={startDpState} endDpState={endDpState} range="start" />
        <CalendarRange startDpState={startDpState} endDpState={endDpState} range="end" />
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

interface CalendarRangeProps {
  startDpState: DPState;
  endDpState: DPState;
  range: 'start' | 'end';
}
const CalendarRange = ({ startDpState, endDpState, range }: CalendarRangeProps) => {
  const targetDpState = range === 'start' ? startDpState : endDpState;
  const [calendarViewMode, setCalendarViewMode] = useCalendarViewMode();

  React.useLayoutEffect(() => {
    const startDate = startDpState.selectedDates[0];

    if (startDate) {
      startDpState.dispatch({ type: 'SET_OFFSET_DATE', date: startDate });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <CalendarHeader
        dpState={range === 'start' ? startDpState : endDpState}
        calendarViewMode={calendarViewMode}
        setCalendarViewMode={setCalendarViewMode}
      />
      <div className="mt-2">
        {calendarViewMode === 'days' && (
          <CalendarRangeDays startDpState={startDpState} endDpState={endDpState} range={range} />
        )}
        {calendarViewMode === 'months' && (
          <CalendarMonths dpState={targetDpState} setCalendarViewMode={setCalendarViewMode} />
        )}
        {calendarViewMode === 'years' && (
          <CalendarYears dpState={targetDpState} setCalendarViewMode={setCalendarViewMode} />
        )}
      </div>
    </div>
  );
};

const CalendarRangeDays = ({ startDpState, endDpState, range }: CalendarRangeProps) => {
  const targetDpState = range === 'start' ? startDpState : endDpState;

  const { autoClose, onConfirm } = useDatePickerContext();

  const { calendars, weekDays } = useCalendars(targetDpState);
  const { dayButton } = useDaysPropGetters(targetDpState);

  const onDayButtonHover = React.useCallback(
    (d: Date) => {
      const target = range === 'start' ? endDpState : startDpState;
      target.dispatch({ type: 'SET_RANGE_END', date: d });
    },
    [startDpState, endDpState, range]
  );

  const onDayClick = React.useCallback(() => {
    const isAllSelected = targetDpState.selectedDates.length === 1;

    if (isAllSelected && autoClose) {
      onConfirm();
    }
  }, [targetDpState, autoClose, onConfirm]);

  const calendar = calendars[0];
  const { days } = calendar;

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
            onMouseEnter={() => onDayButtonHover(d.$date)}
            onMouseOver={() => onDayButtonHover(d.$date)}
            {...dayButton(d, { onClick: onDayClick })}
          >
            {getNumericText(d.day)}
          </CalendarCellButton>
        ))}
      </div>
    </>
  );
};
