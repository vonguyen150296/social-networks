import * as actionTypes from "../constants/CommentsActionTypes";

export const fetchComments = (comments) => {
    return {
        type: actionTypes.FETCH_COMMENTS,
        comments
    }
}