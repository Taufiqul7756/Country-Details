import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {

    const {name,capital,region,area,flags}= props.country;

    const friendStyle ={
        border:'1px solid red',
        borderRadius: '20px',
        margin:'20px',
        padding: '20px',
        display: 'grid',

        
    }
    return (
        <div style={friendStyle}>
            <img src={flags.png} alt="" />
            <h2>Name: {name.common}</h2>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            
            <Link to={`/country/${name.common}`}> <button> Details</button> </Link>
        </div>
    );
};

export default Country;