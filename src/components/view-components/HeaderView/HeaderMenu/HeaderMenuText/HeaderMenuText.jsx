import React from 'react';
import classes from "./HeaderMenuText.module.css"
import {useDispatch, useSelector} from "react-redux";

function showLine(e) {
    e.target.parentNode.lastChild.style.display = "block"
}

function hideLine(e) {
    e.target.parentNode.lastChild.style.display = "none"

}

const HeaderMenuText = (props) => {
    return (
        <div className={classes.text_wrapper} onMouseEnter={showLine} onMouseOut={hideLine}>
            <span className={classes.header_text}>{props.children}</span>
            <div className={classes.line + ' ' + classes.header_line}/>
        </div>
    )
};

export default HeaderMenuText;