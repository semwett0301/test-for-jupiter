import React, {useContext} from 'react';
import classes from './TileButton.module.css'
import {useDispatch} from "react-redux";

const TileButton = (props) => {
    const dispatch = useDispatch()

    const changeTab = () => {
        dispatch({
            type: "replace",
            payload: props.placeholder
        })
        dispatch({
            type: "changeTab",
            payload: props.placeholder
        })


    }

    return (
        <div className={classes.button} onClick={changeTab}>
            <span className={classes.button_text}>
                {props.placeholder}
            </span>
        </div>
    );
};

export default TileButton;