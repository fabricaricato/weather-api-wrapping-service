import { z } from "zod";

// ─── Zod Schemas for Weather API Validation ───

const CurrentUnitsZod = z.object({
  time: z.string(),
  interval: z.string(),
  temperature_2m: z.string(),
  precipitation: z.string(),
  rain: z.string(),
});

const CurrentWeatherZod = z.object({
  time: z.string(),
  interval: z.number(),
  temperature_2m: z.number(),
  precipitation: z.number(),
  rain: z.number(),
});

const HourlyUnitsZod = z.object({
  time: z.string(),
  temperature_2m: z.string(),
  rain: z.string(),
  precipitation: z.string(),
  apparent_temperature: z.string(),
  relative_humidity_2m: z.string(),
});

const HourlyWeatherZod = z.object({
  time: z.array(z.string()),
  temperature_2m: z.array(z.number()),
  rain: z.array(z.number()),
  precipitation: z.array(z.number()),
  apparent_temperature: z.array(z.number()),
  relative_humidity_2m: z.array(z.number()),
});

const DailyUnitsZod = z.object({
  time: z.string(),
  weather_code: z.string(),
  sunrise: z.string(),
  temperature_2m_min: z.string(),
  temperature_2m_max: z.string(),
});

const DailyWeatherZod = z.object({
  time: z.array(z.string()),
  weather_code: z.array(z.number()),
  sunrise: z.array(z.string()),
  temperature_2m_min: z.array(z.number()),
  temperature_2m_max: z.array(z.number()),
});

/** Full validation schema for the Open-Meteo API response */
const WeatherResponseZod = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),
  elevation: z.number(),
  current_units: CurrentUnitsZod,
  current: CurrentWeatherZod,
  hourly_units: HourlyUnitsZod,
  hourly: HourlyWeatherZod,
  daily_units: DailyUnitsZod,
  daily: DailyWeatherZod,
});

export { WeatherResponseZod };
