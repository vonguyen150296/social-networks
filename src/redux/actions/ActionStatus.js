import * as actionTypes from "../constants//StatusActionTypes"

export const showComment = (key) => {
    return {
        type: actionTypes.SHOW_COMMENT,
        key
    }
}

export const hideComment = (key) => {
    return {
        type: actionTypes.HIDE_COMMENT,
        key
    }
}

export const addLike = (key) => {
    return {
        type: actionTypes.LIKE,
        key
    }
}

export const notLike = (key) => {
    return {
        type: actionTypes.NOT_LIKE,
        key
    }
}