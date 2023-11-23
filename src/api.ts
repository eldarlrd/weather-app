const API_KEY = 'e17c2086750c8698ff3eb48625a77d14';

// OpenWeather API Current weather data
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

// Geocoding API
const searchLocation = async <T>(location: string): Promise<T | undefined> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`,
      { mode: 'cors' }
    );
    const weather = (await response.json()) as Promise<T>;
    return weather;
  } catch (error: unknown) {
    if (error instanceof Error)
      console.log({ name: error.name, message: error.message });
  }
};

export { requestCurrLocation, searchLocation };
