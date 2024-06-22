import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "3eec78a7dbcf22900400dbdc05288505";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonResponse = await response.json();
      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
        icon: jsonResponse.weather[0].icon
      };
      return result;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setCity("");
    const newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  };

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          required
          value={city}
          label="City Name"
          variant="outlined"
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
