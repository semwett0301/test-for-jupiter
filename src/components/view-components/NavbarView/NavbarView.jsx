import React from 'react';
import classes from './NavbarView.module.css'
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarSelect from "./NavbarSelect/NavbarSelect";

const NavbarView = (props) => {
    return (
        <div className={classes.navbar_wrapper}>
            <NavbarMenu menu={props.menu}/>
            <NavbarSelect menu={props.menu}/>
        </div>
    );
};

export default NavbarView;