import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import LiveCasesCards from '../../components/WorldCasesCards/WorldCasesCards';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './WorldCasesData.module.css';

import CountryDetailCard from '../../components/CountryDetailCards/CountryDetailCard';
import Search from '../../components/UI/Search/Search';
import WorldGeographicalCard from '../../components/WorldGeographicalCard/WorldGeographicalCard';
import SpreadTrendCard from '../../components/SpreadTrendCard/SpreadTrendCard';
import NewsFeedsCard from './../../components/NewsFeedsCard/NewsFeedsCard';
import LatestTweetsCard from '../../components/LatestTweetsCard/LatestTweetsCard';

const LiveCasesData = () => {
    const [totalCases, settotalCases] = useState(0);
    const [recovered, setrecovered] = useState(0);
    const [activeCases, setactiveCases] = useState(0);
    const [totalDeaths, settotalDeaths] = useState(0);
    const [loading, setloading] = useState(true);
    const [countries, setCountries] = useState([]);
    const [worldData, setWorldData] = useState([]);

    const searchCountry = useCallback((result) => {
        setCountries(result);
    }, [])

    const countryFullData = (countryName) => {
        settotalCases(countryName.cases);
        setrecovered(countryName.recovered)
        setactiveCases(countryName.active)
        settotalDeaths(countryName.deaths)
    }

    useEffect(() => {
        axios.get('https://corona.lmao.ninja/all')
            .then(response => {
                setWorldData(response.data)
                settotalCases(response.data.cases);
                setrecovered(response.data.recovered)
                setactiveCases(response.data.active)
                settotalDeaths(response.data.deaths)
                console.log(response)
                setloading(false)
            }).catch(error => {
                console.log(error)
            })
    }, [])
    let liveCasesRecord = <Spinner />;
    let spreadTrend = <Spinner />
    if (!loading) {
        liveCasesRecord = (<LiveCasesCards totalCases={totalCases}
            recovered={recovered}
            activeCase={activeCases}
            totalDeath={totalDeaths} />)
        
    }
    if(!loading) {
        spreadTrend =  <SpreadTrendCard worldData={worldData}/>
    }

    return (
        <React.Fragment>
            <div>
                {liveCasesRecord}
            </div>
            <div className={classes.WorldMapCard}>
                <div className={classes.WorldCasesData}>
                    <Search onSearchCountry={searchCountry} />
                    <CountryDetailCard countries={countries} countryFullData={countryFullData}/>
                </div>
                <div className={classes.WorldGeographical}>
                   <WorldGeographicalCard />
                </div>
            </div>
           <div className={classes.NewsSpreadTrend}>
           {spreadTrend}
           <NewsFeedsCard  />
           <LatestTweetsCard />
           </div>
        </React.Fragment>
    );
}

export default LiveCasesData;