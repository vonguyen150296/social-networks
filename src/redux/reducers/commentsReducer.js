import * as Types from "../constants/CommentsActionTypes";
import findindex from "../../utils/findIndex";

var initialstate = [];

const comments = (state = initialstate, actions ) => {
    switch (actions.type) {
        case Types.ADD_COMMENTS :
            if(actions.comments !== undefined) state = actions.comments;
            return [...state];
        case Types.ADD_COMMENT:
            if(actions.comment !== undefined) return [...state, actions.comment];
            else return {...state};
        case Types.DELETE_COMMENT:
            var index = findindex(state,actions.id);
            state.splice(index, 1);
            return [...state];
        default:
            return [...state];
    }
} 

export default comments;