import axios from 'axios';
import React, { useState, useEffect }  from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


function Weather(props) {
    //states
    const [weather,setWeather] = useState([]);
    const [country,setCountry] = useState('');
    const [city,setCity] = useState('');
    const [lat,setLat] = useState('')
    //daily forecast
    const days  = [0,1,2,3,4,5,6,7]
    const wDays = days.map((day) => 
    
    <Accordion.Item eventKey={day}>
        <Accordion.Header>
        <table className='wTable'>
      <tr>
        <td>{convertDate(weather['daily'][day]['dt'])}</td>
        <td rowSpan='2'><img  src={getIcon(weather['daily'][day]['weather'][0]['icon'])}></img></td>
      </tr>
      <tr>
        <td> {convertTemp(weather['daily'][day]['temp']['max'])} / {convertTemp(weather['daily'][day]['temp']['min'])} °C {weather['daily'][day]['weather'][0]['description']}</td>
      </tr>
    </table>
        </Accordion.Header>
        <Accordion.Body>
        <table className='wInnerTable'> 
          <tr>
            <td> </td>
            <td style={{marginLeft: "1rem"}}>Morning</td>
            <td>Afternoon</td>
            <td>Evening</td>
            <td>Night</td>
          </tr>
          <tr>
            <td>TEMPERATURE</td>
            <td>{convertTemp(weather['daily'][day]['temp']['morn'])} °C</td>
            <td>{convertTemp(weather['daily'][day]['temp']['day'])} °C </td>
            <td>{convertTemp(weather['daily'][day]['temp']['eve'])} °C </td>
            <td>{convertTemp(weather['daily'][day]['temp']['night'])} °C </td>
          </tr>
          <tr>
            <td>FEELS LIKE</td>
            <td>{convertTemp(weather['daily'][day]['feels_like']['morn'])} °C</td>
            <td>{convertTemp(weather['daily'][day]['feels_like']['day'])} °C </td>
            <td>{convertTemp(weather['daily'][day]['feels_like']['eve'])} °C </td>
            <td>{convertTemp(weather['daily'][day]['feels_like']['night'])} °C </td>
          </tr>
        </table> 
        <hr></hr>
        <table className='wInnerTable'>
          <tr>
            <td>Sunrise: </td>
            <td>{convertTime(weather['daily'][day]['sunrise'],utcOffset(weather['timezone_offset']))}</td>
            <td rowSpan='5'>
              <p> Humidity: {weather['daily'][day]['humidity']} %</p>
              <p>UV: {weather['daily'][day]['uvi']}</p>
              <p>Dew Point: {convertTemp(weather['daily'][day]['dew_point'])} °C </p> 
              <p>Wind: {weather['daily'][day]['wind_speed']} m/sec {windDirection(weather['daily'][day]['wind_deg'])} </p>
            </td>
          </tr>
          <tr>
            <td>Sunset: </td>
            <td>{convertTime(weather['daily'][day]['sunset'],utcOffset(weather['timezone_offset']))}</td>
          </tr>
          <tr>
            <td>Moonrise: </td>
            <td>{convertTime(weather['daily'][day]['moonrise'],utcOffset(weather['timezone_offset']))}</td>
          </tr>
          <tr>
            <td>Moonset: </td>
            <td>{convertTime(weather['daily'][day]['moonset'],utcOffset(weather['timezone_offset']))}</td>
          </tr>
          <tr>
            <td>Moon Phase: </td>
            <td>{moonPhase(weather['daily'][day]['moon_phase'])}</td>
          </tr>
        </table>
        </Accordion.Body>
    </Accordion.Item>


     )

    //get Api data
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
    setWeather({timezone:data['timezone'],timezone_offset:data['timezone_offset'], current:data['current'], daily:data['daily']});
    console.log("Weather: ", data)
    setCity(props.city);
    setCountry(props.country);
    setLat(props.lat)
    })
    }
  })

//Return Weather component
return <div bg="warning" className='weather'>
    <h1>Weather Forecast</h1>
    <Card bg="warning" style={{ width: '100%' }}>
      <Card.Body>
       <Card.Title><img src={getIcon(weather['current']['weather'][0]['icon'])}></img> {props.city}</Card.Title>
       <Card.Subtitle className="mb-2 text-muted">Timezone: {weather['timezone']} UTC{utcOffset(weather['timezone_offset'])}</Card.Subtitle>
       <Card.Text>
        <p>Sunrise: {convertTime(weather['current']['sunrise'],utcOffset(weather['timezone_offset']))} -
          Sunset:  {convertTime(weather['current']['sunset'],utcOffset(weather['timezone_offset']))}</p>
        <p>Temp: {convertTemp(weather['current']['temp'])} °C -
          Feels Like: {convertTemp(weather['current']['feels_like'])} °C</p>
        <p>{weather['current']['weather'][0]['description']}</p>
      </Card.Text>
      </Card.Body>
   </Card>
   <h3>8-day forecast</h3>

    <Accordion bg="warning" className='weather'>
      {wDays}
    </Accordion>
    
</div>
    
}

//get weather icon
function getIcon(iconCode) {

  return 'http://openweathermap.org/img/wn/'+iconCode+'@2x.png'

}

//convert temp
function convertTemp(temp) {
  return Math.round(temp-273.15);
}

//convert time
function convertTime(time,offset) {
  let d = new Date()
  var sec = time + (3600*offset) + (60 * d.getTimezoneOffset());
  var date = new Date(sec * 1000);
  var timestr = date.toTimeString();
  return timestr.slice(0,8);
  
}

//convert date
function convertDate(time) {

  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  var sec = time ;
  var date = new Date(sec * 1000);
  var dateStr = date.toLocaleDateString('en-us', options);

  return dateStr;

}

//get moon Phase
function moonPhase(moon) {

  if (moon<0.13 || moon>0.87) {return "New Moon"}
  else if (moon>=0.13 && moon<0.38) {return "First Quarter"}
  else if (moon>=0.38 && moon<0.63) {return "Full Moon"}
  else {return "Last Quarter"}
}

//get wind direction
function windDirection(deg) {

  if (deg>=348.75 || deg<11.25) {return "N"}
  else if (deg>=11.25 && deg<33.75) {return "NNE"}
  else if (deg>=33.75 && deg<56.25) {return "NE"}
  else if (deg>=56.25 && deg<78.75) {return "ENE"}
  else if (deg>=78.75 && deg<101.25) {return "E"}
  else if (deg>=101.25 && deg<123.75) {return "ESE"}
  else if (deg>=123.75 && deg<146.25) {return "SE"}
  else if (deg>=146.25 && deg<168.75) {return "SSE"}
  else if (deg>=168.75 && deg<191.25) {return "S"}
  else if (deg>=191.25 && deg<213.75) {return "SSW"}
  else if (deg>=213.75 && deg<236.25) {return "SW"}
  else if (deg>=236.25 && deg<258.75) {return "WSW"}
  else if (deg>=258.75 && deg<281.25) {return "W"}
  else if (deg>=281.25 && deg<303.75) {return "WNW"}
  else if (deg>=303.75 && deg<326.25) {return "NW"}
  else if (deg>=326.25 && deg<3483.75) {return "NNW"}
  
}

//get utc Offset
function utcOffset(sec) {

  const hours = sec/3600

  if (hours<0) {return (hours)}
  else {return ('+'+hours)}
  
}

export default Weather;