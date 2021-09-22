import * as Types from "../constants/PostsActionTypes";

var initialstate = [];

const posts = (state = initialstate, actions) => {
    switch (actions.type) {
        case Types.ADD_POSTS:
            state = actions.posts;
            return [...state];
        case Types.ADD_POST:
            return [...state, actions.post];
        default:
            return [...state];
    }
}

export default posts;