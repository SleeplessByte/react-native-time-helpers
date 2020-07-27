import { Platform } from 'react-native';

const IS_ANDROID = Platform.OS === 'android';

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const LONG_DAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export type Options = {
  longDayNames: typeof LONG_DAY_NAMES;
  shortDayNames: typeof DAY_NAMES;
  monthNames: typeof MONTH_NAMES;
};

const DEFAULTS: Options = {
  longDayNames: LONG_DAY_NAMES,
  shortDayNames: DAY_NAMES,
  monthNames: MONTH_NAMES,
};

export function localeLongWeekDayString(
  date: Date,
  { longDayNames }: Pick<Options, 'longDayNames'> = DEFAULTS
) {
  if (IS_ANDROID) {
    return longDayNames[date.getDay()];
  }

  return date.toLocaleDateString(undefined, { weekday: 'long' });
}

export function localeWeekDayString(
  date: Date,
  { shortDayNames }: Pick<Options, 'shortDayNames'> = DEFAULTS
) {
  if (IS_ANDROID) {
    return shortDayNames[date.getDay()];
  }

  return date.toLocaleDateString(undefined, { weekday: 'short' });
}

export function localeDateString(
  date: Date,
  showWeekDay = true,
  showYear = true,
  {
    shortDayNames,
    monthNames,
  }: Pick<Options, 'shortDayNames' | 'monthNames'> = DEFAULTS
) {
  if (IS_ANDROID) {
    const weekDay = shortDayNames[date.getDay()];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let result = showWeekDay ? `${weekDay}, ` : '';
    result = `${result}${day} ${month}`;
    return showYear ? `${result} ${year}` : result;
  }

  return date.toLocaleDateString(undefined, {
    day: 'numeric',
    year: showYear ? 'numeric' : undefined,
    month: 'long',
    weekday: showWeekDay ? 'short' : undefined,
  });
}

export function localeTimeString(date: Date, showSeconds = false) {
  if (IS_ANDROID) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours < 10 ? '0' : ''}${hours}:${
      minutes < 10 ? '0' : ''
    }${minutes}${showSeconds ? `:${seconds < 10 ? '0' : ''}${seconds}` : ''}`;
  }

  return date.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    second: showSeconds ? 'numeric' : undefined,
  });
}
