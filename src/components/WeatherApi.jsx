import React, { useState } from 'react';
import Card from './Card';
import '../styles/weather.css';

const WeatherApi = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState('');
  const [error, setError] = useState(''); // State to track errors
  const [loading, setLoading] = useState(false); // State to track loading

  const handleAPI = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }

    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    setError(''); // Reset error state
    setLoading(true); // Set loading to true

    try {
      let res = await fetch(baseURL);

      if (!res.ok) {
        // Handle HTTP errors
        throw new Error(`City not found (${res.status})`);
      }

      let data = await res.json();
      console.log(data);

      setData([data]); // Replace previous data with the new data
    } catch (err) {
      // Catch network or other errors
      setError(err.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="box">
      <div className="innerBox">
        <input
          value={city}
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleAPI}>
          <i className="fas fa-search"></i>
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && <p className="loading">Fetching weather data...</p>}

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Display Weather Data */}
      {data.map((e, index) => (
        <div className="innerBox2" key={index}>
          <Card
            name={e.name}
            temperature={e.main?.temp}
            temp_min={e.main?.temp_min}
            temp_max={e.main?.temp_max}
            humidity={e.main?.humidity}
            pressure={e.main?.pressure}
            description={e.weather?.[0]?.main}
            windSpeed={e.wind?.speed}
            country={e.sys?.country}
            icon={e.weather?.[0]?.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default WeatherApi;
