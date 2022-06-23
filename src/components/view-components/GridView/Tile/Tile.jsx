import React from 'react';
import TileButton from "./TileButton/TileButton";
import TileText from "./TileText/TileText";
import classes from './Tile.module.css'

const Tile = (props) => {
    let classSelected = ''
    if (props.selected) {
        classSelected += 'selected_tile'
    }

    return (
        <div className={classes.tile_wrapper + ' ' + classSelected}>
            <div className={classes.tile_picture}>
                {props.background}
            </div>
            <TileButton placeholder={props.placeholder}/>
            <TileText>{props.text}</TileText>
        </div>
    );
};

export default Tile;