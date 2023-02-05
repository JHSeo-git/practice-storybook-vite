import * as RadixPopover from '@radix-ui/react-popover';
import { Slot } from '@radix-ui/react-slot';
import * as RehookifyDatePicker from '@rehookify/datepicker';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

type CalendarView = 'days' | 'months' | 'years';
interface DatePickerContextValue {
  // DatePickerProps
  open: DatePickerProps['open'];
  onOpenChange: DatePickerProps['onOpenChange'];
  onOpenToggle: () => void;
  // @rehookify/datepicker
  selectedDates: RehookifyDatePicker.DatePickerUserConfig['selectedDates'];
  onDatesChange: RehookifyDatePicker.DatePickerUserConfig['onDatesChange'];
  // local view mode
  calendarView: CalendarView;
  onCalendarViewChange: (view: CalendarView) => void;
}
const DatePickerContext = React.createContext<DatePickerContextValue | null>(null);

const DatePickerProvider = ({
  children,
  defaultOpen = false,
  open: propOpen,
  onOpenChange: propOnOpenChange,
  calendarView: propCalendarView,
  onCalendarViewChange: propOnCalendarViewChange,
  config,
  ...props
}: DatePickerProps) => {
  const [open, setOpen] = React.useState(propOpen || defaultOpen);
  const onOpenChange = React.useCallback(
    (_open: boolean) => {
      setOpen(_open);
      propOnOpenChange?.(_open);
    },
    [setOpen, propOnOpenChange]
  );
  const onOpenToggle = React.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]);

  const {
    selectedDates: propSelectedDates,
    onDatesChange: propOnDatesChange,
    ...restConfig
  } = config ?? {};

  const [selectedDates, setSelectedDates] = React.useState(propSelectedDates);
  const onDatesChange = React.useCallback(
    (dates: DatePickerContextValue['selectedDates']) => {
      setSelectedDates(dates);
      dates && propOnDatesChange?.(dates);
    },
    [setSelectedDates, propOnDatesChange]
  );

  const [calendarView, setCalendarView] = React.useState<CalendarView>(propCalendarView ?? 'days');
  const onCalendarViewChange = React.useCallback(
    (view: CalendarView) => {
      setCalendarView(view);
      propOnCalendarViewChange?.(view);
    },
    [setCalendarView, propOnCalendarViewChange]
  );

  const value = React.useMemo(
    () => ({
      open,
      onOpenChange,
      onOpenToggle,
      selectedDates,
      onDatesChange,
      calendarView,
      onCalendarViewChange,
    }),
    [
      open,
      onOpenChange,
      onOpenToggle,
      selectedDates,
      onDatesChange,
      calendarView,
      onCalendarViewChange,
    ]
  );

  return (
    <DatePickerContext.Provider value={value}>
      <RadixPopover.Root {...props} {...value}>
        <RehookifyDatePicker.DatePickerStateProvider
          config={{ ...restConfig, selectedDates, onDatesChange }}
        >
          {children}
        </RehookifyDatePicker.DatePickerStateProvider>
      </RadixPopover.Root>
    </DatePickerContext.Provider>
  );
};
const useDatePickerContext = () => {
  const context = React.useContext(DatePickerContext);
  if (!context) {
    throw new Error('useDatePickerContext must be used within a DatePickerProvider');
  }
  return context;
};

interface DatePickerProps extends RadixPopover.PopoverProps {
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
   * DatePicker user configuration.
   */
  config?: RehookifyDatePicker.DatePickerUserConfig;
  /**
   * The view mode of the calendar.
   */
  calendarView?: CalendarView;
  /**
   * Event handler called when the view mode of the calendar changes.
   */
  onCalendarViewChange?: (view: CalendarView) => void;
}
export const DatePicker = ({ ...props }: DatePickerProps) => {
  return <DatePickerProvider {...props} />;
};

interface DatePickerTriggerProps extends RadixPopover.PopoverTriggerProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixPopover.PopoverTriggerProps['asChild'];
}
export const DatePickerTrigger = React.forwardRef<
  React.ElementRef<typeof RadixPopover.PopoverTrigger>,
  DatePickerTriggerProps
>(({ ...props }, forwardedRef) => {
  return <RadixPopover.Trigger ref={forwardedRef} {...props} />;
});
DatePickerTrigger.displayName = RadixPopover.Trigger.displayName;

