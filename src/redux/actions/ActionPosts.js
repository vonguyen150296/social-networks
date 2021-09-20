import * as actionTypes from "../constants/PostsActionTypes";

export const fetchPosts = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS,
        posts
    }
}