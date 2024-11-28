import { Link } from "react-router-dom";
import { Fluent_Calendar } from "../Components/Calendar";
import Weather from "../Components/Weather";
import { useEffect, useState } from "react";
import { Coordinate, retrieveWeather } from "../api/weatherAPI";
import News from "../Components/News";
import { retrieveNews } from "../api/newsAPI";
import backgroundImage from "./backg2.jpg"; // Import your background image
import Todo from "../Components/Todo";

// Default location for the app: Melbourne, Australia
const DEFAULT_LOCATION: Coordinate = {
  latitude: -37.840935,
  longitude: 144.946457,
};

const Dashboard = () => {
  // State management for weather and news data
  const [temperature, setTemperature] = useState<number | undefined>();
  const [weather, setWeather] = useState<string | undefined>();
  const [newsTitle, setNewsTitle] = useState<string | undefined>();

  // Fetch data on component mount
  useEffect(() => {
    handleLocation();
    fetchNewsData();
  }, []);

  // Handle user geolocation and fetch weather data
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData({ latitude, longitude });
        },
        () => {
          console.error("Unable to retrieve location. Using default location.");
          fetchWeatherData(DEFAULT_LOCATION);
        }
      );
    } else {
      console.error("Geolocation not supported. Using default location.");
      fetchWeatherData(DEFAULT_LOCATION);
    }
  };

  // Fetch weather data based on coordinates
  const fetchWeatherData = async (coords: Coordinate) => {
    try {
      const data = await retrieveWeather(coords);
      if (data) {
        setTemperature(data.temperature);
        setWeather(data.weatherDescription);
      } else {
        console.error("No weather data retrieved.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Fetch news data
  const fetchNewsData = async () => {
    try {
      const title = await retrieveNews();
      if (title) {
        setNewsTitle(title);
      } else {
        console.error("No news data retrieved.");
      }
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
        height: "100vh",
        width: "100vw",
        padding: "20px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Weather Section */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "auto",
          maxWidth: "300px",
          alignItems: "center",
        }}
      >
        <Weather temperature={temperature} weather={weather} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {/* Calendar Section */}

        {/* Todo Section */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <Todo />
        </div>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "auto",
            maxWidth: "600px",
          }}
        >
          <Fluent_Calendar />
        </div>
      </div>

      {/* News Section */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          padding: "20px",
          borderRadius: "8px",
          marginTop: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "auto",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <News newsTitle={newsTitle} />
      </div>

      {/* Navigation Section */}
      <div>
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
            alignItems: "center",
            maxWidth: "150px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            margin: "0 auto",
          }}
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
