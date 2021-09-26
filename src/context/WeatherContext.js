import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState()
    const [weatherForecast, setWeatherForecast] = useState(null)
    const [isCityFound, setIsCityFound] = useState(true)
    
    useEffect(() => {
        weatherForecastRequest()
    }, [city])



    const weatherForecastRequest = () => {
        const key = process.env.REACT_APP_WEATHER_API_KEY
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5&aqi=no&alerts=no`)
        .then(res => {
            setWeatherForecast(res.data.forecast.forecastday)
            setIsCityFound(true)
        }
        )
        .catch(err => {
            setWeatherForecast(null)
            setIsCityFound(false)
        })}

    const values = {
        city,
        setCity,
        weatherForecast,
        isCityFound
    }

    return(
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => useContext(WeatherContext)
