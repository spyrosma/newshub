import axios from 'axios';
import React, { useState, useEffect }  from 'react'


function Weather(props) {
    const [weather,setWeather] = useState([]);
    const [country,setCountry] = useState('');
    const [city,setCity] = useState('');
    const [lat,setLat] = useState('')

    const days  = [0,1,2,3,4,5,6,7]
    const wDays = days.map((day) => 
    <table className='wtable'>
      <tr>
        <td>{convertDate(weather['daily'][day]['dt'])}</td>
        <td rowSpan='2'><img  src={getIcon(weather['daily'][day]['weather'][0]['icon'])}></img></td>
      </tr>
      <tr>
        <td> {convertTemp(weather['daily'][day]['temp']['max'])} / {convertTemp(weather['daily'][day]['temp']['min'])} °C {weather['daily'][day]['weather'][0]['description']}</td>
      </tr>
    </table>
     )

    
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
    setWeather({timezone:data['timezone'], current:data['current'], daily:data['daily']});
    console.log("Weather: ", data)
    setCity(props.city);
    setCountry(props.country);
    setLat(props.lat)
    })
    }
  })


return <div className='weather'>
    <h1>Weather Forecast</h1>
    <h2><img src={getIcon(weather['current']['weather'][0]['icon'])}></img> {props.city}</h2>
    <p>Timezone: {weather['timezone']}</p>
    <p>Sunrise: {convertTime(weather['current']['sunrise'])} -
    Sunset:  {convertTime(weather['current']['sunset'])}</p>
    <p>Temp: {convertTemp(weather['current']['temp'])} °C -
    Feels Like: {convertTemp(weather['current']['feels_like'])} °C</p>
    <p>{weather['current']['weather'][0]['description']}</p>
    <h3>8-day forecast</h3>
    <div>
      {wDays}
    </div>
    
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

function convertDate(time) {

  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  var sec = time;
  var date = new Date(sec * 1000);
  var dateStr = date.toLocaleDateString('en-us', options);

  return dateStr;

}

export default Weather;