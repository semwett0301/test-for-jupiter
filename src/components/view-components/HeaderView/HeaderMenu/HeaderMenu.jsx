import React from 'react';
import HeaderMenuText from "./HeaderMenuText/HeaderMenuText";
import classes from "./HeaderMenu.module.css"

const NavbarMenu = (props) => {
        return (
            <div className={classes.menu + ' ' + classes.header_menu}>
                {props.menu.map(
                    elem => <HeaderMenuText key={elem.id} isHeader={props.isHeader}>{elem.text}</HeaderMenuText>
                )}
            </div>
        );
};

export default NavbarMenu;