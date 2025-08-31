import type { GodotArray, GodotDictionary, Object, float, int } from "../index.d.ts";
/**
 * A singleton for working with time data.
 * 
 * The Time singleton allows converting time between various formats and also getting time information from the system.
 * This class conforms with as many of the ISO 8601 standards as possible. All dates follow the Proleptic Gregorian calendar. As such, the day before `1582-10-15` is `1582-10-14`, not `1582-10-04`. The year before 1 AD (aka 1 BC) is number `0`, with the year before that (2 BC) being `-1`, etc.
 * Conversion methods assume "the same timezone", and do not handle timezone conversions or DST automatically. Leap seconds are also not handled, they must be done manually if desired. Suffixes such as "Z" are not handled, you need to strip them away manually.
 * When getting time information from the system, the time can either be in the local timezone or UTC depending on the `utc` parameter. However, the `get_unix_time_from_system` method always uses UTC as it returns the seconds passed since the Unix epoch (https://en.wikipedia.org/wiki/Unix_time).
 * 
 * **Important:** The `_from_system` methods use the system clock that the user can manually set. **Never use** this method for precise time calculation since its results are subject to automatic adjustments by the user or the operating system. **Always use** `get_ticks_usec` or `get_ticks_msec` for precise time calculation instead, since they are guaranteed to be monotonic (i.e. never decrease).
 */
