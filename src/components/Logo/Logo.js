import React from 'react';
import classes from './Logo.module.css';
import virusLogo from './../../assets/Image/virus.svg'


const Logo = () =>(
    <div className={classes.Logo} >
        <img src={virusLogo} alt='logo'/><span className={classes.LogoName}>Corona</span>
        </div>
);

export default Logo;    