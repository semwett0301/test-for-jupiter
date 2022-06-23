import React from 'react';
import LoaderButton from "./LoaderButton/LoaderButton";
import classes from './LoaderView.module.css'

const LoaderView = (props) => {
    return (
        <div className={classes.button_back}>
            <LoaderButton>{props.placeholder}</LoaderButton>
        </div>
    );
};

export default LoaderView;