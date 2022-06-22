import React, {useContext} from 'react';
import classes from "./MenuText.module.css"
import {Context} from "../../../functional-components/Main/context";

function showLine(e) {
    e.target.parentNode.lastChild.style.display = "block"
}
function hideLine(e) {
    e.target.parentNode.lastChild.style.display = "none"

}

function createClasses(state, value) {
    let classLine;
    let classText;
    if (state.includes(value) && (state.length === 1
        || value === "Show All")){
        classLine = classes.line + ' ' + classes.main_line + ' ' + classes.chose_line;
        classText = classes.main_text + ' ' + classes.chose_main_text
    } else {
        classLine = classes.line + ' ' + classes.main_line;
        classText = classes.main_text
    }

    return {classLine, classText};
}

const MenuText = (props) => {
    const reducer = useContext(Context)

    if (props.isHeader) {
        return (
            <div className={classes.text_wrapper} onMouseEnter={showLine} onMouseOut={hideLine}>
                <span className={classes.header_text}>{props.children}</span>
                <div className={classes.line + ' ' + classes.header_line}/>
            </div>
        )

    }

    const changeTopic = () =>  {
        if (props.children === "Show All") {
            reducer.dispatch({
                type: "recover"
            })
        } else {
            reducer.dispatch({
                type: "replace",
                value: props.children
            })
        }
    }

    const {classLine, classText} = createClasses(reducer.state, props.children)



    return (
        <div className={classes.text_wrapper} onMouseEnter={showLine} onMouseOut={hideLine} onClick={changeTopic}>
            <span className={classText}>
                {props.children}
            </span>
            <div className={classLine}/>
        </div>
    )
};

export default MenuText;