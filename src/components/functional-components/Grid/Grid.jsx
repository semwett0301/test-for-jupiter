import React from 'react';
import GridView from "../../view-components/GridView/GridView";
import {useSelector} from "react-redux";

const Grid = () => {
    const tiles = useSelector(state => state.tile.tiles)
    return (
        <GridView tiles={tiles}/>
    );
};

export default Grid;