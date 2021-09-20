import * as actionTypes from "../constants/LikesActionTypes";

export const fetchLikes = (likes) => {
    return {
        type: actionTypes.FETCH_LIKES,
        likes
    }
}