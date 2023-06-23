import React from 'react'
import Current from './Current'
import Selection from './Selection'
import "../assets/css/weather.css"
const Weather = () => {

    return (
        <div className='wrapper' >
            <Current />
            <Selection />
        </div>
    )
}

export default Weather