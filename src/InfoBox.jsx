import React from 'react';
import "./InfoBox.css";
export default function InfoBox({ weatherInfo }) {
  if (!weatherInfo) {
    return <div>Make Search First</div>;
  }

  const iconUrl = `https://images.unsplash.com/photo-1585020430145-2a6b034f7729?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D`;

  return (
    <div>
      <h3>Weather Information for {weatherInfo.city}</h3>
      <img className = "imgg" src={iconUrl} alt={weatherInfo.weather}  />
      <p>Temperature: {weatherInfo.temp}°C</p>
      <p>Min Temperature: {weatherInfo.tempMin}°C</p>
      <p>Max Temperature: {weatherInfo.tempMax}°C</p>
      <p>Humidity: {weatherInfo.humidity}%</p>
      <p>Condition: {weatherInfo.weather}</p>
    </div>
  );
}
