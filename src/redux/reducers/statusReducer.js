import * as Types from "../constants/StatusActionTypes";

var initialstate = {
    like: {},
    comment: {}
};

const status = (state = initialstate, actions) => {
    switch (actions.type) {
        
        case Types.HIDE_COMMENT:
            state.comment[actions.key] = false
            return {...state};
        case Types.SHOW_COMMENT:
            state.comment[actions.key] = true
            return {...state};
        case Types.LIKE:
            state.like[actions.key] = true
            return {...state};
        case Types.NOT_LIKE:
            state.like[actions.key] = false
            return {...state};
        default:
            return {...state};
    }
}

export default status;