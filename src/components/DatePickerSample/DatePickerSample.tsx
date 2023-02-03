import * as RadixPopover from '@radix-ui/react-popover';
import * as RehookifyDatePicker from '@rehookify/datepicker';
import { Calendar } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

export const useCalendars = RehookifyDatePicker.useContextCalendars;
export const useDaysPropGetters = RehookifyDatePicker.useContextDaysPropGetters;
export const useMonths = RehookifyDatePicker.useContextMonths;
export const useMonthsPropGetters = RehookifyDatePicker.useContextMonthsPropGetters;
export const useYears = RehookifyDatePicker.useContextYears;
export const useYearsPropGetters = RehookifyDatePicker.useContextYearsPropGetters;

export const getDayKey = (dpDay: RehookifyDatePicker.CalendarDay) =>
  `${dpDay.inCurrentMonth ? 'in' : 'out'}-${dpDay.day}`;

export const isValidDate = (d: unknown) => {
  return d instanceof Date && !isNaN(d as unknown as number);
};

interface DatePickerProps extends RadixPopover.PopoverProps {
  /**
   * An array of raw dates
   */
  selectedDates?: RehookifyDatePicker.DatePickerUserConfig['selectedDates'];
  /**
   * Every time a date is selected, it will be passed to the `onDatesChange` function.
   */
  onDatesChange?: RehookifyDatePicker.DatePickerUserConfig['onDatesChange'];
  /**
   * Locale configuration consists of values compatible with `date.toLocaleString()`.
   *
   * [Locale configuration](https://github.com/rehookify/datepicker#locale-configuration)
   */
  locale?: RehookifyDatePicker.DatePickerUserConfig['locale'];
  /**
   * Calendar configuration consists of `mode`, `offsets`, `startDay`.
   *
   * `mode: 'static' | 'fluid'` - controls how calendar will look like.
   *
   * `offsets` - adds additional calendars to the [Calendars](https://github.com/rehookify/datepicker#calendars).
   *
   * `startDay` - The day of the week that will be the first in the calendar. It accepts a number in the range of 0-6, where 0 represents Sunday and 6 represents Saturday.
   *
   * [Calendar configuration](https://github.com/rehookify/datepicker#calendar-configuration)
   */
  calendar?: RehookifyDatePicker.DatePickerUserConfig['calendar'];
  /**
   * Date configuration consists of `mode`, `minDate`, `maxDate`, `selectedDates`, `toggle`, `limit.
   *
   * `mode: 'single' | 'multiple' | 'range'` - defines how date picker behaves with days
   *
   * `minDate: Date` - all dates in prop-getters before the `minDate` will be marked as disabled. (if `minDate > NOW` - initial calendar will show the month with `minDate`)
   *
   * `maxDate: Date` - all dates in prop-getters after the `maxDate` will be marked as disabled. (if `maxDate < NOW` - initial calendar will show the month with `maxDate`)
   *
   * `selectedDates: Date | Date[]` - dates that will be added to `selectedDates` state. (if `mode: 'single'` - after the first click `selectedDates` will be reset to 1 date.)
   *
   * `toggle: boolean` - allows a user to unselect dates. (works only with `mode: 'multiple'`)
   *
   * `limit: number` - number of dates that a user could select. (works only with `mode: 'multiple'`)
   *
   * [Dates configuration](https://github.com/rehookify/datepicker#dates-configuration)
   */
  dates?: RehookifyDatePicker.DatePickerUserConfig['dates'];
  /**
   * Month configuration consists of `mode`, `numberOfYears`, `step`.
   *
   * `mode: 'decade' | 'fluid'` - it defines how current year will be centered;
   *
   * `numberOfYears: number` - the number of years you want to show to a user.
   *
   * `step: number` - it defines step for previous/nextYearsButton
   *
   * [Years configuration](https://github.com/rehookify/datepicker#years-configuration)
   */
  years?: RehookifyDatePicker.DatePickerUserConfig['years'];
  /**
   * The open state of the popover when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: RadixPopover.PopoverProps['defaultOpen'];
  /**
   * The controlled open state of the popover. Must be used in conjunction with onOpenChange.
   */
  open?: RadixPopover.PopoverProps['open'];
  /**
   * Event handler called when the open state of the popover changes.
   */
  onOpenChange?: RadixPopover.PopoverProps['onOpenChange'];
  /**
   * The modality of the popover. When set to `true`, interaction with outside elements will be disabled and only popover content will be visible to screen readers.
   */
  modal?: RadixPopover.PopoverProps['modal'];
  /**
   * Event handler called when the open state of the popover changes.
   */
  onOpenToggle?: () => void;
}
type DatePickerContextValue = Omit<DatePickerProps, 'children'>;
const defaultValues: DatePickerContextValue = {};
const DatePickerContext = React.createContext<DatePickerContextValue>(defaultValues);

