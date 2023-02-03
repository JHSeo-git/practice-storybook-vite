import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

import { StoryContainer } from '../__storybook/StoryContainer';
import {
  DatePicker,
  DatePickerContent,
  DatePickerInput,
  getDayKey,
  useCalendars,
  useDaysPropGetters,
  useMonths,
  useMonthsPropGetters,
  useYears,
  useYearsPropGetters,
} from './DatePickerSample';

export default {
  title: 'Components/DatePickerSample',
  component: DatePicker,
  subcomponents: {
    DatePickerContent,
    DatePickerInput,
  },
} as ComponentMeta<typeof DatePicker>;

export const Template: ComponentStory<typeof DatePicker> = (args) => {
  return (
    <StoryContainer>
      <DatePicker {...args} open={true}>
        <DatePickerInput />
        <DatePickerContent>
          <DatePickerCalendar />
        </DatePickerContent>
      </DatePicker>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';

interface DateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * className to apply to the button
   */
  className?: string;
}
const DateButton = React.forwardRef<HTMLButtonElement, DateButtonProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <button
        ref={forwardedRef}
        className={cn('flex h-10 w-10 items-center justify-center p-1 outline-none', className)}
        {...props}
      />
    );
  }
);
DateButton.displayName = 'DateButton';

const DatePickerCalendarYears = () => {
  const { calendars } = useCalendars();

  const { previousYearsButton, nextYearsButton, yearButton } = useYearsPropGetters();

  const { years } = useYears();

  const { year } = calendars[0];

  return (
    <>
      <div className="flex items-center justify-between">
        <DateButton {...previousYearsButton()}>
          <ChevronLeft className="h-6 w-6" />
        </DateButton>
        <div className="flex items-center space-x-2">
          <button>{year}</button>
        </div>
        <DateButton {...nextYearsButton()}>
          <ChevronRight className="h-6 w-6" />
        </DateButton>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {years.map((y) => (
          <button
            key={`year-${y.year}`}
            {...yearButton(y)}
            className={cn(
              'flex items-center justify-center rounded-sm border border-base-7 bg-base-lo p-2',
              'hover:bg-base-1'
            )}
          >
            {y.year}
          </button>
        ))}
      </div>
    </>
  );
};

const DatePickerCalendarMonths = () => {
  const { calendars } = useCalendars();

  const { previousMonthButton, nextMonthButton, monthButton } = useMonthsPropGetters();

  const { months } = useMonths();

  const { year, month } = calendars[0];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <DateButton {...previousMonthButton()}>
          <ChevronLeft className="h-6 w-6" />
        </DateButton>
        <div className="flex items-center space-x-2">
          <button>{month}</button>
        </div>
        <DateButton {...nextMonthButton()}>
          <ChevronRight className="h-6 w-6" />
        </DateButton>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {months.map((m) => (
          <button
            key={`month-${year}-${m.month}`}
            {...monthButton(m)}
            className={cn(
              'flex items-center justify-center rounded-sm border border-base-7 bg-base-lo p-2',
              'hover:bg-base-1'
            )}
          >
            {m.month}
          </button>
        ))}
      </div>
    </div>
  );
};

const DatePickerCalendarDays = () => {
  const { calendars, weekDays } = useCalendars();

  const { previousMonthButton, nextMonthButton } = useMonthsPropGetters();

  const { dayButton } = useDaysPropGetters();

  const { year, month, days } = calendars[0];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <DateButton {...previousMonthButton()}>
          <ChevronLeft className="h-6 w-6" />
        </DateButton>
        <div className="flex items-center space-x-2">
          <button>{month}</button>
          <button>{year}</button>
        </div>
        <DateButton {...nextMonthButton()}>
          <ChevronRight className="h-6 w-6" />
        </DateButton>
      </div>
      <ul className="grid grid-cols-7 gap-1">
        {weekDays.map((wd) => (
          <li
            key={`weekday-${wd}`}
            className={cn('flex items-center justify-center text-subtitle2Regular')}
          >
            {wd}
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-7 gap-1">
        {days.map((dpDay) => (
          <li key={getDayKey(dpDay)}>
            <DateButton
              className={cn(
                'rounded-sm text-bodyNormal2Regular text-base-hi',
                !dpDay.inCurrentMonth && 'text-base-weak',
                dpDay.selected && 'bg-info-base text-base-lo',
                dpDay.now && 'border border-info-base'
              )}
              {...dayButton(dpDay)}
            >
              {dpDay.day}
            </DateButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DatePickerCalendar = () => {
  const [view, setView] = React.useState<'days' | 'months' | 'years'>('days');

  return (
    <>
      {view === 'days' && <DatePickerCalendarDays />}
      {view === 'months' && <DatePickerCalendarMonths />}
      {view === 'years' && <DatePickerCalendarYears />}
    </>
  );
};
