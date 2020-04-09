import React from 'react'
import classes from './Sidebar.module.css';

import Backdrop from './../../UI/Backdrop/Backdrop';
import VirusLogo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';

const Sidebar = (props) => {
    let attanchedClasses = [classes.Sidebar, classes.Close];
    if (props.open) {
        attanchedClasses = [classes.Sidebar, classes.Open];

    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attanchedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
               <VirusLogo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;