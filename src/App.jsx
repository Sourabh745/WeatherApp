import { useState } from 'react'
import './App.css'
import WeatherApi from './components/WeatherApi'

function App() {

  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    margin: 0,
    overflow: 'hidden',
  };

  const [count, setCount] = useState(0)

  return (
    <div style={backgroundStyle}>

      <WeatherApi/>
    </ div>
  )
}

export default App
