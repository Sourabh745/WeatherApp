import React, { useState } from 'react';
import Card from './Card';
import '../styles/weather.css';

const WeatherApi = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState('');

  const handleAPI = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let res = await fetch(baseURL)
    let data = await res.json();
    console.log(data);
    setData((prevData) => [data]);
  }
  return (
    <div className='box'>
      <div className=' innerBox'>

      <input
        value={city}
        placeholder='Enter city name'
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleAPI}>
      <i class="fas fa-search"></i>

      </button>
      </div>

      {data.map((e, index) => (
        <div className='innerBox2'>
          <Card
            // Added a class name for styling
            key={index} // Use a unique value like index or another unique identifier from the data
            name={e.name}
            temperature={e.main?.temp} // Corrected path for temperature
            temp_min={e.main?.temp_min} // Corrected path for temperature
            temp_max={e.main?.temp_max} // Corrected path for temperature
            humidity={e.main?.humidity} // Corrected path for humidity
            pressure={e.main?.pressure} // Corrected path for humidity
            description={e.weather?.[0]?.main} // Corrected path for description
            windSpeed={e.wind?.speed} // Corrected path for wind speed
            country={e.sys?.country} // Corrected path for country
            icon={e.weather?.[0]?.icon} // Corrected path for icon
          />

        </div>
      ))}
    </div>
  );
}

export default WeatherApi;
