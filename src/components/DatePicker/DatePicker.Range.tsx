import * as RehookifyDatepicker from '@rehookify/datepicker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

import { Button } from '../Button';
import { CalendarCellButton } from './DatePicker.Base';

interface CalendarRootProps {
  config: RehookifyDatepicker.DatePickerUserConfig;
  onConfirm: () => void;
}
export const CalendarRangeRoot = ({ config, onConfirm }: CalendarRootProps) => {
  const startDpState = RehookifyDatepicker.useDatePickerState(config);
  const endDpState = RehookifyDatepicker.useDatePickerState(config);

  const { setMonth: startSetMonth } = RehookifyDatepicker.useMonthsActions(startDpState);
  const { setMonth: endSetMonth } = RehookifyDatepicker.useMonthsActions(endDpState);

  const onTodayClick = () => {
    const today = new Date();
    startSetMonth(today);
    endSetMonth(today);
  };

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
  startDpState: RehookifyDatepicker.DPState;
  endDpState: RehookifyDatepicker.DPState;
  range: 'start' | 'end';
}
const CalendarRange = ({ startDpState, endDpState, range }: CalendarRangeProps) => {
  const targetDpState = range === 'start' ? startDpState : endDpState;
  const { calendars, weekDays } = RehookifyDatepicker.useCalendars(targetDpState);
  const { previousMonthButton, nextMonthButton } =
    RehookifyDatepicker.useMonthsPropGetters(targetDpState);

  const { setMonth } = RehookifyDatepicker.useMonthsActions(targetDpState);

  const { dayButton } = RehookifyDatepicker.useDaysPropGetters(targetDpState);

  const onDayButtonHover = (d: Date) => {
    const target = range === 'start' ? endDpState : startDpState;
    target.dispatch({ type: 'SET_RANGE_END', date: d });
  };

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
            {...dayButton(d)}
          >
            {d.day}
          </CalendarCellButton>
        ))}
      </div>
    </div>
  );
};
