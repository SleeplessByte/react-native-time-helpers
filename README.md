# react-native-time-helpers

This package aims to provide date helpers for Android, where `.toLocaleDateXXX` don't (always) work as expected.
It's in no way a replacement for a full-fledged date/time library, and it currently only has defaults for English.
However, if your project is in a single language, and you don't need timezone support (display cross timezones), this will work just fine.

## Installation

```bash
yarn add react-native-time-helpers
```

## Usage

`toLocaleDateString` has the following helpers:

- `localeLongWeekDayString(date)`: return the weekday name of the date
- `localeWeekDayString(date)`: return the weekday name (short) of the date
- `localeDateString(date)`: return the date as `{weekday} {day} {month} {year}`
- `localeTimeString(date)`: return the time as `{hh}:{mm}` (24h)

Each helper has optional options to override or change behaviour.

