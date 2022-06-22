import React from 'react';
import MenuText from "./MenuText/MenuText";
import classes from "./Menu.module.css"

const Menu = (props) => {
    if (props.isHeader) {
        return (
            <div className={classes.menu + ' ' + classes.header_menu}>
                {props.menu.map(
                    elem => <MenuText key={elem.id} isHeader={props.isHeader}>{elem.text}</MenuText>
                )}
            </div>
        );
    }

    return (
        <div className={classes.menu + ' ' + classes.main_menu}>
            {props.menu.map(
                elem => <MenuText key={elem.id} isHeader={props.isHeader}>{elem.text}</MenuText>
            )}
        </div>
    );
};

export default Menu;