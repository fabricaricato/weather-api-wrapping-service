// ─── Weather API Response Interfaces ───
// TypeScript interfaces that mirror the Open-Meteo API response structure

/** Units metadata for current weather readings */
export interface ICurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  precipitation: string;
  rain: string;
}

/** Current weather snapshot */
export interface ICurrentWeather {
  time: string;
  interval: number;
  temperature_2m: number;
  precipitation: number;
  rain: number;
}

/** Units metadata for hourly forecast data */
export interface IHourlyUnits {
  time: string;
  temperature_2m: string;
  rain: string;
  precipitation: string;
  apparent_temperature: string;
  relative_humidity_2m: string;
}

/** Hourly forecast arrays (each array has one entry per hour) */
export interface IHourlyWeather {
  time: string[];
  temperature_2m: number[];
  rain: number[];
  precipitation: number[];
  apparent_temperature: number[];
  relative_humidity_2m: number[];
}

/** Units metadata for daily forecast data */
export interface IDailyUnits {
  time: string;
  weather_code: string;
  sunrise: string;
  temperature_2m_min: string;
  temperature_2m_max: string;
}

/** Daily forecast arrays (one entry per day) */
export interface IDailyWeather {
  time: string[];
  weather_code: number[];
  sunrise: string[];
  temperature_2m_min: number[];
  temperature_2m_max: number[];
}

/** Complete weather API response from Open-Meteo */
export interface IWeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: ICurrentUnits;
  current: ICurrentWeather;
  hourly_units: IHourlyUnits;
  hourly: IHourlyWeather;
  daily_units: IDailyUnits;
  daily: IDailyWeather;
}

/** Document interface for Mongoose — represents what gets stored in MongoDB */
export interface IWeatherDocument {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: ICurrentUnits;
  current: ICurrentWeather;
  hourly_units: IHourlyUnits;
  hourly: IHourlyWeather;
  daily_units: IDailyUnits;
  daily: IDailyWeather;
  createdAt?: Date;
  updatedAt?: Date;
}
