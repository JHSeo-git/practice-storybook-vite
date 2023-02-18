import compareAsc from 'date-fns/compareAsc';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import parse from 'date-fns/parse';

export const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd';

interface GetFormattedDateParams {
  date: Date;
  dateFormat?: string;
}
export function getFormattedDate({
  date,
  dateFormat = DEFAULT_DATE_FORMAT,
}: GetFormattedDateParams) {
  return format(date, dateFormat);
}

interface GetParsedDateParams {
  text: string;
  dateFormat?: string;
}
export function getParsedDate({ text, dateFormat = DEFAULT_DATE_FORMAT }: GetParsedDateParams) {
  const parsedDate = parse(text, dateFormat, new Date());

  if (isValid(parsedDate)) {
    return parsedDate;
  }

  return null;
}

interface GetParsedDatesWithCharachter {
  text: string;
  dateFormat?: string;
  charachter: string;
}
export function getParsedDatesWithCharachter({
  text,
  dateFormat = DEFAULT_DATE_FORMAT,
  charachter,
}: GetParsedDatesWithCharachter) {
  const [from, to] = text.split(charachter);

  const parsedDateFrom = parse(from, dateFormat, new Date());
  const parsedDateTo = parse(to, dateFormat, new Date());

  return [
    ...(isValid(parsedDateFrom) ? [parsedDateFrom] : []),
    ...(isValid(parsedDateTo) ? [parsedDateTo] : []),
  ]
    .filter(Boolean)
    .sort(compareAsc);
}

export function getNumericText(text: string) {
  return text.replace(/\D/g, '');
}
