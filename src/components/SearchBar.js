import React, { useState } from 'react'
import { useWeather } from '../context/WeatherContext'

function SearchBar() {
    const {setCity} = useWeather()
    const [query, setQuery] = useState()
        
    return (
        <div>
            <form className="search">
                <input placeholder="City" onChange={(e) => {
                    setQuery(e.target.value)
                }} />
                <button onClick={(e) => {
                    e.preventDefault()
                    setCity(query)
                }}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
