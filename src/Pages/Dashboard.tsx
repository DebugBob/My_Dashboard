import { Link } from "react-router-dom";
import { Fluent_Calendar } from "../Components/Calendar";
import Weather from "../Components/Weather";
import { useEffect, useState } from "react";
import { Coordinate, retrieveWeather } from "../api/weatherAPI";

// the default location for this app is Melbourne, Australia
const DEFAULT_LOCATION: Coordinate = {
  latitude: -37.840935,
  longitude: 144.946457
}

const Dashboard = () => {
  // Placeholder Button returns to Login Page
  const [temperature, setTemperature] = useState<number>();
  const [weather, setWeather] = useState<string>();

  useEffect(() => {
    getCoords();
  }, []);

  const getCoords = () => {
    function success(position: GeolocationPosition) {
      const { latitude, longitude } = position.coords
      fetchWeatherData({ latitude, longitude })
    }

    function error() {
      console.log("Unable to retrieve your location");
      fetchWeatherData(DEFAULT_LOCATION);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      fetchWeatherData(DEFAULT_LOCATION);
      console.log("Geolocation not supported");
    }
  }

  // Async function fetchtips retrieves user data from an external source.
  const fetchWeatherData = async (coords: Coordinate) => {
    const data = await retrieveWeather(coords);
    if (data != null) {
      setTemperature(data.temperature);
      setWeather(data.weatherDescription)
    } else {
      console.log("No weather data can be retrieved");
    }
  }

  return (
    <div>
      <Fluent_Calendar />
      <Weather temperature={temperature} weather={weather} />

      <Link to={"/"} className="btn btn-primary">
        Dashboard page, click to Login
      </Link>
      <News newsTitle={newsTitle} />
    </div>
  );
}

export default Dashboard