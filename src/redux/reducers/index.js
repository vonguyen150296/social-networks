import { combineReducers } from "redux";
import posts from "./postsReducer";
import comments from "./commentsReducer";
import likes from "./likesReducer";

const appReducers = combineReducers({
    posts,
    comments,
    likes

});

export default appReducers;