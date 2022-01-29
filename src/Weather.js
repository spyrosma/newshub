import axios from 'axios';
import React, { useState, useEffect }  from 'react'


function Weather(props) {
    const [weather,setWeather] = useState([]);
    const [country,setCountry] = useState('');
    const [city,setCity] = useState('');
    const [lat,setLat] = useState('')

    
    const api='1e67c0bf8b80689eb8791ed890d004fc';

    let fullUrl= ' https://api.openweathermap.org/data/2.5/onecall?lat='+props.lat+'&lon='+props.lon+'&appid='+api;
    console.log('weather url:'+fullUrl)
  useEffect(()=>{ 
    if (props.country!=country || props.city!=city || props.lat!=lat) {
      axios.get(fullUrl,{
        'Content-Type': 'application/json'
    }).then(({data}) => {
    // console.log(data['weather'][0])
    // console.log(data['main'][0])
    console.log(data['timezone'])
    console.log(data['current'])
    setWeather({timezone:data['timezone'], current:data['current'],});
    console.log("Weather: ", data)
    setCity(props.city);
    setCountry(props.country);
    setLat(props.lat)
    })
    }
  })


return <div className='weather'>
    <h1>Weather Forecast</h1>
    <h2>{props.city}</h2>
    <h3>{weather['timezone']}</h3>
    <h3>Sunrise: {convertTime(weather['current']['sunrise'])}</h3>
    <h3>Sunset:  {convertTime(weather['current']['sunset'])}</h3>
    <h3>Temp: {convertTemp(weather['current']['temp'])} Celsius</h3>
    <h3><img src={getIcon(weather['current']['weather'][0]['icon'])}></img>{weather['current']['weather'][0]['description']}</h3>
</div>
    
}

function getIcon(iconCode) {

  return 'http://openweathermap.org/img/wn/'+iconCode+'@2x.png'

}

function convertTemp(temp) {
  return Math.round(temp-273.15);
}

function convertTime(time) {
  var sec = time;
var date = new Date(sec * 1000);
var timestr = date.toLocaleTimeString();
return timestr;
  
}

export default Weather;