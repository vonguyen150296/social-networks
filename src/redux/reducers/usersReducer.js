import * as Types from "../constants/UsersActionTypes";

var initialstate = [];

const users = (state = initialstate, actions ) => {
    switch (actions.type) {
        case Types.ADD_USERS :
            if(actions.users !== undefined) state = actions.users;
            return [...state];
        case Types.ADD_USER :
            if(actions.user !== undefined) return [...state,actions.user];
            else return [...state];
        default:
            return [...state];
    }
}

export default users;

