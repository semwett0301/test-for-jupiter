import React from 'react';
import Tile from "./Tile/Tile";
import classes from './GridView.module.css'
import {useDispatch, useSelector} from "react-redux";

const GridView = (props) => {
    const select = useSelector(state => state.select)

    return (
        <div className={classes.main_wrapper}>
            <div className={classes.grid_wrapper}>
                {props.tiles.map(
                    elem => <Tile num={elem.key} select={select === elem.key} key={elem.key} background={elem.background} placeholder={elem.placeholder}
                                  text={elem.text}/>
                )}
            </div>
        </div>
    );
};

export default GridView;