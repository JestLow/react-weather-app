import React from 'react'

function WeatherCard({ date, maxTemp, minTemp, icon }) {
    return (
        <div className="weatherCard">
                <div className="weatherDetails">
                    <h4 className="colorKhaki">Date:{date}</h4> 
                    Maximum Tempature: {maxTemp}
                    <br />
                    Minimum Tempature: {minTemp}
                </div>
                <div className="weatherImg">
                    <img  src={icon} alt="icon" />
                </div>
        </div>
    )
}

export default WeatherCard