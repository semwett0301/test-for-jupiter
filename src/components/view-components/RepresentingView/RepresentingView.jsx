import React from 'react';
import RepresetingText from "./RepresentingText/RepresetingText";
import classes from './RepresentingView.module.css'

const RepresentingView = (props) => {
    return (
        <div className={classes.text_wrapper}>
            {props.rows.map(
                elem => <RepresetingText key={elem.id}>{elem.text}</RepresetingText>
            )}
        </div>
    );
};

export default RepresentingView;