const retrieveWeather = async (coords: Coordinate): Promise<WeatherData | null> => {
  try {

    const response = await fetch('/api/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${Auth.getToken()}`
      },
      body: JSON.stringify({ userLocation: coords })
    });

    const weatherData = await response.json();

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    return weatherData;

  } catch (err) {
    console.log('Error from data retrieval:', err);
    return null;
  }
}


export interface WeatherData {
  temperature?: number
  weatherDescription?: string
}

export interface Coordinate {
  latitude: number
  longitude: number
}

export { retrieveWeather };