interface DatePickerBaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * className to apply to the input
   */
  className?: string;
}
export const DatePickerBaseInput = React.forwardRef<HTMLInputElement, DatePickerBaseInputProps>(
  ({ className, ...props }, forwardedRef) => {
    const { onOpenToggle } = useDatePickerContext();

    return (
      <div className="relative">
        <input
          ref={forwardedRef}
          className={cn(
            'border-base-7 text-label4Regular placeholder:text-base-9 flex h-10 w-full rounded-md border py-2 pl-3 pr-8',
            'focus:ring-base-7 focus:outline-none focus:ring-2 focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...props}
        />
        <button
          type="button"
          className="hover:bg-base-3 absolute top-1/2 right-2.5 -translate-y-1/2 rounded-md p-1"
          onClick={onOpenToggle}
        >
          <CalendarIcon className=" h-4 w-4 " />
        </button>
        <DatePickerTrigger className="absolute inset-0 z-[-1]" />
      </div>
    );
  }
);
DatePickerBaseInput.displayName = 'DatePickerBaseInput';

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
          'w-80',
          'border-base-7 bg-base-lo animate-in z-50 rounded-md border p-4 shadow-md outline-none',
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

// ui based @rehookify/datepicker

export const useCalendars = RehookifyDatePicker.useContextCalendars;
export const useDaysPropGetters = RehookifyDatePicker.useContextDaysPropGetters;
export const useMonths = RehookifyDatePicker.useContextMonths;
export const useMonthsPropGetters = RehookifyDatePicker.useContextMonthsPropGetters;
export const useYears = RehookifyDatePicker.useContextYears;
export const useYearsPropGetters = RehookifyDatePicker.useContextYearsPropGetters;
export const useMonthsActions = RehookifyDatePicker.useContextMonthsActions;
export const useYearActions = RehookifyDatePicker.useContextYearsActions;

interface CalendarBaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * classNAme to apply to the button.
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: boolean;
}
const CalendarBaseButton = React.forwardRef<HTMLButtonElement, CalendarBaseButtonProps>(
  ({ className, asChild = false, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={forwardedRef}
        className={cn(
          'text-bodyNormal2Regular text-base-hi flex h-9 w-9 items-center justify-center rounded-md p-1 outline-none',
          'hover:bg-base-3',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    );
  }
);
CalendarBaseButton.displayName = 'CalendarBaseButton';

interface CalendarUIProps {
  calendarView?: CalendarView;
  className?: string;
  children: React.ReactNode;
}
const CalendarGrid = ({ calendarView = 'days', className, children }: CalendarUIProps) => {
  return (
    <ul
      className={cn(
        'grid gap-1',
        calendarView === 'days' && 'grid-cols-7',
        calendarView === 'months' && 'grid-cols-3',
        calendarView === 'years' && 'grid-cols-3',
        className
      )}
    >
      {children}
    </ul>
  );
};
const CalendarGridItem = ({ className, children }: CalendarUIProps) => {
  return <li className={cn('flex items-center justify-center', className)}>{children}</li>;
};

interface CalendarCellButtonProps extends CalendarBaseButtonProps {
  inCurrentMonth?: boolean;
  now?: boolean;
  selected?: boolean;
}
const CalendarCellButton = React.forwardRef<
  React.ElementRef<typeof CalendarBaseButton>,
  CalendarCellButtonProps
>(({ className, inCurrentMonth, now, selected, ...props }, forwardedRef) => {
  return (
    <div className="relative flex items-center justify-center">
      <CalendarBaseButton
        ref={forwardedRef}
        className={cn(
          typeof inCurrentMonth === 'boolean' && !inCurrentMonth && 'opacity-70',
          selected && 'bg-info-base text-base-lo hover:bg-info-hi hover:text-base-lo',
          className
        )}
        {...props}
      />
      {now && <div className="bg-danger-base absolute top-0 right-0 h-1.5 w-1.5 rounded-full" />}
    </div>
  );
});
CalendarCellButton.displayName = 'CalendarCellButton';

interface CalendarHeaderProps {
  className?: string;
}
const CalendarHeader = ({ className }: CalendarHeaderProps) => {
  const { calendarView, onCalendarViewChange } = useDatePickerContext();
  const { previousMonthButton, nextMonthButton } = useMonthsPropGetters();
  const { previousYearsButton, nextYearsButton } = useYearsPropGetters();
  const { calendars } = useCalendars();
  const { year, month } = calendars[0];

  const compPreviousButton = React.useMemo(() => {
    if (calendarView === 'days') {
      return previousMonthButton;
    }
    if (calendarView === 'years') {
      return previousYearsButton;
    }
  }, [calendarView, previousMonthButton, previousYearsButton]);

  const compNextButton = React.useMemo(() => {
    if (calendarView === 'days') {
      return nextMonthButton;
    }
    if (calendarView === 'years') {
      return nextYearsButton;
    }
  }, [calendarView, nextMonthButton, nextYearsButton]);

  const compTitle = React.useMemo(() => {
    if (calendarView === 'days') {
      return `${year} / ${month}`;
    }
    if (calendarView === 'months') {
      return year;
    }
    if (calendarView === 'years') {
      return 'Years';
    }
  }, [calendarView, year, month]);

  const onClickTitle = () => {
    if (calendarView === 'days') {
      onCalendarViewChange('months');
    }
    if (calendarView === 'months') {
      onCalendarViewChange('years');
    }
  };

  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div>
        {compPreviousButton && (
          <CalendarBaseButton {...compPreviousButton()}>
            <ChevronLeft className="h-6 w-6" />
          </CalendarBaseButton>
        )}
      </div>
      <div className="flex items-center">
        {calendarView === 'years' ? (
          compTitle
        ) : (
          <CalendarBaseButton className="w-auto px-2" onClick={onClickTitle}>
            {compTitle}
          </CalendarBaseButton>
        )}
      </div>
      <div>
        {compNextButton && (
          <CalendarBaseButton {...compNextButton()}>
            <ChevronRight className="h-6 w-6" />
          </CalendarBaseButton>
        )}
      </div>
    </div>
  );
};

const CalendarFooter = () => {
  const { calendarView, onCalendarViewChange, onOpenToggle } = useDatePickerContext();
  const { setYear } = useYearActions();
  const { setMonth } = useMonthsActions();

  const onClickToday = () => {
    const today = new Date();
    setYear(today);
    setMonth(today);
  };

  const onClickViewChange = () => {
    if (calendarView === 'months') {
      onCalendarViewChange('days');
    }
    if (calendarView === 'years') {
      onCalendarViewChange('months');
    }
  };

  return (
    <div className="flex items-center justify-between">
      <CalendarBaseButton className="text-label5Regular w-auto px-2" onClick={onClickToday}>
        Today
      </CalendarBaseButton>
      <div className="flex items-center space-x-4">
        {['months', 'years'].includes(calendarView) && (
          <CalendarBaseButton
            className="text-label5Regular w-auto px-2"
            onClick={onClickViewChange}
          >
            Back
          </CalendarBaseButton>
        )}
        <CalendarBaseButton className="text-label5Regular w-auto px-2" onClick={onOpenToggle}>
          Close
        </CalendarBaseButton>
      </div>
    </div>
  );
};

const getDayKey = (d: RehookifyDatePicker.CalendarDay) =>
  `${d.inCurrentMonth ? 'in' : 'out'}-${d.day}`;
const getMonthKey = (m: RehookifyDatePicker.CalendarMonth) => m.month;
const getYearKey = (y: RehookifyDatePicker.CalendarYear) => y.year;

const CalendarDays = () => {
  const { onOpenToggle } = useDatePickerContext();
  const { calendars, weekDays } = useCalendars();

  const { dayButton } = useDaysPropGetters();

  const { days } = calendars[0];

  return (
    <>
      <CalendarGrid>
        {weekDays.map((wd) => (
          <CalendarGridItem key={wd}>
            <span className="text-bodyNormal2Regular text-base-hi">{wd}</span>
          </CalendarGridItem>
        ))}
      </CalendarGrid>
      <CalendarGrid>
        {days.map((d) => (
          <CalendarGridItem key={getDayKey(d)}>
            <CalendarCellButton
              inCurrentMonth={d.inCurrentMonth}
              now={d.now}
              selected={d.selected}
              disabled={d.disabled}
              {...dayButton(d, { onClick: onOpenToggle })}
            >
              {d.day}
            </CalendarCellButton>
          </CalendarGridItem>
        ))}
      </CalendarGrid>
    </>
  );
};

const CalendarMonths = () => {
  const { onCalendarViewChange } = useDatePickerContext();
  const { monthButton } = useMonthsPropGetters();

  const { months } = useMonths();

  const onClickMonth = () => {
    onCalendarViewChange('days');
  };

  return (
    <>
      <CalendarGrid calendarView="months">
        {months.map((m) => (
          <CalendarGridItem key={getMonthKey(m)}>
            <CalendarCellButton
              className="w-auto px-4"
              now={m.now}
              selected={m.selected}
              {...monthButton(m, { onClick: onClickMonth })}
            >
              {m.month}
            </CalendarCellButton>
          </CalendarGridItem>
        ))}
      </CalendarGrid>
    </>
  );
};

const CalendarYears = () => {
  const { onCalendarViewChange } = useDatePickerContext();
  const { yearButton } = useYearsPropGetters();

  const { years } = useYears();

  const onClickYear = () => {
    onCalendarViewChange('days');
  };

  return (
    <>
      <CalendarGrid calendarView="years">
        {years.map((y) => (
          <CalendarGridItem key={getYearKey(y)}>
            <CalendarCellButton
              className="w-auto px-4"
              now={y.now}
              selected={y.selected}
              disabled={y.disabled}
              {...yearButton(y, { onClick: onClickYear })}
            >
              {y.year}
            </CalendarCellButton>
          </CalendarGridItem>
        ))}
      </CalendarGrid>
    </>
  );
};

export const Calendar = () => {
  const { calendarView } = useDatePickerContext();

  return (
    <div className="space-y-4">
      <CalendarHeader />
      {calendarView === 'days' && <CalendarDays />}
      {calendarView === 'months' && <CalendarMonths />}
      {calendarView === 'years' && <CalendarYears />}
      <CalendarFooter />
    </div>
  );
};
