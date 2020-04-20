import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import WorldCasesCard from '../../components/WorldCasesCards/WorldCasesCards';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './WorldCasesData.module.css';

import RatioRecoveryGraph from '../../components/RatioRecoveryGraph/RatioRecoveryGraph';
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
    const [historicalData, setHistoricalData] = useState({});
    const [allHistoricalData, setAllHistoricalData] = useState([]);


    const searchCountry = useCallback((countryData) => {
        setCountries(countryData)
    }, [])

    let ratioOfRecoveryCases = (totalCase, recovoredCase) => {
        return (recovoredCase / totalCase) * 100;
    }

    const countryFullData = (countryName) => {
        settotalCases(countryName.cases);
        setrecovered(countryName.recovered);
        setactiveCases(countryName.active);
        settotalDeaths(countryName.deaths);
        console.log(countryName.country);
        let countryHistoricalData = allHistoricalData.filter(country => country.country === countryName.country);
        if (countryHistoricalData.length === 0) {
            setHistoricalData({})
        } else {
            setHistoricalData(countryHistoricalData[0].timeline)
        }

    }

    useEffect(() => {
        axios.get(`https://corona.lmao.ninja/v2/historical`)
            .then(response => {
                console.log("history")
                setAllHistoricalData(response.data)
            }).catch(error => {
                console.log(error.message)
            })
    }, [])

    useEffect(() => {
        axios.get('https://corona.lmao.ninja/v2/all')
            .then(response => {
                settotalCases(response.data.cases);
                setrecovered(response.data.recovered)
                setactiveCases(response.data.active)
                settotalDeaths(response.data.deaths)
                setloading(false)
            }).catch(error => {
                console.log(error)
            })
    }, [])
    useEffect(() => {
        axios.get('https://corona.lmao.ninja/v2/historical/all')
            .then(response => {
                setHistoricalData(response.data);
                setloading(false)
            }).catch(error => {
                console.log(error.message)
            })
    }, [])

    let liveCasesRecord = <Spinner />;
    let spreadTrend = <Spinner />;

    if (!loading) {
        liveCasesRecord = (<WorldCasesCard totalCases={totalCases}
            recovered={recovered}
            activeCase={activeCases}
            totalDeath={totalDeaths} />)
    }
    if (!loading) {
        spreadTrend = <SpreadTrendCard historicalData={historicalData} />
    }

    return (
        <div className={classes.WorldCasesData}>
            <div className={classes.ContainerOne}>
                <div className={classes.FirstRow}>
                    {liveCasesRecord}
                </div>
                <div className={classes.SecondRow}>
                    <div className={classes.WorldCasesCard}>
                        <Search onSearchCountry={searchCountry} />
                        <CountryDetailCard countries={countries} countryFullData={countryFullData} />
                    </div>
                    <WorldGeographicalCard />
                </div>
                <div className={classes.ThirdRow}>
                    {spreadTrend}
                    <NewsFeedsCard />
                </div>
            </div>
            <div className={classes.ContainerTwo}>
                <RatioRecoveryGraph ratioOfRecoveryCases={ratioOfRecoveryCases(+totalCases, +recovered)}
                    totalCases={+totalCases / 1000}
                    recovered={+recovered / 1000} />
                <LatestTweetsCard />
            </div>
        </div>
    );
}

export default LiveCasesData;