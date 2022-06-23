import React from 'react';
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderButton from "./HeaderButton/HeaderButton";
import classes from './HeaderView.module.css'
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const HeaderView = (props) => {
    return (
        <header className={classes.header_view}>
            <HeaderLogo width={props.logoWidth} height={props.logoHeight}>{props.logoName}</HeaderLogo>
            <HeaderMenu menu={props.menu}/>
            <HeaderButton>{props.button}</HeaderButton>
        </header>
    );
};

export default HeaderView;