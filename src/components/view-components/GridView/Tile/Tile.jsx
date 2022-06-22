import React, {useState} from 'react';
import TileButton from "./TileButton/TileButton";
import TileText from "./TileText/TileText";
import classes from './Tile.module.css'

const Tile = (props) => {
    return (
        <div className={classes.tile_wrapper}>
            <div className={classes.tile_picture}>
                {props.background}
            </div>
            <TileButton placeholder={props.placeholder}/>
            <TileText>{props.text}</TileText>
        </div>
    );
};

export default Tile;