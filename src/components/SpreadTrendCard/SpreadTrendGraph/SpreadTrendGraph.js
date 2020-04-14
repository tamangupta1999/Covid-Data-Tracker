import React from 'react';
import classes from './SpreadTrendGraph.module.css';
import { LineChart } from 'react-chartkick';
import 'chart.js';


const SpreadTrendGraph = (props) => {
    const data= props.graphData;
    return (
        <div className={classes.SpreadTrendGraph}>
           <LineChart data={data} width="455px" height="151px"
           colors={props.additionalFun.colors}
           dataset={{borderWidth: 4}}
           discrete={false}
           messages={{empty: "Click On Any One Them To Check Trend"}}
           library={{backgroundColor: "#eee"}}/>
        </div>
    )
}

export default React.memo(SpreadTrendGraph);
