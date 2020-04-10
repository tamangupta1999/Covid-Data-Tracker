import React from 'react';
import LiveCasesCard from './LiveCasesCard/LiveDataCard';
import RatioRecoveryGraph from './RatioRecoveryGraph/RatioRecoveryGraph';
import UpArrow from './../../assets/Image/Up.svg';
import DownArrow from './../../assets/Image/Down.svg';
import TotalCasesGraph from './../../assets/Image/Graph.svg';
import RecoveredCasesGraph from './../../assets/Image/Graph1.svg';
import ActiveCasesGraph from './../../assets/Image/Graph2.svg';
import DeathCasesGraph from './../../assets/Image/Graph3.svg';

import classes from './LiveCasesCards.module.css'

const liveCasesCards = (props) => {
    let ratioOfRecoveryCases = (totalCase, recovoredCase) => {
        return (recovoredCase/totalCase)*100;
    }
    const numberComma =(res)=> {
        return res.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div className={classes.LiveCasesCards}>
            <LiveCasesCard caseName="Total Cases"
                arrow={UpArrow}
                caseNumber={numberComma(props.totalCases)}
                graphPath={TotalCasesGraph}
            />
            <LiveCasesCard caseName="Recovered"
                arrow={DownArrow}
                caseNumber={numberComma(props.recovered)}
                graphPath={RecoveredCasesGraph}
            />
            <LiveCasesCard caseName="Active Cases"
                arrow={UpArrow}
                caseNumber={numberComma(props.recovered)}
                graphPath={ActiveCasesGraph}
            />
            <LiveCasesCard caseName="Death Cases"
                arrow={UpArrow}
                caseNumber={numberComma(props.totalDeath)}
                graphPath={DeathCasesGraph}
            />
            <RatioRecoveryGraph ratioOfRecoveryCases={ratioOfRecoveryCases(+props.totalCases,+props.recovered)}
            totalCases={+props.totalCases/1000}
            recovered={+props.recovered/1000} />
        </div>
    )
}

export default liveCasesCards;