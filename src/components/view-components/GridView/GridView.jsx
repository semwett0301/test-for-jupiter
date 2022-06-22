import React from 'react';
import Tile from "./Tile/Tile";
import classes from './GridView.module.css'

const GridView = (props) => {
    const current_topic = props.tiles.filter(
        elem => props.state.includes(elem.placeholder)
    )

    return (
        <div className={classes.main_wrapper}>
            <div className={classes.grid_wrapper}>
                {current_topic.map(
                    elem => <Tile key={elem.key} background={elem.background} placeholder={elem.placeholder}
                                  text={elem.text}/>
                )}
            </div>
        </div>
    );
};

export default GridView;