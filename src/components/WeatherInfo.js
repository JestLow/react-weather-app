import React from 'react'
import { useWeather } from '../context/WeatherContext'
import WeatherCard from './WeatherCard'

function WeatherInfo() {
    const { weatherForecast, city, isCityFound} = useWeather()
    console.log(isCityFound)
    return (
        <div>
            <h2 className="cityName">{isCityFound ? `3 day forecast for ${city && city[0].toUpperCase() + city.slice(1)}` : "Please be sure that city name is correct"}</h2>
            
            
            <div className="weatherInfo">
                {weatherForecast ? 
                weatherForecast.map((array, index) => {
                    return <WeatherCard key={index} date={array.date} maxTemp={array.day.maxtemp_c} minTemp={array.day.mintemp_c} icon={array.day.condition.icon} />
                })
                :
                "Waiting for data..."}


            </div>
        </div>
    )
}

export default WeatherInfo

// 