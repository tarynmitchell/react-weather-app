import React from "react";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <h1>{weatherData.city}</h1>
      <ul>
        <li>
          <FormattedDate date={weatherData.date} />
        </li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={weatherData.iconUrl} alt="Mostly cloudy" />

          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
      </div>

      <div className="col-6">
        <ul>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}
