import * as React from 'react';

interface DatePickerContextValue {
  autoClose: boolean;
}
const DatePickerContext = React.createContext<DatePickerContextValue | null>(null);

interface DatePickerProviderProps extends Partial<DatePickerContextValue> {
  children: React.ReactNode;
}
export const DatePickerContextProvider = ({
  autoClose = false,
  children,
}: DatePickerProviderProps) => {
  const value = React.useMemo(() => ({ autoClose }), [autoClose]);

  return <DatePickerContext.Provider value={value}>{children}</DatePickerContext.Provider>;
};

export const useDatePickerContext = () => {
  const context = React.useContext(DatePickerContext);
  if (!context) {
    throw new Error('DatePickerContext must be used within DatePickerProvider');
  }
  return context;
};
