import { Schema, model } from "mongoose";
import { IWeatherDocument } from "../interfaces/weatherInterface";

// ─── Sub-Schemas ───

const CurrentUnitsSchema = new Schema(
  {
    time: { type: String, required: true },
    interval: { type: String, required: true },
    temperature_2m: { type: String, required: true },
    precipitation: { type: String, required: true },
    rain: { type: String, required: true },
  },
  { _id: false }
);

const CurrentWeatherSchema = new Schema(
  {
    time: { type: String, required: true },
    interval: { type: Number, required: true },
    temperature_2m: { type: Number, required: true },
    precipitation: { type: Number, required: true },
    rain: { type: Number, required: true },
  },
  { _id: false }
);

const HourlyUnitsSchema = new Schema(
  {
    time: { type: String, required: true },
    temperature_2m: { type: String, required: true },
    rain: { type: String, required: true },
    precipitation: { type: String, required: true },
    apparent_temperature: { type: String, required: true },
    relative_humidity_2m: { type: String, required: true },
  },
  { _id: false }
);

const HourlyWeatherSchema = new Schema(
  {
    time: { type: [String], required: true },
    temperature_2m: { type: [Number], required: true },
    rain: { type: [Number], required: true },
    precipitation: { type: [Number], required: true },
    apparent_temperature: { type: [Number], required: true },
    relative_humidity_2m: { type: [Number], required: true },
  },
  { _id: false }
);

const DailyUnitsSchema = new Schema(
  {
    time: { type: String, required: true },
    weather_code: { type: String, required: true },
    sunrise: { type: String, required: true },
    temperature_2m_min: { type: String, required: true },
    temperature_2m_max: { type: String, required: true },
  },
  { _id: false }
);

const DailyWeatherSchema = new Schema(
  {
    time: { type: [String], required: true },
    weather_code: { type: [Number], required: true },
    sunrise: { type: [String], required: true },
    temperature_2m_min: { type: [Number], required: true },
    temperature_2m_max: { type: [Number], required: true },
  },
  { _id: false }
);

// ─── Main Weather Schema ───

const WeatherSchema = new Schema<IWeatherDocument>(
  {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    generationtime_ms: { type: Number, required: true },
    utc_offset_seconds: { type: Number, required: true },
    timezone: { type: String, required: true },
    timezone_abbreviation: { type: String, required: true },
    elevation: { type: Number, required: true },
    current_units: { type: CurrentUnitsSchema, required: true },
    current: { type: CurrentWeatherSchema, required: true },
    hourly_units: { type: HourlyUnitsSchema, required: true },
    hourly: { type: HourlyWeatherSchema, required: true },
    daily_units: { type: DailyUnitsSchema, required: true },
    daily: { type: DailyWeatherSchema, required: true },
  },
  {
    timestamps: true,       // Adds createdAt and updatedAt automatically
    versionKey: false,      // Removes __v field from documents
  }
);

const Weather = model<IWeatherDocument>("Weather", WeatherSchema);

export { Weather };
