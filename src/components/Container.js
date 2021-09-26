import React from 'react'
import SearchBar from './SearchBar'
import WeatherInfo from './WeatherInfo'
import Header from './Header'

function Container() {

    return (
        <div className="container">
            <Header />
            <SearchBar  />
            <WeatherInfo />
        </div>
    )
}

export default Container
