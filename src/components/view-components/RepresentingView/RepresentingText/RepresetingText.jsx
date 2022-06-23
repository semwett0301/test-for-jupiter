import React from 'react';
import classes from './Represeting.module.css'

const RepresentingText = (props) => {
    return (
        <span className={classes.text}>
            {props.children}
        </span>
    );
};

export default RepresentingText;