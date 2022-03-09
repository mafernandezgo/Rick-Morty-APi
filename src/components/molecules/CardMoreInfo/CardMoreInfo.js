import React from 'react'
import './CardMoreInfo.scss'

function MoreInfo ({data}) {

    const {status, gender, location, origin} = data

    return (
        <div className="test">
            <h1 >status</h1>
            <p>{status}</p>
            <h1 >gender</h1>
            <p>{gender}</p>
            <h1 >location</h1>
            <p>{location.name}</p>
            <h1 >Origin</h1>
            <p >{origin.name}</p>
        </div>
    )
}

export default MoreInfo