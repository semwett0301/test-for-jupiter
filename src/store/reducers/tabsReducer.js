import React from "react";

const CHANGE_TAB = "changeTab"
const RETURN_TO_ALL = "returnToAll"


export const tabsReducer = (state = "Show All", action) => {
    switch (action.type) {
        case "changeTab":
            return action.payload
        case "returnToAll":
            return "Show All"
        default:
            return state
    }
}

export const changeTab = (payload) => ({type: CHANGE_TAB, payload})
export const returnToAll = (payload) => ({type: RETURN_TO_ALL, payload})