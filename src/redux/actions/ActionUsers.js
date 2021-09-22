import * as actionTypes from "../constants/UsersActionTypes";
import { login } from "./ActionLogin";

// import apiCaller
import callApi from "../../utils/apiCaller";

export const addUsers = (users) => {
    return {
        type: actionTypes.ADD_USERS,
        users
    }
}

export const addUser = (user) => {
    return {
        type: actionTypes.ADD_USER,
        user
    }
}


export const signup = (user) => (dispatch) => {
    callApi("users", "post", user[0]).then(res => {
        if(res){
            var results = [];
            results[0] = res.data;
            dispatch(addUser(res.data));
            dispatch(login(results));
        }
    })
} 

export const fetchUsers = () => (dispatch) =>{
    callApi("/users", "get", null).then(res => {
        if(res) dispatch(addUsers(res.data))
    });
} 