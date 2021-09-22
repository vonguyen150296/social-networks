import * as actionTypes from "../constants/UsersActionTypes";

export const login = (user) => {
    return {
        type: actionTypes.LOGIN,
        user
    }
}


export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
} 