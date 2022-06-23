import React from "react";

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