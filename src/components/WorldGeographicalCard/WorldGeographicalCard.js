import React from 'react';
import GeoChart from './GeoChart/GeoChart';
import data from './GeoChart/GeoChart.world.geo.json';
import classes from './WorldGeographicalCard.module.css';


const WorldGeographicalCard = (props) => {

    return (
        <div className={classes.WorldGeographicalCard}>
            <div className={classes.CardHeading}>
                <h4>COVID-19 Affected Areas</h4>
                <p><span className={classes.Most}></span>Most Affected</p>
                <p><span className={classes.Less}></span>Less Affected</p>
            </div>
            <GeoChart data={data} />
        </div>
    )
}

export default React.memo(WorldGeographicalCard);
