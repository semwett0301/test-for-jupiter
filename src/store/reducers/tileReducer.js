import React from "react";
import {defaultTiles} from "../utils/defaultTiles";


export const tileReducer = (state = defaultTiles, action) => {
    switch (action.type) {
        case "replace":
            return {
                ...state,
                tiles: state.allTiles.filter(
                    elem => elem.placeholder === action.payload
                )
            }

        case "recover":
            return {
                ...state,
                tiles: state.allTiles
            }

        case "raise":
            let extraTiles = []
            defaultTiles.allTiles.forEach(
                elem => {
                    let newElem = Object.assign({}, elem)
                    newElem.key += state.allTiles.length
                    extraTiles.push(newElem)
                }
            )

            return {
                ...state,
                tiles: state.allTiles.concat(extraTiles),
                allTiles: state.allTiles.concat(extraTiles)
            }

        default:
            return state
    }
}