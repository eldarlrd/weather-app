const API_KEY = 'e17c2086750c8698ff3eb48625a77d14';

// OpenWeather API - Current data by location
const requestCurrLocation = async <T>(
  lat: number,
  lon: number
): Promise<T | undefined> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
      { mode: 'cors' }
    );
    const weather = (await response.json()) as Promise<T>;
    return weather;
  } catch (error) {
    if (error instanceof Error)
      console.log({ name: error.name, message: error.message });
  }
};

// OpenWeather API - 5 day forecast by location
const requestCurrForecast = async <T>(
  lat: number,
  lon: number
): Promise<T | undefined> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
      { mode: 'cors' }
    );
    const weather = (await response.json()) as Promise<T>;
    return weather;
  } catch (error) {
    if (error instanceof Error)
      console.log({ name: error.name, message: error.message });
  }
};

// OpenWeather API - Current data by query
const searchLocation = async <T>(location: string): Promise<T | undefined> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
      { mode: 'cors' }
    );

    if (!response.ok) throw new Error(response.status.toString());

    const weather = (await response.json()) as Promise<T>;
    return weather;
  } catch (error: unknown) {
    if (error instanceof Error)
      console.log({ name: error.name, message: error.message });
  }
};

// OpenWeather API - 5 day forecast by query
const searchForecast = async <T>(location: string): Promise<T | undefined> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`,
      { mode: 'cors' }
    );

    if (!response.ok) throw new Error(response.status.toString());

    const weather = (await response.json()) as Promise<T>;
    return weather;
  } catch (error: unknown) {
    if (error instanceof Error)
      console.log({ name: error.name, message: error.message });
  }
};

export {
  requestCurrLocation,
  requestCurrForecast,
  searchLocation,
  searchForecast
};
