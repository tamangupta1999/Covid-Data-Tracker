import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from './../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Toggle from './../Sidebar/Toggle/Toggle';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
        <Toggle  clicked={props.toggle} />
        <div className={classes.Logo}>
        <Logo  />
        </div>
        <nav className={classes.DesktopOnly}>
           <NavigationItems />
            </nav>        
            <div></div>
    </header>
    )
}

export default Toolbar;