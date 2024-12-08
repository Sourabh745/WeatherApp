import React from 'react';
import "../styles/card.css"
const Card = ({ name, temperature, humidity,icon, description, windSpeed, country, temp_min, temp_max , pressure}) => {
  return (
    <div className='card1'>
      <h1>{(temperature - 273.13).toFixed(1)}°C</h1>
      <h2>{name}, {country}</h2>
      <h3>Weather Details</h3>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
      <p>{description}</p>
      <p>Temp min <span className="value"> {(temp_min - 273.13).toFixed(0)}°C <i className="fa-solid fa-temperature-half" style={{color: "#d3091d"}}></i> </span></p>

      <p>Temp max <span className="value"> {(temp_max - 273.13).toFixed(0)}°C <i className="fa-solid fa-temperature-half" style={{color: "#0b3eb7"}}></i></span></p>

      <p>Humidity &nbsp;&nbsp;<span className="value"> {humidity} </span></p>

      <p>Wind &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value"> {windSpeed} m/s </span></p>
      <p>Pressure&nbsp;&nbsp;&nbsp; <span className="value">{pressure} hPa </span></p>

    </div>
  );
};

export default Card;
