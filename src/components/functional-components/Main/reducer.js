import initial_state from "./initial_state";


export default function (state, action) {
    switch (action.type) {
        case "replace":
            return [
                action.value
            ]
        case "recover":
            return initial_state;
        default:
            return state;
    }
}