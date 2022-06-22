import React from 'react';
import classes from './TileText.module.css'

const TileText = (props) => {
    return (
        <div className={classes.tile_text}>
            {props.children}
        </div>
    );
};

export default TileText;