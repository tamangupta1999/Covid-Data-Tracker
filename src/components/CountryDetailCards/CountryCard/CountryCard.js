import React from 'react'
import classes from './CountryCard.module.css';
import UpArrow from './../../../assets/Image/Up.svg';
import DownArrow from './../../../assets/Image/Down.svg';

const countryCard = (props) => {
    let activeCases = props.totalCases-props.recovered ;
    let arrow = UpArrow;
    if(activeCases<props.recovered) {
        arrow = DownArrow;
    } 
    let totalC = props.totalCases*1000;
    if(totalC > 1000) {
        totalC = `${props.totalCases.toFixed(1)}k`;
    }

    let recover = props.recovered*1000;
    if(recover > 1000) {
        recover = `${props.recovered.toFixed(1)}k`
    }
    return (
        <div className={classes.CountryCard} onClick={props.click}>
            <div>
                <img src={props.flag} alt={props.country} />
                <p className={classes.CountryName}>{props.country}</p>
                <p className={classes.CountryData}>
                    <span>{totalC} Affected</span>&nbsp;|&nbsp;<span>{recover} Recovered</span>
                </p>
            </div>
            <div>
                <img className={classes.Arrow} src={arrow} alt='Red Arrow' /> 
            </div>
        </div>
    )
}
export default countryCard;