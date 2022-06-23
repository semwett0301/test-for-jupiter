import React from 'react';
import RepresetingText from "./RepresentingText/RepresetingText";
import classes from './RepresentingView.module.css'
import RepresentingHeader from "./RepresentingHeader/RepresentingHeader";
import sizeMe from "react-sizeme";

const RepresentingView = (props) => {

    return (
        <div className={classes.text_wrapper}>
            <RepresentingHeader>{props.header}</RepresentingHeader>
            <RepresetingText>{props.text}</RepresetingText>
        </div>
    );
};

export default RepresentingView;