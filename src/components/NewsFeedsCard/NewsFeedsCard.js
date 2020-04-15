import React from 'react';
import classes from './NewsFeedsCard.module.css';
import DemoImg from '../../assets/Image/UserDemo.svg';
import {NavLink} from 'react-router-dom';

 const NewsFeedsCard = (props) => {
    return (
        <div className={classes.NewsFeedsCard}>
            <img src={DemoImg} alt="DemoImg" />
            <div className={classes.SideFeed}>
                <p><span>News & Updates</span></p>
                <h4>5 Symptoms of Corona Virus that you should know</h4>
                <NavLink to="/help">Read More <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></NavLink>
            </div>
        </div>
    )
}

export default NewsFeedsCard;