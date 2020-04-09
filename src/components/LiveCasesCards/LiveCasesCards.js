import React from 'react';
import LiveCasesCard from './LiveCasesCard/LiveDataCard';
import UpArrow from './../../assets/Image/Up.svg';
import DownArrow from './../../assets/Image/Down.svg';
import TotalCasesGraph from './../../assets/Image/Graph.svg';
import RecoveredCasesGraph from './../../assets/Image/Graph1.svg';
import ActiveCasesGraph from './../../assets/Image/Graph2.svg';
import DeathCasesGraph from './../../assets/Image/Graph3.svg';

import classes from './LiveCasesCards.module.css'

const liveCasesCards = (props) => {
    return (
        <div className={classes.LiveCasesCards}>
            <LiveCasesCard caseName="Total Cases"
                arrow={UpArrow}
                caseNumber={props.totalCases}
                graphPath={TotalCasesGraph}
            />
            <LiveCasesCard caseName="Recovered"
                arrow={DownArrow}
                caseNumber={props.recovered}
                graphPath={RecoveredCasesGraph}
            />
            <LiveCasesCard caseName="Active Cases"
                arrow={UpArrow}
                caseNumber={props.activeCase}
                graphPath={ActiveCasesGraph}
            />
            <LiveCasesCard caseName="Death Cases"
                arrow={UpArrow}
                caseNumber={props.totalDeath}
                graphPath={DeathCasesGraph}
            />
            <div className={classes.RecoveryGraph}>

            </div>
        </div>
    )
}

export default liveCasesCards;