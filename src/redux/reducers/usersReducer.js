import * as Types from "../constants/UsersActionTypes";

var initialstate = [];

const users = (state = initialstate, actions ) => {
    switch (actions.type) {
        case Types.ADD_USERS :
            state = actions.users;
            return [...state];
        case Types.ADD_USER :
            state = actions.user;
            return [...state];
        default:
            return [...state];
    }
}

export default users;

