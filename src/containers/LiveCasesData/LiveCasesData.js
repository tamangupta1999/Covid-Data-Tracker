import React,{useState,useEffect} from 'react';
import axios from 'axios';
import LiveCasesCards from './../../components/LiveCasesCards/LiveCasesCards';
import Spinner from './../../components/UI/Spinner/Spinner';

const LiveCasesData = () => {
    const [totalCases, settotalCases] = useState(0);
    const [recovered, setrecovered] = useState(0);
    const [activeCases, setactiveCases] = useState(0);
    const [totalDeaths, settotalDeaths] = useState(0);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        axios.get('https://corona.lmao.ninja/all')
        .then(response => {
            settotalCases(response.data.cases)
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
    if(!loading) {
        liveCasesRecord = (<LiveCasesCards totalCases={totalCases}
        recovered={recovered}
        activeCase={activeCases}
        totalDeath={totalDeaths}/>)
    }
    return (
        <div>
            {liveCasesRecord}
        </div>
    );
}

export default LiveCasesData;