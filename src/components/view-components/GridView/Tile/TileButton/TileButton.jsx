import React, {useContext} from 'react';
import classes from './TileButton.module.css'
import {Context} from "../../../../functional-components/Main/context";

const TileButton = (props) => {
    const reducer = useContext(Context)

    const changeTopic = () =>  {
        if (props.children === "Show All") {
            reducer.dispatch({
                type: "recover"
            })
        } else {
            reducer.dispatch({
                type: "replace",
                value: props.placeholder
            })
        }
    }

    return (
        <div className={classes.button_wrapper} onClick={changeTopic}>
            <span className={classes.button_text}>
                {props.placeholder}
            </span>
        </div>
    );
};

export default TileButton;