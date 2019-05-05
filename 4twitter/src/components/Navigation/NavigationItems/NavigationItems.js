import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navigationItems = ( props ) => (
    
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact><FontAwesomeIcon size="lg" icon="home"/></NavigationItem>
        <NavigationItem link="/search"><FontAwesomeIcon size="lg" icon="search"/></NavigationItem>
        <h3>Tweet and read while you sip <FontAwesomeIcon size="sm" icon="coffee"/> !...</h3>
    </ul>
);

export default navigationItems;