import React from 'react';
import Logo from "../../../UI/Images/header/Logo";
import classes from "./HeaderLogo.module.css"

const HeaderLogo = (props) => {
    return (
        <div className={classes.logo_wrapper}>
            <div className={classes.logo_img}>
                <Logo width={props.width} height={props.height}/>
            </div>
            <span className={classes.logo_text}>{props.children}</span>
        </div>
    );
};

export default HeaderLogo;