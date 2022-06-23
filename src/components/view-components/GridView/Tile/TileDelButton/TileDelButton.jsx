import React from 'react';
import {useDispatch} from "react-redux";
import classes from './TileDelButton.module.css'

const TileDelButton = (props) => {
    const dispacher = useDispatch()

    if (props.select) {
        document.getElementsByClassName(classes.del_button)[props.num - 1].classList.add(classes.shown_del_button)
    }

    const onClick = () => {
        dispacher({
            type: "remove",
            payload: props.num
        })
    }

    return (
        <div className={classes.del_button} onClick={onClick}>
            {props.children}
        </div>
    );
};

export default TileDelButton;