const DatePickerProvider = ({
  children,
  defaultOpen,
  open: _open,
  onOpenChange: _onOpenChange,
  modal,
  onOpenToggle: _onOpenToggle,
  ...config
}: DatePickerProps) => {
  const [selectedDates, setSelectedDates] = React.useState(config.selectedDates);
  const [open, setOpen] = React.useState(_open ?? false);

  const onDatesChange = React.useCallback(
    (_selectedDates: NonNullable<DatePickerProps['selectedDates']>) => {
      setSelectedDates(_selectedDates);
      config.onDatesChange?.(_selectedDates);
    },
    [setSelectedDates, config.onDatesChange]
  );

  const onOpenChange = React.useCallback(
    (_open: boolean) => {
      setOpen(_open);
      _onOpenChange?.(_open);
    },
    [setOpen, _onOpenChange]
  );

  const onOpenToggle = React.useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
    _onOpenToggle?.();
  }, [setOpen, _onOpenToggle]);

  const contextValue = React.useMemo(
    () => ({
      defaultOpen,
      open,
      onOpenChange,
      modal,
      onOpenToggle,
      selectedDates,
      onDatesChange,
    }),
    [selectedDates, onDatesChange, defaultOpen, open, onOpenChange, modal, onOpenToggle]
  );

  return (
    <DatePickerContext.Provider value={contextValue}>
      <RadixPopover.Root
        defaultOpen={contextValue.defaultOpen}
        open={contextValue.open}
        onOpenChange={contextValue.onOpenChange}
        modal={contextValue.modal}
      >
        <RehookifyDatePicker.DatePickerStateProvider
          config={{
            ...config,
            selectedDates,
            onDatesChange,
          }}
        >
          {children}
        </RehookifyDatePicker.DatePickerStateProvider>
      </RadixPopover.Root>
    </DatePickerContext.Provider>
  );
};
const useDatePickerContext = () => {
  const context = React.useContext(DatePickerContext);
  if (context === defaultValues) {
    throw new Error('useDatePickerContext must be used within a DatePicker');
  }
  return context;
};

export const DatePicker = ({ ...props }: DatePickerProps) => {
  return <DatePickerProvider {...props} />;
};

interface DatePickerTrigger extends RadixPopover.PopoverTriggerProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixPopover.PopoverTriggerProps['asChild'];
}
export const DatePickerTrigger = React.forwardRef<HTMLButtonElement, DatePickerTrigger>(
  ({ ...props }, forwardedRef) => {
    return <RadixPopover.Trigger ref={forwardedRef} {...props} />;
  }
);
DatePickerTrigger.displayName = RadixPopover.Trigger.displayName;

interface DatePickerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * className for the input
   */
  className?: string;
}
export const DatePickerInput = React.forwardRef<HTMLInputElement, DatePickerInputProps>(
  ({ id, className, value, onChange, ...props }, forwardedRef) => {
    const [inputValue, setInputValue] = React.useState(value);
    const { onOpenToggle, selectedDates, onDatesChange } = useDatePickerContext();
    const inputId = id || 'date-picker-input';

    const selectedDatesString = React.useMemo(() => {
      if (!selectedDates || !selectedDates.length) {
        return;
      }

      if (selectedDates.some((d) => !isValidDate(new Date(d)))) {
        return;
      }

      if (selectedDates?.length) {
        return selectedDates.map((date) => date.toLocaleDateString()).join(', ');
      }
    }, [selectedDates]);

    const onInputChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const d = new Date(e.target.value);

        if (isValidDate(d)) {
          onDatesChange?.([d]);
          setInputValue(selectedDatesString);
          return;
        }

        setInputValue(e.target.value);
        onChange?.(e);
      },
      [onChange]
    );

    React.useEffect(() => {
      if (!selectedDatesString) {
        return;
      }
      setInputValue(selectedDatesString);
    }, [selectedDatesString]);

    return (
      <>
        <div className="relative">
          <input
            ref={forwardedRef}
            id={inputId}
            className={cn(
              'flex h-10 w-full rounded-md border border-base-7 py-2 pl-3 pr-8 text-label4Regular placeholder:text-base-9',
              'focus:outline-none focus:ring-2 focus:ring-base-7 focus:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              className
            )}
            value={inputValue}
            onChange={onInputChange}
            {...props}
          />
          <button
            type="button"
            className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded-md p-1 hover:bg-base-3"
            onClick={onOpenToggle}
          >
            <Calendar className=" h-4 w-4 " />
          </button>
          <DatePickerTrigger className="absolute inset-0 z-[-1]" />
        </div>
      </>
    );
  }
);
DatePickerInput.displayName = 'DatePickerInput';

