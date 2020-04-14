import React from 'react';
import classes from './RatioRecoveryGraph.module.css';
// import PercentageBg from './../../../assets/Image/Precentage Bg.svg'

import { CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const RatioRecoveryGraph = (props) =>{
    return (
        <div className={classes.RatioRecoveryGraph}>
            <h4 className={classes.RecoveryHeading}>Ratio Of Recovery</h4>
            <CircularProgressbarWithChildren  className={classes.ProgressBar} value={props.ratioOfRecoveryCases} text={`${props.ratioOfRecoveryCases.toFixed(1)}%`} 
             styles={buildStyles({
                textSize: '0.8rem',
                pathTransitionDuration: 0.5,
                // Colors
                pathColor: `#06BA90, ${props.ratioOfRecoveryCasess / 100})`,
                textColor: '#30313A',
                trailColor: '#f4f4f4',
                backgroundColor: '#3e98c7',
              })}
            >
            </CircularProgressbarWithChildren>
            <p className={classes.InfectedData}>
                <span>{`${props.totalCases.toFixed(1)}k`} Affected</span>&nbsp;|&nbsp;<span>{`${props.recovered.toFixed(1)}k`} Recovered</span>
            </p>
        </div>
    )
}

export default RatioRecoveryGraph;
