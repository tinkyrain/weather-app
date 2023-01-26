import React from "react";
import Select from "react-select";

const options = [
    {value: 'Moscow', label: 'Moscow'},
    {value: 'New York', label: 'New York'},
    {value: 'Tokyo', label: 'Tokyo'},
    {value: 'Ekaterinburg', label: 'Ekaterinburg'},
    {value: 'Berlin', label: 'Berlin'},
    {value: 'Kyiv', label: 'Kyiv'},
    {value: 'Saint Petersburg', label: 'Saint Petersburg'}
  ]

const Header = () => {
    function getCity(){
        return city ? options.find(c => c.value === city) : ''
    }

    function onChange(newValue){
        setCity(newValue.value);
        setTemperature(info.temp);
    }

    return(
        <header>
            <Select options={options} value={getCity()} onChange={onChange} className='options'/>
        </header>
    );
}

export default Header;