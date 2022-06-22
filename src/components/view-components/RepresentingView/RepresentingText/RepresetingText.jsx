import React from 'react';
import classes from './Represeting.module.css'

const RepresentingText = (props) => {
    return (
        <div className={classes.text}>
            {props.children}
        </div>
    );
};

export default RepresentingText;