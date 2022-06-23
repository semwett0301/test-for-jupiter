export const selectedTileReducer = (state = -1, action) => {
    switch (action.type) {
        case "unselectTile":
            return -1
        case "selectTile":
            return action.payload
        default:
            return state
    }
}