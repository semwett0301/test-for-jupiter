import React, {useReducer} from 'react';
import Navbar from "./Navbar/Navbar";
import Grid from "./Grid/Grid";
import Loader from "./Loader/Loader";


const Main = () => {

    return (
            <div>
                <Navbar/>
                <Grid/>
                <Loader/>
            </div>
    );
};

export default Main;