import React from 'react';
import classes from './NavbarView.module.css'
import Menu from "../Menu/Menu";

const NavbarView = (props) => {
    return (
        <div className={classes.navbar_wrapper}>
            <Menu isHeader={false} menu={props.menu}/>
        </div>
    );
};

export default NavbarView;