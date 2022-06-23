import {combineReducers, createStore} from "redux";
import {tileReducer} from "./reducers/tileReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {tabsReducer} from "./reducers/tabsReducer";
import {selectedTileReducer} from "./reducers/selectedTileReducer";

const rootReducer = combineReducers({
    tile: tileReducer,
    tabs: tabsReducer,
    select: selectedTileReducer
})

export const store = createStore(rootReducer, composeWithDevTools())