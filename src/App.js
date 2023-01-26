import React from "react";
import Select from "react-select";
import Sun from './Img/sun.png'
import Cold from './Img/cold.png'

const options = [
  {value: 'Moscow', label: 'Moscow'},
  {value: 'New York', label: 'New York'},
  {value: 'Tokyo', label: 'Tokyo'},
  {value: 'Ekaterinburg', label: 'Ekaterinburg'},
  {value: 'Berlin', label: 'Berlin'},
  {value: 'Kyiv', label: 'Kyiv'},
  {value: 'Saint Petersburg', label: 'Saint Petersburg'}
]

let info = {
  temp: null
}

const App = () => {
  const [city, setCity] = React.useState('Moscow');
  const [temperature, setTemperature] = React.useState(info.temp);

  const API_KEY = 'f29a796793654df6bae26151a2b7796a';

  const gettingWeather = async () => {
    const get_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await get_url.json();

    info = {
      temp: data.main.temp
    }

    setTemperature(info.temp)
  }

  gettingWeather();

  return (
    <>
      <main>
        <div className='weather_now'>
          <h2>City: {city}</h2>
          <img src={temperature < 0 ? Cold : Sun} alt='Sun' className='Img'/>
          <p>Temperature: {temperature}°C</p>
        </div>
      </main>
    </>
  );
}

export default App;
