import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assests/search.png'
import clear_icon from '../Assests/clear.png'
import cloud_icon from '../Assests/cloud.png'
import rain_icon from '../Assests/rain.png'
import snow_icon from '../Assests/snow.png'
import humidity_icon from '../Assests/humidity.png'
import drizzile_icon from '../Assests/drizzle.png'
import wind_icon from '../Assests/wind.png'

export const WeatherApp =  () => {

    let api_key="e99948a9ccd58dfbb1e37b7b436cb223";

    const [wicon,setWicon] = useState(cloud_icon);

    const search = async () => {
            const element  = document.getElementsByClassName("cityInput")
            if(element[0].value==="")
            {
              return 0;
            }
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

            let response = await fetch(url);
            let data = await response.json();

            const humidity = document.getElementsByClassName("humidity-percent");
            const wind = document.getElementsByClassName("wind-rate");
            const temperature = document.getElementsByClassName("weather-temp");
            const location =  document.getElementsByClassName("weather-location");

            humidity[0].innerHTML = data.main.humidity+" %";
            wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
            temperature[0].innerHTML = Math.floor(data.main.temp)+"°C";
            location[0].innerHTML = data.name;

            if(data.weather[0].icon==="01d" || data.weather[0].icon==="o1n")
            {
              setWicon(clear_icon);
            }
            else if(data.weather[0].icon==="02d" || data.weather[0].icon==="o2n")
            {
              setWicon(cloud_icon);
            }
            else if(data.weather[0].icon==="03d" || data.weather[0].icon==="o3n")
            {
              setWicon(drizzile_icon);
            }
            
            else if(data.weather[0].icon==="04d" || data.weather[0].icon==="o4n")
            {
              setWicon(drizzile_icon);
            }
            else if(data.weather[0].icon==="09d" || data.weather[0].icon==="o9n")
            {
              setWicon(rain_icon);
            }
            else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
            {
              setWicon(rain_icon);
            }
            else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
            {
              setWicon(snow_icon);
            }
            else
            {
              setWicon(clear_icon);
            }
            

    }   

  return (
    <div className='container'>
      <div className="top-bar">
          <input type="text" className="cityInput" placeholder='search'/>
          <div className="search-icon" onClick={()=>{search()}}>
            <img src= {search_icon} alt=''/>
          </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt=''/>
      </div>
      <div className="weather-temp">-°C</div>
      <div className="weather-location">-</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">-</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">-km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp