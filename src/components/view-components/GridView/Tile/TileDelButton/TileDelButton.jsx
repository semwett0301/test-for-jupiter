import React from 'react';
import {useDispatch} from "react-redux";
import classes from './TileDelButton.module.css'

const TileDelButton = (props) => {
    const dispacher = useDispatch()

    let showClass = ''
    if (props.select) {
        showClass = classes.shown_del_button
    }

    const onClick = () => {
        dispacher({
            type: "remove",
            payload: props.num
        })
    }

    return (
        <div className={classes.del_button + ' ' + showClass} onClick={onClick}>
            {props.children}
        </div>
    );
};

export default TileDelButton;