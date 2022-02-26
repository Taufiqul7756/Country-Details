import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = (props) => {
    const {countryName} = useParams();
    const [country,SetCountry] = useState({});

    // const {name,capital,region,area,flags}= props.country;
    
    useEffect(()=>{
        const url =`https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data=> SetCountry(data));
    },[])
    return (
        <div>
            <p>This is country details of <b>{countryName}</b></p>
            

        </div>
    );
};

export default CountryDetails;