import * as Types from "../constants/PostsActionTypes";

var initialstate = [];

const posts = (state = initialstate, actions) => {
    switch (actions.type) {
        case Types.ADD_POSTS:
            if(actions.posts !== undefined ) state = actions.posts;
            return [...state];
        case Types.ADD_POST:
            if(actions.post !== undefined) return [...state, actions.post];
            else return [...state];
        default:
            return [...state];
    }
}

export default posts;