import * as Types from "../constants/UsersActionTypes";

var initialstate = [];

const login = (state = initialstate, actions ) => {
    switch (actions.type) {
        case Types.LOGIN :
            state = actions.user;
            return [...state];
        case Types.LOGOUT : 
            return [];
        default:
            return state;
    }
}

export default login;

