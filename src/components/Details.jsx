import React from 'react'

const Details = ( props ) => {
    const { city, main } = props
    return (
        <div className="info">
            <table >
                <tr>
                    <td>City</td>
                    <td>{ city }</td>
                </tr>
                <tr>
                    <td>temperature</td>
                    <td>{ ( main?.temp - 273.15 ).toFixed( 2 ) }°C</td>
                </tr>
            </table>
        </div>
    )
}

export default Details