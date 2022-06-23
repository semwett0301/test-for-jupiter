import React from 'react';
import classes from "./NavbarMenuText.module.css"
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

const NavbarMenuText = (props) => {
    const dispatch = useDispatch()
    const tab = useSelector(state => state.tabs)

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

export default NavbarMenuText;