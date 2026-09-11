import { type ZodType, number, object, string, type z } from 'zod';

const currentWeatherAPI = object({
  clouds: object({
    all: number(),
  }),
  main: object({
    feels_like: number(),
    humidity: number(),
    temp: number(),
  }),
  name: string(),
  sys: object({
    country: string(),
    sunrise: number(),
    sunset: number(),
  }),
  timezone: number(),
  visibility: number(),
  weather: object({
    description: string(),
    icon: string(),
  }).array(),
  wind: object({
    deg: number(),
    speed: number(),
  }),
});

const forecastWeatherAPI = object({
  dt: number(),
  main: object({
    feels_like: number(),
    humidity: number(),
    temp: number(),
  }),
  weather: object({
    description: string(),
    icon: string(),
  }).array(),
  wind: object({
    deg: number(),
    speed: number(),
  }),
}).array();

const forecastWeatherList = object({
  list: forecastWeatherAPI,
});

interface SchemaProps {
  currentWeatherAPI: z.infer<typeof currentWeatherAPI>;
  forecastWeatherList: z.infer<typeof forecastWeatherList>;
}

const SCHEMAS: { [K in keyof SchemaProps]: ZodType<SchemaProps[K]> } = {
  currentWeatherAPI,
  forecastWeatherList,
};

export { SCHEMAS, type SchemaProps };
