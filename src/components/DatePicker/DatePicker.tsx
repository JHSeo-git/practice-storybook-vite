import type { DatePickerUserConfig, DatesUserConfig } from '@rehookify/datepicker';
import * as React from 'react';
import useOnClickOutside from 'use-onclickoutside';

import { useControllableState } from '@/hooks/useControllableState';

import { DatePickerInput } from './DatePicker.Base';
import { CalendarRangeRoot } from './DatePicker.Range';
import { CalendarSingleRoot } from './DatePicker.Single';
import {
  DEFAULT_DATE_FORMAT,
  getFormattedDate,
  getParsedDatesWithCharachter,
} from './DatePicker.utils';
import { DatePickerContextProvider } from './DatePickerContext';

const charachter = ' ~ ';

interface DatePickerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof DatePickerInput>, 'value' | 'onTriggerClick'> {
  className?: string;

  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onConfirm?: () => void;
  autoClose?: boolean;

  selectedDates?: DatePickerUserConfig['selectedDates'];
  onDatesChange?: DatePickerUserConfig['onDatesChange'];

  value?: string;
  onValueChange?: (value: string) => void;

  dateFormat?: string;

  mode?: DatesUserConfig['mode'];
  localeConfig?: DatePickerUserConfig['locale'];
  calendarConfig?: DatePickerUserConfig['calendar'];
  yearsConfig?: DatePickerUserConfig['years'];
  datesConfig?: Omit<DatePickerUserConfig['dates'], 'mode'>;
}
export const DatePicker = React.forwardRef<
  React.ElementRef<typeof DatePickerInput>,
  DatePickerProps
>(
  (
    {
      className,

      open: propOpen,
      onOpenChange: propOnOpenChange,
      onConfirm: propOnConfirm,
      autoClose = true,

      value: propValue,
      onValueChange: propOnValueChange,

      selectedDates: propSelectedDates,
      onDatesChange: propOnDatesChange,

      dateFormat = DEFAULT_DATE_FORMAT,

      onChange: propOnChange,

      mode = 'single',
      localeConfig,
      calendarConfig,
      yearsConfig,
      datesConfig,

      placeholder: propPlaceholder,
      ...props
    },
    forwardedRef
  ) => {
    const [open = false, setOpen] = useControllableState({
      prop: propOpen,
      onChange: propOnOpenChange,
    });
    const [selectedDates = [], setSelectedDates] = useControllableState({
      prop: propSelectedDates,
      onChange: propOnDatesChange,
    });
    const [value = '', setValue] = useControllableState({
      prop: propValue,
      onChange: propOnValueChange,
    });

    const onDatesChange = React.useCallback(
      (dates: DatePickerUserConfig['selectedDates']) => {
        setSelectedDates(dates);
        setValue(dates?.map((date) => getFormattedDate({ date })).join(charachter) || '');
      },
      [setSelectedDates, setValue]
    );
    const onChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        propOnChange?.(e);
        setValue(e.target.value);
      },
      [propOnChange, setValue]
    );
    const onConfirm = React.useCallback(() => {
      setOpen(false);
      propOnConfirm?.();
    }, [setOpen, propOnConfirm]);

    const placeholder = React.useMemo(() => {
      if (propPlaceholder) {
        return propPlaceholder;
      }

      if (mode === 'single') {
        return DEFAULT_DATE_FORMAT.toUpperCase();
      }

      return `${DEFAULT_DATE_FORMAT.toUpperCase()}${charachter}${DEFAULT_DATE_FORMAT.toUpperCase()}`;
    }, [propPlaceholder, mode]);
    const config: DatePickerUserConfig = React.useMemo(
      () => ({
        selectedDates,
        onDatesChange,
        locale: {
          monthName: '2-digit',
          weekday: 'short',
          locale: 'KR',
          ...localeConfig,
        },
        calendar: calendarConfig,
        years: yearsConfig,
        dates: {
          mode,
          ...datesConfig,
        },
      }),
      [selectedDates, onDatesChange, mode, localeConfig, calendarConfig, yearsConfig, datesConfig]
    );

    const popoverRef = React.useRef<HTMLDivElement>(null);
    useOnClickOutside(popoverRef, () => setOpen(false));

    React.useEffect(() => {
      if (!open) {
        return;
      }

      if (!value) {
        return;
      }

      const parsedDates = getParsedDatesWithCharachter({ text: value, charachter, dateFormat });
      if (parsedDates.length === 0) {
        return;
      }

      setSelectedDates(parsedDates);
    }, [open, setSelectedDates, value, dateFormat]);

    return (
      <DatePickerContextProvider autoClose={autoClose}>
        <div className="relative">
          <DatePickerInput
            ref={forwardedRef}
            className={className}
            value={value}
            onChange={onChange}
            onTriggerClick={() => setOpen((prev) => !prev)}
            placeholder={placeholder}
            {...props}
          />
          <CalendarPopover ref={popoverRef} open={open}>
            <Calendar mode={mode} config={config} onConfirm={onConfirm} />
          </CalendarPopover>
        </div>
      </DatePickerContextProvider>
    );
  }
);
DatePicker.displayName = 'DatePicker';

interface CalendarPopoverProps {
  open: boolean;
  children: React.ReactNode;
}
const CalendarPopover = React.forwardRef<HTMLDivElement, CalendarPopoverProps>(
  ({ open, children }, forwardedRef) => {
    if (!open) {
      return null;
    }

    return (
      <div
        ref={forwardedRef}
        className="absolute top-full left-0 mt-2 rounded-md border border-base-7 bg-base-lo p-4 shadow-md outline-none"
      >
        {children}
      </div>
    );
  }
);
CalendarPopover.displayName = 'CalendarPopover';

interface CalendarProps {
  mode: DatesUserConfig['mode'];
  config: DatePickerUserConfig;
  onConfirm: () => void;
}
const Calendar = ({ mode, config, onConfirm }: CalendarProps) => {
  return (
    <>
      {mode === 'single' && <CalendarSingleRoot config={config} onConfirm={onConfirm} />}
      {mode === 'range' && <CalendarRangeRoot config={config} onConfirm={onConfirm} />}
    </>
  );
};
