import React, {useReducer} from 'react';
import Navbar from "./Navbar/Navbar";
import Grid from "./Grid/Grid";
import reducer from "./reducer";
import initial_state from "./initial_state";
import {Context} from "./context";

const Main = () => {
    const [state, dispatch] = useReducer(reducer, initial_state)

    return (
        <Context.Provider value={
            {state: state, dispatch: dispatch}
        }>
            <div>
                <Navbar/>
                <Grid/>
            </div>
        </Context.Provider>
    );
};

export default Main;