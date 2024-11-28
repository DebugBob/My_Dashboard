
export interface Coordinate {
  latitude: number
  longitude: number
}

export interface WeatherData {
  temperature?: number
  weatherDescription?: string
}


class WeatherService {
  async getWeatherData(coordinate: Coordinate): Promise<WeatherData | Error> {

    try {
      const url = `${process.env.WEATHER_API_BASE_URL}/data/2.5/weather?lat=${coordinate.latitude}&lon=${coordinate.longitude}&appid=${process.env.WEATHER_API_KEY}&units=metric`
      const res = await fetch(url)
      const jsonResponse = await res.json()
      console.log('jsonResponse=', jsonResponse)
      return {
        temperature: jsonResponse?.main?.temp,
        weatherDescription: jsonResponse?.weather?.[0]?.main
      }
    } catch (err) {
      console.log('Error:', err);
      return err as Error;
    }
  }
}

export default new WeatherService();