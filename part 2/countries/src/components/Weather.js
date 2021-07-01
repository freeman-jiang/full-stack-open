import React, { useState, useEffect } from 'react';
import axios from 'axios';

// GET REQUEST shorthand

const Weather = ({ api_key, city }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        );

        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [city, api_key]);

  const getTemperature = () => {
    const temp = weather.main.temp - 273.15;
    return temp.toFixed(2);
  };

  const getWeather = () => {
    return weather.weather[0].description;
  };

  const getWind = () => {
    const speed = weather.wind.speed;
    const degree = weather.wind.deg;
    return `${speed} m/s at ${degree}°`;
  };

  return (
    <div>
      <h2>Weather in {city}</h2>
      {weather.main ? (
        <div>
          <p>
            <strong>Temperature: </strong>
            {getTemperature()} °C
          </p>
          <p>
            <strong>Weather Description: </strong>
            {getWeather()}
          </p>
          <p>
            <strong>Wind: </strong>
            {getWind()}
          </p>
        </div>
      ) : (
        <p>There is no weather data available for this city</p>
      )}
    </div>
  );
};

export default Weather;
