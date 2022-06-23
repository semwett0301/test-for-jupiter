import React from 'react';
import TileButton from "./TileButton/TileButton";
import TileText from "./TileText/TileText";
import classes from './Tile.module.css'
import {useDispatch, useSelector} from "react-redux";
import TileDelButton from "./TileDelButton/TileDelButton";

const Tile = (props) => {
    const dispatch = useDispatch()

    let classSelected = ''
    if (props.select) {
        classSelected = classes.selected_tile
    }

    const onClickTile = () => {
        if (props.select) {
            dispatch({
                type: "unselectTile"
            })
        } else {
            dispatch({
                type: "selectTile",
                payload: props.num
            })
        }
    }

    return (
        <div className={classes.tile_wrapper} onClick={onClickTile}>
            <div className={classSelected}>
                {props.background}
            </div>
            <TileButton placeholder={props.placeholder}/>
            <TileText>{props.text}</TileText>
            <TileDelButton num={props.num} select={props.select}>DEL</TileDelButton>
        </div>
    );
};

export default Tile;