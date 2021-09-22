import { combineReducers } from "redux";
import posts from "./postsReducer";
import comments from "./commentsReducer";
import likes from "./likesReducer";
import users from "./usersReducer";
import login from "./loginReducer";
import status from "./statusReducer";

const appReducers = combineReducers({
    posts,
    comments,
    likes,
    users,
    login,
    status
});

export default appReducers;