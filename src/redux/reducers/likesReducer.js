import * as Types from "../constants/LikesActionTypes";
import findindex from "../../utils/findIndex";

var initialstate = [];

const likes = (state = initialstate, actions) => {
    switch (actions.type) {
        case Types.ADD_LIKES:
            state = actions.likes;
            return [...state];
        case Types.ADD_LIKE:
            return [...state, actions.like];
        case Types.DELETE_LIKE:
            var index = findindex(state, actions.id);
            state.splice(index, 1);
            return [...state];
        default:
            return [...state];
    }
}

export default likes;