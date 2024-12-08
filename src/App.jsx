import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
