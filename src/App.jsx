import React, { useState } from "react";
import { getWeather } from "./api";
import WeatherCard from "./Components/WeatherCard";
import "./App.css"; // import CSS

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    if (!city) return;
    setLoading(true);
    setError("");
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError("City not found. Try again.");
      setWeather(null);
    }
    setLoading(false);
  }

  return (
    <div>
      <div className="weather-card-container">
        <h1 className="weather-title">🌦 Weather Now</h1>
        <p className="weather-subtitle">
          Get instant weather updates for any city in the world 🌍
        </p>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="weather-input"
          />
          <button onClick={handleSearch} className="weather-button">
            Search
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="weather-error">{error}</p>}
        {weather && <WeatherCard data={weather} />}
      </div>
      <p className="footer">Made using React & Open-Meteo API</p>
    </div>
  );
}

export default App;
