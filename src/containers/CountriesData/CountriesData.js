import React, { useState, useCallback} from 'react';
import CountryDetailCard from './../../components/CountryDetailCards/CountryDetailCard';
import Search from '../../components/UI/Search/Search';
import classes from './CountriesData.module.css';

const CountriesData = (props) => {
    const [countries, setCountries] = useState([]);

    const searchCountry = useCallback((result) => {
        setCountries(result);
    },[])

    // useEffect(()=>{
    //     axios.get('https://corona.lmao.ninja/countries')
    //     .then(response => {
    //         setCountries(response.data)
    //     }).catch(err=>{
    //         console.log(err.message)
    //     })
    // },[setCountries])
    return (
        <div className={classes.CountriesData}>
        <Search onSearchCountry={searchCountry}/>
        <CountryDetailCard countries={countries} />
        </div>
    );
}

export default CountriesData;
