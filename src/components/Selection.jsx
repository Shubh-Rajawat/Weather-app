import React, { useState } from 'react'
import Details from './Details'
import { useQuery } from 'react-query';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { weatherActions } from '../redux/weatherData';

const Selection = () => {
    const [ city, setCity ] = useState( "dehli" )
    const APIkey = "9e6fad0cc15c1f9e64143dd3d1492172";
    const dispatch = useDispatch();

    const fetchTemp = () => {
        return axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ APIkey }` )
    }
    const { data, error, refetch } = useQuery( 'todos', fetchTemp )

    dispatch( weatherActions.storeData( data?.data ) )
    // console.log( data );

    return (
        <div className='select-wrapper' >
            <div className="input">
                <input type="text" name="city" id="city" className='city-input'
                    placeholder='Enter City'
                    value={ city }
                    onChange={ ( e ) => setCity( e.target.value ) }
                /> <br />
                <button className='btn' onClick={ refetch } >Search</button>
            </div>
            <Details city={ data?.data.name } main={ data?.data.main } />
        </div>
    )
}

export default Selection