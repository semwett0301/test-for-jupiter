import React from 'react';
import NavbarView from "../../view-components/NavbarView/NavbarView";
import {defaultTabs} from "../../../store/utils/defaultTabs";

const Navbar = () => {
    const menu = defaultTabs.map(
        elem => {
            return {
                id: elem.id,
                text: elem.text
            }
        }
    )
    return (
        <div>
            <NavbarView menu={menu}/>
        </div>
    );
};

export default Navbar;