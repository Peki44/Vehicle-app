import React from 'react'
import "./Home.css";

function Home() {
  return (
    <div className="home">
        <div className="title">
            <p>Find perfect car for you</p>
            <p className="secondParagraph">Here in Autostore you will find best car for best price</p>
        </div>
        <div className="image">
            <img src="https://www.bmw.hr/content/dam/bmw/common/all-models/5-series/sedan/2023/5-series-sedan-silver.png" alt="car"/>
        </div>
    </div>
  )
}

export default Home