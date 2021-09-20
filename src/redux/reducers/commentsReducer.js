import * as Types from "../constants/CommentsActionTypes";

var initialstate = [];

const comments = (state = initialstate, actions ) => {
    switch (actions.type) {
        case Types.FETCH_COMMENTS :
            state = actions.comments;
            return [...state];
        default:
            return [...state];
    }
} 

export default comments;