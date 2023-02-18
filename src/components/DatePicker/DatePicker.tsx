import type * as RehookifyDatepicker from '@rehookify/datepicker';
import * as React from 'react';
import useOnClickOutside from 'use-onclickoutside';

import { useControllableState } from '@/hooks/useControllableState';

import { DatePickerInput } from './DatePicker.Base';
import { CalendarRangeRoot } from './DatePicker.Range';
import {
  DEFAULT_DATE_FORMAT,
  getFormattedDate,
  getParsedDatesWithCharachter,
} from './DatePicker.utils';

interface DatePickerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof DatePickerInput>, 'value' | 'onTriggerClick'> {
  className?: string;

  open?: boolean;
  onOpenChange?: (open: boolean) => void;

  selectedDates?: RehookifyDatepicker.DatePickerUserConfig['selectedDates'];
  onDatesChange?: RehookifyDatepicker.DatePickerUserConfig['onDatesChange'];

  value?: string;
  onValueChange?: (value: string) => void;

  dateFormat?: string;

  config?: Omit<RehookifyDatepicker.DatePickerUserConfig, 'selectedDates' | 'onDatesChange'>;
}
const charachter = ' ~ ';
export const DatePicker = React.forwardRef<
  React.ElementRef<typeof DatePickerInput>,
  DatePickerProps
>(
  (
    {
      className,

      open: propOpen,
      onOpenChange: propOnOpenChange,

      value: propValue,
      onValueChange: propOnValueChange,

      selectedDates: propSelectedDates,
      onDatesChange: propOnDatesChange,

      dateFormat = DEFAULT_DATE_FORMAT,

      onChange,

      config: propConfig,

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

    const popoverRef = React.useRef<HTMLDivElement>(null);
    useOnClickOutside(popoverRef, () => setOpen(false));

    const onDatesChange = React.useCallback(
      (dates: RehookifyDatepicker.DatePickerUserConfig['selectedDates']) => {
        setSelectedDates(dates);
        setValue(dates?.map((date) => getFormattedDate({ date })).join(charachter) || '');
      },
      [setSelectedDates, setValue]
    );

    const placeholder = React.useMemo(() => {
      if (propPlaceholder) {
        return propPlaceholder;
      }
      return `${DEFAULT_DATE_FORMAT.toUpperCase()}${charachter}${DEFAULT_DATE_FORMAT.toUpperCase()}`;
    }, [propPlaceholder]);

    const config: RehookifyDatepicker.DatePickerUserConfig = React.useMemo(
      () => ({
        ...propConfig,
        selectedDates,
        onDatesChange,
        locale: {
          monthName: '2-digit',
          weekday: 'short',
          ...propConfig?.locale,
        },
      }),
      [propConfig, selectedDates, onDatesChange]
    );

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
      <div className="relative">
        <DatePickerInput
          ref={forwardedRef}
          className={className}
          value={value}
          onChange={(e) => {
            onChange?.(e);

            setValue(e.target.value);
          }}
          onTriggerClick={() => setOpen((prev) => !prev)}
          placeholder={placeholder}
          {...props}
        />
        <CalendarPopover ref={popoverRef} open={open}>
          <Calendar config={config} onConfirm={() => setOpen(false)} />
        </CalendarPopover>
      </div>
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
  config: RehookifyDatepicker.DatePickerUserConfig;
  onConfirm: () => void;
}
const Calendar = ({ config, onConfirm }: CalendarProps) => {
  return <CalendarRangeRoot config={config} onConfirm={onConfirm} />;
};
