import * as actionTypes from "../constants/PostsActionTypes";

import callApi from "../../utils/apiCaller";

export const addPosts = (posts) => {
    return {
        type: actionTypes.ADD_POSTS,
        posts
    }
}

export const addPost = (post) => {
    return {
        type: actionTypes.ADD_POST,
        post
    }
}

export const fetchPosts = () => (dispatch) => {
    callApi("/posts?sortBy=createdAt&order=desc", "get", null).then(res => {
        if(res) dispatch(addPosts(res.data))
    });
}

export const createPost = (post) => (dispatch) => {
    callApi("/posts", "post", post).then(res => {
        if(res) dispatch(addPost(res.data));
    })
}