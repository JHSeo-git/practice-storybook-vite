import * as React from 'react';

interface DatePickerContextValue {
  autoClose: boolean;
  onConfirm: () => void;
}
const DatePickerContext = React.createContext<DatePickerContextValue | null>(null);

interface DatePickerProviderProps {
  autoClose?: boolean;
  onConfirm: () => void;
  children: React.ReactNode;
}
export const DatePickerContextProvider = ({
  autoClose = false,
  onConfirm,
  children,
}: DatePickerProviderProps) => {
  const value = React.useMemo(() => ({ autoClose, onConfirm }), [autoClose, onConfirm]);

  return <DatePickerContext.Provider value={value}>{children}</DatePickerContext.Provider>;
};

export const useDatePickerContext = () => {
  const context = React.useContext(DatePickerContext);
  if (!context) {
    throw new Error('DatePickerContext must be used within DatePickerProvider');
  }
  return context;
};

export type CalendarViewMode = 'days' | 'months' | 'years';
export const useCalendarViewMode = () => {
  const [calendarViewMode, setCalendarViewMode] = React.useState<CalendarViewMode>('days');
  return [calendarViewMode, setCalendarViewMode] as const;
};
