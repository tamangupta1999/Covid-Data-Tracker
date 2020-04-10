import React, { useState, useEffect } from 'react';
import classes from './Search.module.css';
import SearchIcon from './../../../assets/Image/Search/searchImg.png';
import axios from 'axios';

const Search = (props) => {
    const { onSearchCountry } = props;
    const [search, setSearch] = useState('');

    useEffect(() => {
        setTimeout(() => {
            let country = search;
            // let onLoadCountry = [];
            axios.get(`https://corona.lmao.ninja/countries/${country}`).then(response => {
                let data = response.data;
                onSearchCountry(data)
            }).catch(error => {
                console.log(error.message)
            })
        }, 1000)


    }, [search, onSearchCountry])
    return (
        <div className={classes.Search}>
            <input type="text" placeholder="Search" value={search} onChange={event => setSearch(event.target.value)} />
            <img src={SearchIcon} alt='searchIcon' />
        </div>
    )
}


export default Search;

