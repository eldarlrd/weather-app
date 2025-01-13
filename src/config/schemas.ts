import { type z, number, string, object, type ZodType } from 'zod';

const currentWeatherAPI = object({
  clouds: object({
    all: number()
  }),
  main: object({
    temp: number(),
    feels_like: number(),
    humidity: number()
  }),
  visibility: number(),
  wind: object({
    speed: number(),
    deg: number()
  }),
  weather: object({
    description: string(),
    icon: string()
  }).array(),
  sys: object({
    country: string(),
    sunrise: number(),
    sunset: number()
  }),
  name: string(),
  timezone: number()
});

const forecastWeatherAPI = object({
  dt: number(),
  main: object({
    temp: number(),
    feels_like: number(),
    humidity: number()
  }),
  wind: object({
    speed: number(),
    deg: number()
  }),
  weather: object({
    description: string(),
    icon: string()
  }).array()
}).array();

const forecastWeatherList = object({
  list: forecastWeatherAPI
});

interface SchemaProps {
  currentWeatherAPI: z.infer<typeof currentWeatherAPI>;
  forecastWeatherList: z.infer<typeof forecastWeatherList>;
}

const SCHEMAS: { [K in keyof SchemaProps]: ZodType<SchemaProps[K]> } = {
  currentWeatherAPI,
  forecastWeatherList
};

export { type SchemaProps, SCHEMAS };
