import {combineReducers, createStore} from "redux";
import {tileReducer} from "./reducers/tileReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {tabsReducer} from "./reducers/tabsReducer";

const rootReducer = combineReducers({
    tile: tileReducer,
    tabs: tabsReducer
})

export const store = createStore(rootReducer, composeWithDevTools())