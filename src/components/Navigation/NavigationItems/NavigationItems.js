import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = (props) =>{
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/'>Home</NavigationItem>
            <NavigationItem link='/faq'>FAQ</NavigationItem>
            <NavigationItem link='/help'>HELPFUL LINKS</NavigationItem>
        </ul>
    )
}

export default NavigationItems;