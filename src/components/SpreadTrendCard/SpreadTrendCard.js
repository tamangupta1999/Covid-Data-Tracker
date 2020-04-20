import React, { useState, useCallback, useEffect } from 'react';
import Button from './../UI/Button/Button';

import classes from './SpreadTrendCard.module.css';
import SpreadTrendGraph from './SpreadTrendGraph/SpreadTrendGraph';

const SpreadTrendCard = (props) => {
    const { historicalData } = props;
    const [graph, setGraph] = useState({});
    const [addFunctionality, setAddFunctionality] = useState({});
    const [confirmedBtn, setConfirmedBtn] = useState('');
    const [recoveredBtn, setRecoveredBtn] = useState('');
    const [deathBtn, setDeathBtn] = useState('');


    const onConfirmedHandler = useCallback(() => {
        setAddFunctionality({ colors: ["#b00", "#666"] });
        setConfirmedBtn('Dark');
        setRecoveredBtn('Light');
        setDeathBtn('Light');
        setGraph(historicalData['cases']);
    }, [historicalData, setGraph])
    const onRecoveredHandler = () => {
        setAddFunctionality({ colors: ["#32CD32", "#006400"] });
        setConfirmedBtn('Light');
        setRecoveredBtn('Dark');
        setDeathBtn('Light');
        setGraph(historicalData['recovered']);
    }
    const onDeathHandler = () => {
        setAddFunctionality({ colors: ["#b00", "#006400"] });
        setConfirmedBtn('Light');
        setRecoveredBtn('Light');
        setDeathBtn('Dark');
        setGraph(historicalData['deaths']);
    }
    useEffect(() => {
        onConfirmedHandler()
    }, [onConfirmedHandler])

    return (
        <div className={classes.SpreadTrendCard}>
            <div className={classes.Heading}>
                <h4>Spread Trends</h4>
                <div>
                    <Button btnType={confirmedBtn} click={() => onConfirmedHandler()}>Confirmed</Button>
                    <Button btnType={recoveredBtn} click={onRecoveredHandler}>Recovered</Button>
                    <Button btnType={deathBtn} click={onDeathHandler}>Deaths</Button>
                </div>
            </div>
            <SpreadTrendGraph graphData={graph} additionalFun={addFunctionality} />
        </div>
    )
}

export default React.memo(SpreadTrendCard);
