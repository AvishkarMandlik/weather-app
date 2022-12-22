import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";

import "./App.css"
import pngGmap from "./location.png"

function App() {

  const [city,setCity] = useState("Rahuri")
  const [temp,setTemp] = useState(0)
  const [description,setDescription] = useState("")


  useEffect(()=>{
    async function loadData(){
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=73ba4ed59fd3b370d4f178d831d3833a`)
      if(response.status === 200){
        const temp = Math.round(response.data.main.temp - 273.15);
        setTemp(`${temp}°C`);
        const description = response.data.weather[0].description
        setDescription(description)
      }

    }
    loadData();
  },[city])

  return (
    <>
    <div className="background">
    <div className="heading-container"><h1 className="app-title"> <i>Weather App</i></h1></div>
    
    <div className='search-container'>
    <img src={pngGmap} className="img-location" alt="pngGmap"/>
    <input type="text" placeholder="Enter City Name" 
    className="input-city" value={city}
    onChange={(e)=> setCity(e.target.value)}/>
    </div>

    <div className="weather-container">
      <div className='city'>City :- {city}</div>
      <div className='city-tempreture'>Tempreture :- {temp}</div>
      <div className='city-description'>Description :- {description} </div>
    </div>
    </div>
    </>
  )
}

export default App