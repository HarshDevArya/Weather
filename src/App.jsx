import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useEffect, useState } from "react";
import "./App.css";
export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [issubmitted, setIssubmitted] = useState(false);
  const API_KEY = "b70c1c6f0ae1fc7d00c2271d84d9636b";

  useEffect(() => {
    if (!issubmitted) return;
    document.title = `${city} Weather` || "Weather App"; // Default title when city is empty
  }, [city, issubmitted]);

  useEffect(() => {
    if (!issubmitted) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const fetchWeather = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
        setError(null);
      } catch (error) {
        setWeatherData(null);
        setError(error.message);
      } finally {
        setIssubmitted(false);
      }
    };

    fetchWeather();
  }, [city, issubmitted]);

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (weatherData) {
      setWeatherData(null); // Clear previous weather data when starting a new search
    }
    ("");
    if (city.trim()) {
      setIssubmitted(true); // Start loading when submit is clicked
    }
  }
  return (
    <div className="body">
      <SearchBox
        city={city}
        handleCityChange={handleCityChange}
        handleSubmit={handleSubmit}
      />
      <InfoBox
        weatherData={weatherData}
        error={error}
        issubmitted={issubmitted}
      />
    </div>
  );
}
