import React from 'react';
import classes from './RepresentingHeader.module.css'

const RepresentingHeader = (props) => {
    return (
        <div className={classes.representing_header}>
            {props.children}
        </div>
    );
};

export default RepresentingHeader;