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

export function localeLongWeekDayString(date: Date) {
  if (IS_ANDROID) {
    return LONG_DAY_NAMES[date.getDay()];
  }

  return date.toLocaleDateString(undefined, { weekday: 'long' });
}

export function localeWeekDayString(date: Date) {
  if (IS_ANDROID) {
    return DAY_NAMES[date.getDay()];
  }

  return date.toLocaleDateString(undefined, { weekday: 'short' });
}

export function localeDateString(date: Date) {
  if (IS_ANDROID) {
    const weekDay = DAY_NAMES[date.getDay()];
    const month = MONTH_NAMES[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${weekDay}, ${day} ${month} ${year}`;
  }

  return date.toLocaleDateString(undefined, {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
    weekday: 'short',
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
