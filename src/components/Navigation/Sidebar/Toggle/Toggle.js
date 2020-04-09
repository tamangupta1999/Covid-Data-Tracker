import React from 'react';
import classes from './Toggle.module.css';

const Toggle = (props) => (
    <div onClick={props.clicked} className={classes.Toggle}>
        <div></div>
        <div></div>
        <div></div>
        </div>
);

export default Toggle;