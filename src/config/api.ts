import { ZodError } from 'zod';

import { type SchemaProps, SCHEMAS } from '@/config/schemas.ts';

const API_KEY = import.meta.env.VITE_API_KEY as string;

// OpenWeather API - Current data by location
const requestCurrLocation = async (
  lat: number,
  lon: number
): Promise<SchemaProps['currentWeatherAPI'] | undefined> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toString()}&lon=${lon.toString()}&appid=${API_KEY}`,
      { mode: 'cors' }
    );

    const data: unknown = await response.json();

    const weather = SCHEMAS.currentWeatherAPI.safeParse(data);

    if (!weather.success) {
      console.error(weather.error);
      throw new ZodError(weather.error.errors);
    }

    return weather.data;
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error);
  }
};

// OpenWeather API - 5 day forecast by location
const requestCurrForecast = async (
  lat: number,
  lon: number
): Promise<SchemaProps['forecastWeatherList'] | undefined> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat.toString()}&lon=${lon.toString()}&appid=${API_KEY}`,
      { mode: 'cors' }
    );

    const data: unknown = await response.json();

    const weather = SCHEMAS.forecastWeatherList.safeParse(data);

    if (!weather.success) {
      console.error(weather.error);
      throw new ZodError(weather.error.errors);
    }

    return weather.data;
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error);
  }
};

// OpenWeather API - Current data by query
const searchLocation = async (
  location: string
): Promise<SchemaProps['currentWeatherAPI'] | undefined> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
      { mode: 'cors' }
    );

    const data: unknown = await response.json();

    const weather = SCHEMAS.currentWeatherAPI.safeParse(data);

    if (!weather.success) {
      console.error(weather.error);
      throw new ZodError(weather.error.errors);
    }

    return weather.data;
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error);
  }
};

// OpenWeather API - 5 day forecast by query
const searchForecast = async (
  location: string
): Promise<SchemaProps['forecastWeatherList'] | undefined> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`,
      { mode: 'cors' }
    );

    const data: unknown = await response.json();

    const weather = SCHEMAS.forecastWeatherList.safeParse(data);

    if (!weather.success) {
      console.error(weather.error);
      throw new ZodError(weather.error.errors);
    }

    return weather.data;
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error);
  }
};

export {
  requestCurrLocation,
  requestCurrForecast,
  searchLocation,
  searchForecast
};
