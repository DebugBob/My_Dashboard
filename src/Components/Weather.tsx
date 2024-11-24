import React from 'react'

interface WeatherProps {
  temperature?: number
  weather?: string
}

const Weather: React.FC<WeatherProps> = ({ temperature, weather }) => {
  return (
    <div className="card text-center mb-3" style={{ width: "18rem;" }}>
      <div className="card-body">
        <h5 className="card-title">My Weather</h5>
        <p className="card-text">{temperature}°C</p>
        <p className="card-text">{weather}</p>
        <p className="btn btn-primary">Have a Good Day</p>
      </div>
    </div>
  )
}

export default Weather