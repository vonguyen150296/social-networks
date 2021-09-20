import * as Types from "../constants/LikesActionTypes";

var initialstate = [];

const likes = (state = initialstate, actions ) => {
    switch (actions.type) {
        case Types.FETCH_LIKES :
            state = actions.likes;
            return [...state];
        default:
            return [...state];
    }
} 

export default likes;