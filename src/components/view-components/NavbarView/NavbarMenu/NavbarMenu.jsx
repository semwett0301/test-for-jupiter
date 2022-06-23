import React from 'react';
import NavbarMenuText from "./MenuText/NavbarMenuText";
import classes from "./NavbarMenu.module.css"

const NavbarMenu = (props) => {


    return (
        <div className={classes.menu + ' ' + classes.main_menu}>
            {props.menu.map(
                elem => <NavbarMenuText key={elem.id} isHeader={props.isHeader}>{elem.text}</NavbarMenuText>
            )}
        </div>
    );
};

export default NavbarMenu;