import React from 'react'
import { months, days } from './Dates';
import { useSelector } from 'react-redux';
const Current = () => {

    const { cityData } = useSelector( ( state ) => state.weather )

    console.log( cityData, 'bhb' );

    //get current time
    const today = new Date();
    const gettodaydate = () => {
        let day = days[ today.getDay() ];
        let date = today.getDate()
        let month = months[ today.getMonth() ]
        let year = today.getFullYear()
        document.getElementById( 'date' ).innerHTML = day + ", " + date + "" + month + "" + year
    }
    function startTime() {
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime( m );
        s = checkTime( s );
        document.getElementById( 'time' ).innerHTML = h + ":" + m + ":" + s;

        setTimeout( startTime, 1000 );
    }
    function checkTime( i ) {
        if ( i < 10 ) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }
    React.useEffect( () => {
        startTime();
        gettodaydate();
    }, [] );

    return (
        <div className='current-wrapper' >
            <div className="wht">
                <h4 style={ { display: "inline-block", color: "#fff" } } >{ cityData?.weather[ 0 ]?.main }</h4>
                <div className="name">
                    <span>{ cityData?.name }</span> <br />
                    <span>{ cityData?.sys?.country }</span>
                </div>
            </div>
            <div className='curr-foot' >
                <div className="date-time">
                    <h4 id='time' ></h4>
                    <h5 id="date" ></h5>
                </div>
                <div className="temp">
                    <h1>{ ( cityData?.main?.temp - 273.15 ).toFixed( 2 ) }°C</h1>
                </div>
            </div>
        </div>
    )
}

export default Current