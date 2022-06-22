import React, {useState} from 'react';
import HeaderView from "../../view-components/HeaderView/HeaderView";

const Header = () => {
    const [menu] = useState([
        {text: "About", id: 1},
        {text: "Services", id: 2},
        {text: "Pricing", id: 3},
        {text: "Blog", id: 4}
    ])

    const logoWidth = 45.65;
    const logoHeight = 43.42;

    const button = "CONTACT";


    return (
        <HeaderView menu={menu} logoWidth={logoWidth} logoHeight={logoHeight} logoName={"Agency"} button={button}/>
    );
};

export default Header;