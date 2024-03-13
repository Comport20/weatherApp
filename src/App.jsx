import {useState,useEffect} from 'react';
import './App.css';
function App() {
  const [weather, setWeather] = useState({
    temp: '', desc: '',icon: ''
  });
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&APIKey=d209be4fc6292ee41aa312cf2bfb54ee&units=metric`)
    .then(response => response.json())
    .then(result => {
      setWeather({
        temp: result.main.temp, 
        desc: result.weather[0].description,
        icon: result.weather[0].icon
      })
    }).catch(err => console.log(err))
  },[])
  if(weather.icon){
    return (
      <>
        <p>Temperature: {weather.temp} °C</p>
        <p>Description: {weather.desc}</p>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="Weather icon"/>
      </>
    );
  }
  else{
    return <div>Loading...</div>
  }
}

export default App
