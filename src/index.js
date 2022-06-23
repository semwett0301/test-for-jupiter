import React from 'react';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {render} from "react-dom";

const root = document.getElementById("root");
render(<React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
</React.StrictMode>, root);
