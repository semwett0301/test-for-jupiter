import React from 'react';
import Tile from "./Tile/Tile";
import classes from './GridView.module.css'

const GridView = (props) => {
    return (
        <div className={classes.main_wrapper}>
            <div className={classes.grid_wrapper}>
                {props.tiles.map(
                    elem => <Tile key={elem.key} background={elem.background} placeholder={elem.placeholder}
                                  text={elem.text}/>
                )}
            </div>
        </div>
    );
};

export default GridView;