import React, { useState } from 'react';
import Button from './../UI/Button/Button';

import classes from './SpreadTrendCard.module.css';
import SpreadTrendGraph from './SpreadTrendGraph/SpreadTrendGraph';

const SpreadTrendCard = (props) => {
    const worldData = props.worldData;
    let graphData = {};
    let date = new Date();
    const [graph, setGraph] = useState({});
    const [addFunctionality, setAddFunctionality] = useState({});
    const onConfirmedHandler = () => {
        let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        graphData = {
            "2020-02-15": 67000,
            "2020-03-01": 161000,
            "2020-03-15": 324000,
            "2020-03-30": 634000
        };
        graphData[currentDate] = worldData.cases
        setAddFunctionality({colors:["#b00","#666"]});
        return setGraph(graphData);
    }

    const onRecoveredHandler = () => {
        let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        graphData = {
            "2020-02-01": 504,
            "2020-02-15": 10973,
            "2020-03-01": 45000,
            "2020-03-30": 150000
        };
        graphData[currentDate] = worldData.recovered;
        setAddFunctionality({colors:["#32CD32","#006400"]});
        return setGraph(graphData);
    }
    const onDeathHandler = () => {
        let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        graphData = {
            "2020-02-01": 304,
            "2020-02-15": 1669,
            "2020-03-01": 3050,
            "2020-03-15": 6520,
            "2020-03-30": 37783
        };
        graphData[currentDate] = worldData.deaths;
        setAddFunctionality({colors:["#b00","#006400"]});
        return setGraph(graphData);
    }

    return (
        <div className={classes.SpreadTrendCard}>
            <div className={classes.Heading}>
                <h4>Spread Trends</h4>
                <div>
                    <Button btnType="Dark"  click={onConfirmedHandler}>Confirmed</Button>
                    <Button btnType="Light" click={onRecoveredHandler}>Recovered</Button>
                    <Button btnType="Light" click={onDeathHandler}>Deaths</Button>
                </div>
            </div>
            <SpreadTrendGraph graphData={graph} additionalFun={addFunctionality} />
        </div>
    )
}

export default React.memo(SpreadTrendCard);
