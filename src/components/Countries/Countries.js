import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]); // Step 1
    useEffect( ()=>{   // step 2 
        fetch('https://restcountries.com/v3.1/all')  // Step 3
        .then(res => res.json())
        .then(data => setCountries(data)); // Step 4
    }, [])

    return (
        <div>
            <h1>Hello from Countries: {countries.length }</h1>
            {
                countries.map(country => console.log(country))
            }
            {
                countries.map(country => <Country name={country.name.common} area={country.area} population={country.population}></Country>)
            }
        </div>
    );
};

export default Countries;