import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" clasName="button-primary" />
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly cloudy"
          />

          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Precipitation: 15%</li>
          <li>Humidity: 75%</li>
          <li>Wind: 15 km/h</li>
        </ul>
      </div>
    </div>
  );
}
