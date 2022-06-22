import React, {useContext, useState} from 'react';
import GridView from "../../../view-components/GridView/GridView";
import SOFA from "../../../UI/Images/grid/SOFA";
import Keyboard from "../../../UI/Images/grid/Keyboard";
import WorkMedia from "../../../UI/Images/grid/WorkMedia";
import DDDone from "../../../UI/Images/grid/DDDone";
import Abstract from "../../../UI/Images/grid/Abstract";
import HandP from "../../../UI/Images/grid/HandP";
import Architect from "../../../UI/Images/grid/Architect";
import CalC from "../../../UI/Images/grid/CalC";
import Sport from "../../../UI/Images/grid/Sport";
import {Context} from '../context'

const Grid = () => {
    const [tiles] = useState([
        {key: 1, background: <SOFA/>, placeholder: "Design", text: "SOFA"},
        {key: 2, background: <Keyboard/>, placeholder: "Branding", text: "KeyBoard"},
        {key: 3, background: <WorkMedia/>, placeholder: "Illustration", text: "Work Media"},
        {key: 4, background: <DDDone/>, placeholder: "Motion", text: "DDDone"},
        {key: 5, background: <Abstract/>, placeholder: "Design", text: "Abstract"},
        {key: 6, background: <HandP/>, placeholder: "Branding", text: "HandP"},
        {key: 7, background: <Architect/>, placeholder: "Motion", text: "Architect"},
        {key: 8, background: <CalC/>, placeholder: "Design", text: "CalC"},
        {key: 9, background: <Sport/>, placeholder: "Branding", text: "Sport"}
    ])

    const {state} = useContext(Context)

    return (
        <GridView state={state} tiles={tiles}/>
    );
};

export default Grid;