interface DatePickerContentProps extends RadixPopover.PopoverContentProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixPopover.PopperContentProps['asChild'];
  /**
   * Event handler called when focus moves into the component after opening. It can be prevented by calling `event.preventDefault`.
   */
  onOpenAutoFocus?: RadixPopover.PopoverContentProps['onOpenAutoFocus'];
  /**
   * Event handler called when focus moves to the trigger after closing. It can be prevented by calling `event.preventDefault`.
   */
  onCloseAutoFocus?: RadixPopover.PopoverContentProps['onCloseAutoFocus'];
  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.
   */
  onEscapeKeyDown?: RadixPopover.PopoverContentProps['onEscapeKeyDown'];
  /**
   * Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onPointerDownOutside?: RadixPopover.PopoverContentProps['onPointerDownOutside'];
  /**
   * Event handler called when focus moves outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onFocusOutside?: RadixPopover.PopoverContentProps['onFocusOutside'];
  /**
   * Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onInteractOutside?: RadixPopover.PopoverContentProps['onInteractOutside'];
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `Popover.Portal`.
   */
  forceMount?: RadixPopover.PopoverContentProps['forceMount'];
  /**
   * The preferred side of the anchor to render against when open. Will be reversed when collisions occur and `avoidCollisions` is enabled.
   * @type "top" | "right" | "bottom" | "left"
   * @default "bottom"
   */
  side?: RadixPopover.PopoverContentProps['side'];
  /**
   * The distance in pixels from the anchor.
   * @default 5
   */
  sideOffset?: RadixPopover.PopoverContentProps['sideOffset'];
  /**
   * The preferred alignment against the anchor. May change when collisions occur.
   * @type "start" | "center" | "end"
   * @default "center"
   */
  align?: RadixPopover.PopoverContentProps['align'];
  /**
   * An offset in pixels from the `"start"` or `"end"` alignment options.
   * @default 0
   */
  alignOffset?: RadixPopover.PopoverContentProps['alignOffset'];
  /**
   * When `true`, overrides the side and `align` preferences to prevent collisions with boundary edges.
   * @default true
   */
  avoidCollisions?: RadixPopover.PopoverContentProps['avoidCollisions'];
  /**
   * The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.
   * @type Element | null | Array<Element | null>
   * @default []
   */
  collisionBoundary?: RadixPopover.PopoverContentProps['collisionBoundary'];
  /**
   * The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: `{ top: 20, left: 20 }`.
   * @type number | Partial<Record<Side, number>>
   * @default 0
   */
  collisionPadding?: RadixPopover.PopoverContentProps['collisionPadding'];
  /**
   * The padding between the arrow and the edges of the content. If your content has `border-radius`, this will prevent it from overflowing the corners.
   */
  arrowPadding?: RadixPopover.PopoverContentProps['arrowPadding'];
  /**
   * The sticky behavior on the align axis. `"partial"` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst `"always"` will keep the content in the boundary regardless.
   * @type "partial" | "always"
   * @default "partial"
   */
  sticky?: RadixPopover.PopoverContentProps['sticky'];
  /**
   * Whether to hide the content when the trigger becomes fully occluded.
   * @default false
   */
  hideWhenDetached?: RadixPopover.PopoverContentProps['hideWhenDetached'];
}
export const DatePickerContent = React.forwardRef<
  React.ElementRef<typeof RadixPopover.PopoverContent>,
  DatePickerContentProps
>(({ className, align = 'center', sideOffset = 5, ...props }, forwardedRef) => {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        ref={forwardedRef}
        className={cn(
          'z-50 rounded-md border border-base-7 bg-base-lo p-4 shadow-md outline-none animate-in',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
          'data-[state=closed]:animate-hide',
          className
        )}
        align={align}
        sideOffset={sideOffset}
        {...props}
      />
    </RadixPopover.Portal>
  );
});
DatePickerContent.displayName = RadixPopover.PopoverContent.displayName;