export class Time extends Object {
/**
 * Returns the current date as a dictionary of keys: `year`, `month`, `day`, and `weekday`.
 * The returned values are in the system's local time when `utc` is `false`, otherwise they are in UTC.
 * @param utc boolean (optional, default: false)
 * @returns GodotDictionary<any>
 */
  getDateDictFromSystem(utc?: boolean): GodotDictionary<any>;
/**
 * Converts the given Unix timestamp to a dictionary of keys: `year`, `month`, `day`, and `weekday`.
 * @param unixTimeVal int
 * @returns GodotDictionary<any>
 */
  getDateDictFromUnixTime(unixTimeVal: int): GodotDictionary<any>;
/**
 * Returns the current date as an ISO 8601 date string (YYYY-MM-DD).
 * The returned values are in the system's local time when `utc` is `false`, otherwise they are in UTC.
 * @param utc boolean (optional, default: false)
 * @returns string
 */
  getDateStringFromSystem(utc?: boolean): string;
/**
 * Converts the given Unix timestamp to an ISO 8601 date string (YYYY-MM-DD).
 * @param unixTimeVal int
 * @returns string
 */
  getDateStringFromUnixTime(unixTimeVal: int): string;
/**
 * Converts the given ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS) to a dictionary of keys: `year`, `month`, `day`, [code skip-lint]weekday[/code], `hour`, `minute`, and `second`.
 * If `weekday` is `false`, then the [code skip-lint]weekday[/code] entry is excluded (the calculation is relatively expensive).
 * 
 * **Note:** Any decimal fraction in the time string will be ignored silently.
 * @param datetime string
 * @param weekday boolean
 * @returns GodotDictionary<any>
 */
  getDatetimeDictFromDatetimeString(datetime: string, weekday: boolean): GodotDictionary<any>;
/**
 * Returns the current date as a dictionary of keys: `year`, `month`, `day`, `weekday`, `hour`, `minute`, `second`, and `dst` (Daylight Savings Time).
 * @param utc boolean (optional, default: false)
 * @returns GodotDictionary<any>
 */
  getDatetimeDictFromSystem(utc?: boolean): GodotDictionary<any>;
/**
 * Converts the given Unix timestamp to a dictionary of keys: `year`, `month`, `day`, `weekday`, `hour`, `minute`, and `second`.
 * The returned Dictionary's values will be the same as the `get_datetime_dict_from_system` if the Unix timestamp is the current time, with the exception of Daylight Savings Time as it cannot be determined from the epoch.
 * @param unixTimeVal int
 * @returns GodotDictionary<any>
 */
  getDatetimeDictFromUnixTime(unixTimeVal: int): GodotDictionary<any>;
/**
 * Converts the given dictionary of keys to an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).
 * The given dictionary can be populated with the following keys: `year`, `month`, `day`, `hour`, `minute`, and `second`. Any other entries (including `dst`) are ignored.
 * If the dictionary is empty, `0` is returned. If some keys are omitted, they default to the equivalent values for the Unix epoch timestamp 0 (1970-01-01 at 00:00:00).
 * If `use_space` is `true`, the date and time bits are separated by an empty space character instead of the letter T.
 * @param datetime GodotDictionary<any>
 * @param useSpace boolean
 * @returns string
 */
  getDatetimeStringFromDatetimeDict(datetime: GodotDictionary<any>, useSpace: boolean): string;
/**
 * Returns the current date and time as an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).
 * The returned values are in the system's local time when `utc` is `false`, otherwise they are in UTC.
 * If `use_space` is `true`, the date and time bits are separated by an empty space character instead of the letter T.
 * @param utc boolean (optional, default: false)
 * @param useSpace boolean (optional, default: false)
 * @returns string
 */
  getDatetimeStringFromSystem(utc?: boolean, useSpace?: boolean): string;
/**
 * Converts the given Unix timestamp to an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).
 * If `use_space` is `true`, the date and time bits are separated by an empty space character instead of the letter T.
 * @param unixTimeVal int
 * @param useSpace boolean (optional, default: false)
 * @returns string
 */
  getDatetimeStringFromUnixTime(unixTimeVal: int, useSpace?: boolean): string;
/**
 * Converts the given timezone offset in minutes to a timezone offset string. For example, -480 returns "-08:00", 345 returns "+05:45", and 0 returns "+00:00".
 * @param offsetMinutes int
 * @returns string
 */
  getOffsetStringFromOffsetMinutes(offsetMinutes: int): string;
/**
 * Returns the amount of time passed in milliseconds since the engine started.
 * Will always be positive or 0 and uses a 64-bit value (it will wrap after roughly 500 million years).
 * @returns int
 */
  getTicksMsec(): int;
/**
 * Returns the amount of time passed in microseconds since the engine started.
 * Will always be positive or 0 and uses a 64-bit value (it will wrap after roughly half a million years).
 * @returns int
 */
  getTicksUsec(): int;
/**
 * Returns the current time as a dictionary of keys: `hour`, `minute`, and `second`.
 * The returned values are in the system's local time when `utc` is `false`, otherwise they are in UTC.
 * @param utc boolean (optional, default: false)
 * @returns GodotDictionary<any>
 */
  getTimeDictFromSystem(utc?: boolean): GodotDictionary<any>;
/**
 * Converts the given time to a dictionary of keys: `hour`, `minute`, and `second`.
 * @param unixTimeVal int
 * @returns GodotDictionary<any>
 */
  getTimeDictFromUnixTime(unixTimeVal: int): GodotDictionary<any>;
/**
 * Returns the current time as an ISO 8601 time string (HH:MM:SS).
 * The returned values are in the system's local time when `utc` is `false`, otherwise they are in UTC.
 * @param utc boolean (optional, default: false)
 * @returns string
 */
  getTimeStringFromSystem(utc?: boolean): string;
/**
 * Converts the given Unix timestamp to an ISO 8601 time string (HH:MM:SS).
 * @param unixTimeVal int
 * @returns string
 */
  getTimeStringFromUnixTime(unixTimeVal: int): string;
/**
 * Returns the current time zone as a dictionary of keys: `bias` and `name`.
 * - `bias` is the offset from UTC in minutes, since not all time zones are multiples of an hour from UTC.
 * - `name` is the localized name of the time zone, according to the OS locale settings of the current user.
 * @returns GodotDictionary<any>
 */
  getTimeZoneFromSystem(): GodotDictionary<any>;
/**
 * Converts a dictionary of time values to a Unix timestamp.
 * The given dictionary can be populated with the following keys: `year`, `month`, `day`, `hour`, `minute`, and `second`. Any other entries (including `dst`) are ignored.
 * If the dictionary is empty, `0` is returned. If some keys are omitted, they default to the equivalent values for the Unix epoch timestamp 0 (1970-01-01 at 00:00:00).
 * You can pass the output from `get_datetime_dict_from_unix_time` directly into this function and get the same as what was put in.
 * 
 * **Note:** Unix timestamps are often in UTC. This method does not do any timezone conversion, so the timestamp will be in the same timezone as the given datetime dictionary.
 * @param datetime GodotDictionary<any>
 * @returns int
 */
  getUnixTimeFromDatetimeDict(datetime: GodotDictionary<any>): int;
/**
 * Converts the given ISO 8601 date and/or time string to a Unix timestamp. The string can contain a date only, a time only, or both.
 * 
 * **Note:** Unix timestamps are often in UTC. This method does not do any timezone conversion, so the timestamp will be in the same timezone as the given datetime string.
 * 
 * **Note:** Any decimal fraction in the time string will be ignored silently.
 * @param datetime string
 * @returns int
 */
  getUnixTimeFromDatetimeString(datetime: string): int;
/**
 * Returns the current Unix timestamp in seconds based on the system time in UTC. This method is implemented by the operating system and always returns the time in UTC. The Unix timestamp is the number of seconds passed since 1970-01-01 at 00:00:00, the Unix epoch (https://en.wikipedia.org/wiki/Unix_time).
 * 
 * **Note:** Unlike other methods that use integer timestamps, this method returns the timestamp as a [float] for sub-second precision.
 * @returns float
 */
  getUnixTimeFromSystem(): float;
/**
 * The month of January, represented numerically as `01`.
 */
  static readonly MONTH_JANUARY: int;
/**
 * The month of February, represented numerically as `02`.
 */
  static readonly MONTH_FEBRUARY: int;
/**
 * The month of March, represented numerically as `03`.
 */
  static readonly MONTH_MARCH: int;
/**
 * The month of April, represented numerically as `04`.
 */
  static readonly MONTH_APRIL: int;
/**
 * The month of May, represented numerically as `05`.
 */
  static readonly MONTH_MAY: int;
/**
 * The month of June, represented numerically as `06`.
 */
  static readonly MONTH_JUNE: int;
/**
 * The month of July, represented numerically as `07`.
 */
  static readonly MONTH_JULY: int;
/**
 * The month of August, represented numerically as `08`.
 */
  static readonly MONTH_AUGUST: int;
/**
 * The month of September, represented numerically as `09`.
 */
  static readonly MONTH_SEPTEMBER: int;
/**
 * The month of October, represented numerically as `10`.
 */
  static readonly MONTH_OCTOBER: int;
/**
 * The month of November, represented numerically as `11`.
 */
  static readonly MONTH_NOVEMBER: int;
/**
 * The month of December, represented numerically as `12`.
 */
  static readonly MONTH_DECEMBER: int;
/**
 * The day of the week Sunday, represented numerically as `0`.
 */
  static readonly WEEKDAY_SUNDAY: int;
/**
 * The day of the week Monday, represented numerically as `1`.
 */
  static readonly WEEKDAY_MONDAY: int;
/**
 * The day of the week Tuesday, represented numerically as `2`.
 */
  static readonly WEEKDAY_TUESDAY: int;
/**
 * The day of the week Wednesday, represented numerically as `3`.
 */
  static readonly WEEKDAY_WEDNESDAY: int;
/**
 * The day of the week Thursday, represented numerically as `4`.
 */
  static readonly WEEKDAY_THURSDAY: int;
/**
 * The day of the week Friday, represented numerically as `5`.
 */
  static readonly WEEKDAY_FRIDAY: int;
/**
 * The day of the week Saturday, represented numerically as `6`.
 */
  static readonly WEEKDAY_SATURDAY: int;
}
