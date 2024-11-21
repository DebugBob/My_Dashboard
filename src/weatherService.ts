
export interface Coordinate {
  lattitude: number
  longitude: number
}

export interface WeatherData {
  temperature?: number
  weatherDescription?: string
}

export default class WeatherService {
  async getWeatherData(coordinate: Coordinate): Promise<WeatherData> {
    // TODO: error handling (wrap in try catch)
    // TODO: optional chain
    // TODO: apiKey should not appear in code
    const apiKey = "ecc91c393cc10af34ada18f1d4196b29"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.lattitude}&lon=${coordinate.longitude}&appid=${apiKey}&units=metric`
    const res = await fetch(url)
    const jsonResponse = await res.json()
    console.log('jsonResponse=', jsonResponse)
    return {
      temperature: jsonResponse?.main?.temp,
      weatherDescription: jsonResponse?.weather[0]?.main
    }
  }
}