import React from 'react';
import classes from './LiveDataCard.module.css';

const liveDataCard = (props) => {
    return (
        <div className={classes.LiveDataCard}>
            <div className={classes.DataBox}>
            <p className={classes.CaseName}>{props.caseName}</p>
            <img className={classes.Arrow} src={props.arrow} alt='arrow'/>
            <p className={classes.CaseNumber}>{props.caseNumber}</p>
            </div>
            <img className={classes.Graph} src={props.graphPath} alt={props.alt} />
        </div> 
    );
}

export default liveDataCard;
