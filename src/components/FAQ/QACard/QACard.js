import React from 'react';
import classes from './QACard.module.css';

const QACard = (props) => {
    return (
        <div className={classes.QACard}>
        <h3 className={classes.QHeading}><span className={classes.Ques}>Ques.</span>{props.ques}</h3>
        <p><span className={classes.Ans}>Ans. </span>{props.ans}</p>
        </div>
    )
}

export default QACard;
