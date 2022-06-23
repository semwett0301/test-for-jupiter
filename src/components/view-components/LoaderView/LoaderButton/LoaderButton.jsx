import React from 'react';
import classes from './LoaderButton.module.css'
import {useDispatch} from "react-redux";

const LoaderButton = (props) => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch({
            type: "returnToAll"
        })
        dispatch({
            type: "raise"
        })
    }

    return (
        <div onClick={onClick} className={classes.button}>
            {props.children}
        </div>
    );
};

export default LoaderButton;