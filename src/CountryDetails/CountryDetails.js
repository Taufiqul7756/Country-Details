import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = (props) => {
    const {countryName} = useParams();
    const [country,SetCountry] = useState([]);
    country &&  console.log(country?.population);

    // const {name,capital,region,area,flags}= country?.[0];
    // console.log({capital});
    
    useEffect(()=>{
        const url =`https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data=> SetCountry(data));
    },[countryName])

    return (
        <div>
            <p>This is country details of <b>{countryName}</b></p>

            <p>Population: {country.population}</p>
            {/* <p>Region: {country.region}</p>
            <p>population: {country.capital}</p> */}
            

        </div>
    );
};

export default CountryDetails;