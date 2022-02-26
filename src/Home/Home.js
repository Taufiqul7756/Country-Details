import React, { useEffect, useState } from 'react';
import Country from '../Countries/Country';


const Home = () => {
    const [countries,setCountries]= useState([]);

  useEffect(()=>{
    const url ='https://restcountries.com/v3.1/all'
    fetch(url)
    .then(res=> res.json())
    .then(data=> setCountries(data.slice(0,10)))
},[])
    
    
    return (
        <div>
           <h1>We have {countries.length} Countries</h1>
                {
                    countries.map(country => <Country country ={country} > </Country> )
                }
        </div>
    );
};

export default Home;