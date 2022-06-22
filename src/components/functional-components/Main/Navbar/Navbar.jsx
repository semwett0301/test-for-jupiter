import React from 'react';
import {useState} from "react";
import NavbarView from "../../../view-components/NavbarView/NavbarView";
import initial_state from "../initial_state";

const Navbar = () => {
    let id = 0

    const menu = initial_state.map(
        elem => {
            id++;
            return {id: id, text: elem}
        }
    )
    return (
        <div>
            <NavbarView menu={menu}/>
        </div>
    );
};

export default Navbar;