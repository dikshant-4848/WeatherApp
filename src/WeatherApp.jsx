import React, { useState } from 'react';
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const updateInfo = (info) => {
    setWeatherInfo(info);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>WeatherApp By Dikshant Rajput</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox weatherInfo={weatherInfo} />
    </div>
  );
}
