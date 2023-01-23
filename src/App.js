import React from "react";
import Select from "react-select";
import Sun from './Img/sun.png'

const App = () => {
  const [city, setCity] = React.useState('Moscow');

  const options = [
    {value: 'Moscow', label: 'Moscow'},
    {value: 'NewYork', label: 'NewYork'},
    {value: 'Tokyo', label: 'Tokyo'}
  ]

  function getCity(){
    return city ? options.find(c => c.value === city) : ''
  }

  function onChange(newValue){
    setCity(newValue.value)
  }

  return (
    <>
      <header>
        <Select options={options} value={getCity()} onChange={onChange} className='options'/>
      </header>

      <main>
        <div className='weather_now'>
          <h2>City: {city}</h2>
          <img src={Sun} alt='Sun' className='Img'/>
          <p>Temperature: 25 C</p>
        </div>
      </main>
    </>
  );
}

export default App;
