import React from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js';


const spreadTrendGraph = (props) => {
    const data= props.graphData;
    return (
        <div>
           <LineChart data={data}  width="448px" height="151px"
           colors={props.additionalFun.colors}
           dataset={{borderWidth: 4}}
           discrete={false}/>
        </div>
    )
}

export default React.memo(spreadTrendGraph);
