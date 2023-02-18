import type { DatePickerUserConfig, DPState } from '@rehookify/datepicker';
import {
  useCalendars,
  useDatePickerState,
  useDaysPropGetters,
  useMonthsActions,
  useMonthsPropGetters,
} from '@rehookify/datepicker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

import { Button } from '../Button';
import { CalendarCellButton } from './DatePicker.Base';
import { getNumericText } from './DatePicker.utils';
import { useDatePickerContext } from './DatePickerContext';

interface CalendarRangeRootProps {
  config: DatePickerUserConfig;
  onConfirm: () => void;
}
export const CalendarRangeRoot = ({ config, onConfirm }: CalendarRangeRootProps) => {
  const startDpState = useDatePickerState(config);
  const endDpState = useDatePickerState(config);

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
        <CalendarRange
          startDpState={startDpState}
          endDpState={endDpState}
          range="start"
          onConfirm={onConfirm}
        />
        <CalendarRange
          startDpState={startDpState}
          endDpState={endDpState}
          range="end"
          onConfirm={onConfirm}
        />
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
  onConfirm: () => void;
}
const CalendarRange = ({ startDpState, endDpState, range, onConfirm }: CalendarRangeProps) => {
  const targetDpState = React.useMemo(
    () => (range === 'start' ? startDpState : endDpState),
    [startDpState, endDpState, range]
  );

  const { calendars, weekDays } = useCalendars(targetDpState);
  const { previousMonthButton, nextMonthButton } = useMonthsPropGetters(targetDpState);
  const { autoClose } = useDatePickerContext();

  const { setMonth } = useMonthsActions(targetDpState);

  const { dayButton } = useDaysPropGetters(targetDpState);

  const onDayButtonHover = React.useCallback(
    (d: Date) => {
      const target = range === 'start' ? endDpState : startDpState;
      target.dispatch({ type: 'SET_RANGE_END', date: d });
    },
    [startDpState, endDpState, range]
  );

  const onDayClick = React.useCallback(() => {
    // we have to check before the dispatch because the dispatch will trigger a re-render
    const isAllSelected = targetDpState.selectedDates.length === 1;

    if (isAllSelected && autoClose) {
      onConfirm();
    }
  }, [targetDpState, autoClose, onConfirm]);

  const calendar = calendars[0];
  const { days, month, year } = calendar;

  React.useLayoutEffect(() => {
    if (range === 'start') {
      const startDate = startDpState.selectedDates[0];

      if (startDate) {
        setMonth(startDate);
      }
    }
  }, [range, setMonth, startDpState.selectedDates]);

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
            onMouseEnter={() => onDayButtonHover(d.$date)}
            onMouseOver={() => onDayButtonHover(d.$date)}
            {...dayButton(d, { onClick: onDayClick })}
          >
            {getNumericText(d.day)}
          </CalendarCellButton>
        ))}
      </div>
    </div>
  );
};
