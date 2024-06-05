import React from "react";
import "./App.css";
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London"/>
        <footer>
          This project was coded by Taryn Mitchell and is{" "}
          <a
            href="https://github.com/tarynmitchell/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
