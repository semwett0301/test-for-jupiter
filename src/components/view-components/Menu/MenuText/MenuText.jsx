import React from 'react';
import classes from "./MenuText.module.css"
import {useDispatch, useSelector} from "react-redux";

function showLine(e) {
    e.target.parentNode.lastChild.style.display = "block"
}
function hideLine(e) {
    e.target.parentNode.lastChild.style.display = "none"

}

function createClasses(state, value) {
    let classLine;
    let classText;
    if (state === value ){
        classLine = classes.line + ' ' + classes.main_line + ' ' + classes.chose_line;
        classText = classes.main_text + ' ' + classes.chose_main_text
    } else {
        classLine = classes.line + ' ' + classes.main_line;
        classText = classes.main_text
    }

    return {classLine, classText};
}

const MenuText = (props) => {
    const dispatch = useDispatch()
    const tab = useSelector(state => state.tabs)

    if (props.isHeader) {
        return (
            <div className={classes.text_wrapper} onMouseEnter={showLine} onMouseOut={hideLine}>
                <span className={classes.header_text}>{props.children}</span>
                <div className={classes.line + ' ' + classes.header_line}/>
            </div>
        )

    }

    const changeTab = () =>  {
        if (props.children === "Show All") {
            dispatch({
                type: "recover"
            })
        } else {
            dispatch({
                type: "replace",
                payload: props.children
            })
        }

        dispatch({
            type: "changeTab",
            payload: props.children
        })
    }

    const {classLine, classText} = createClasses(tab, props.children)

    return (
        <div className={classes.text_wrapper} onMouseEnter={showLine} onMouseOut={hideLine} onClick={changeTab}>
            <span className={classText}>
                {props.children}
            </span>
            <div className={classLine}/>
        </div>
    )
};

export default MenuText;