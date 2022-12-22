import React from 'react'
import { useState,useEffect } from 'react'

import "./App.css"

import pngGmap from "./location.png"

function App() {

  const [city,setCity] = useState("Banglore")
  const [temp,setTemp] = useState(0)
  const [description,setDescription] = useState("")

  return (
    <>
    <div className="heading-container"><h1 className="app-title"> <i>Weather App</i></h1></div>
    
    <div className='search-container'>
    <img src={pngGmap} className="img-location" />
    <input type="text" placeholder="Enter City Name" 
    className="input-city" value={city}
    onChange={(e)=> setCity(e.target.value)}/>
    </div>

    <div>
      <h3>{city}</h3>
    </div>

    </>
  )
}

export default App