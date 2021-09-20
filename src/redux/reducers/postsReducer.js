import * as Types from "../constants/PostsActionTypes";

var initialstate = [];

const posts = (state = initialstate, actions ) => {
    switch (actions.type) {
        case Types.FETCH_POSTS :
            state = actions.posts;
            return [...state];
        default:
            return [...state];
    }
} 

export default posts;