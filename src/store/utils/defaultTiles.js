import SOFA from "../../components/UI/Images/grid/SOFA";
import Keyboard from "../../components/UI/Images/grid/Keyboard";
import WorkMedia from "../../components/UI/Images/grid/WorkMedia";
import DDDone from "../../components/UI/Images/grid/DDDone";
import Abstract from "../../components/UI/Images/grid/Abstract";
import HandP from "../../components/UI/Images/grid/HandP";
import Architect from "../../components/UI/Images/grid/Architect";
import CalC from "../../components/UI/Images/grid/CalC";
import Sport from "../../components/UI/Images/grid/Sport";
import React from "react";

const initValue = [
        {key: 1, background: <SOFA/>, placeholder: "Design", text: "SOFA"},
        {key: 2, background: <Keyboard/>, placeholder: "Branding", text: "KeyBoard"},
        {key: 3, background: <WorkMedia/>, placeholder: "Illustration", text: "Work Media"},
        {key: 4, background: <DDDone/>, placeholder: "Motion", text: "DDDone"},
        {key: 5, background: <Abstract/>, placeholder: "Design", text: "Abstract"},
        {key: 6, background: <HandP/>, placeholder: "Branding", text: "HandP"},
        {key: 7, background: <Architect/>, placeholder: "Motion", text: "Architect"},
        {key: 8, background: <CalC/>, placeholder: "Design", text: "CalC"},
        {key: 9, background: <Sport/>, placeholder: "Branding", text: "Sport"}
    ]

export const defaultTiles = {
    allTiles: initValue,
    tiles: initValue
}