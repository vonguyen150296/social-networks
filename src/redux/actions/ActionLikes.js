import * as actionTypes from "../constants/LikesActionTypes";
import callApi from "../../utils/apiCaller";

export const addLikes = (likes) => {
    return {
        type: actionTypes.ADD_LIKES,
        likes
    }
}

export const addLike = (like) => {
    return {
        type: actionTypes.ADD_LIKE,
        like
    }
}

export const deleteLike = (id) => {
    return {
        type: actionTypes.DELETE_LIKE,
        id
    }
}

export const fetchLikes = () => (dispatch) => {
    callApi("/likes", "get", null).then(res => {
        if(res) dispatch(addLikes(res.data))
    });
}

export const postLike = (like) => (dispatch) => {
    callApi("/likes", "post", like).then(res => {
        if(res) dispatch(addLike(res.data));
    })
}

export const removeLike = (id) => (dispatch) => {
    callApi("/likes/"+id, "DELETE", null).then(res =>{
        if(res) dispatch(deleteLike(id));
    })
}

