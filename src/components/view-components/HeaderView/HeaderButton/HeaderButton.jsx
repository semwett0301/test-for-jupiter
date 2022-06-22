import React from 'react';
import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
    return (
        <div className={classes.button_edging}>
            <span className={classes.button_text}>
                {props.children}
            </span>
        </div>
    );
};

export default HeaderButton;