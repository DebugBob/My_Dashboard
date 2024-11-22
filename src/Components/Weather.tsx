import React from 'react'

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(success, error);
// } else {
//   console.log("Geolocation not supported");
// }

// function success(position: GeolocationPosition) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
// }

// function error() {
//   console.log("Unable to retrieve your location");
// }

interface WeatherProps {
  temperature: number
  weather: string
}

const Weather: React.FC<WeatherProps> = ({ temperature, weather }) => {
  return (
    <div>
      <h1>My Weather</h1>
      <ul>
        <li>{temperature}</li>
        <li>{weather}</li>
      </ul>
      <p>Have a Good Day!</p>
    </div>
  )
}

export default Weather