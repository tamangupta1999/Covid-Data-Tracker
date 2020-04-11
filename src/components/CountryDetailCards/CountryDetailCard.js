import React from 'react';
// import Search from '../UI/Search/Search';
import CountryCard from './CountryCard/CountryCard';
import Spinner from './../UI/Spinner/Spinner';


const CountryDetailCards = (props) => {
    let countries = props.countries;
    let countriesResult = <Spinner />;
    if(Array.isArray(props.countries)){
        if(countries){
            countriesResult = (
               countries.map(country=>{
                   return <CountryCard 
                   flag={country.countryInfo.flag}
                   country={country.country}
                   totalCases={country.cases/1000}
                   recovered={country.recovered/1000}
                   key={country.country}
                   click={()=>props.countryFullData(country)}
                   />
               })
           )
        }
    }else{
        let countriesArray = [{...countries}];
        countriesResult = (
            countriesArray.map(country=>{
                return <CountryCard 
                flag={country.countryInfo.flag}
                country={country.country}
                totalCases={country.cases/1000}
                recovered={country.recovered/1000}
                key={country.country}
                click={()=>props.countryFullData(country)}
                />
            })
        )

    }
    
    

     
    return countriesResult;
}

export default CountryDetailCards;

