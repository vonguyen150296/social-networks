import * as actionTypes from "../constants/CommentsActionTypes";

// import apiCaller
import callApi from "../../utils/apiCaller";

export const addComments = (comments) => {
    return {
        type: actionTypes.ADD_COMMENTS,
        comments
    }
}

export const deleteComment = (id) => {
    return {
        type: actionTypes.DELETE_COMMENT,
        id
    }
}

export const addComment = (comment) => {
    return {
        type: actionTypes.ADD_COMMENT,
        comment
    }
}

export const fetchComments = () => (dispatch) => {
    callApi("/comments?sortBy=createdAt&order=desc", "get", null).then(res => {
        if(res) dispatch(addComments(res.data))
    });
}

export const postComment = (comment) => (dispatch) => {
    callApi("/comments", "post", comment).then(res => {
        if(res) dispatch(addComment(res.data));
    })
}

export const removeComment = (id) => (dispatch) => {
    callApi("/comments/"+id, "delete", null).then(res => {
        dispatch(deleteComment(id));
    })
}