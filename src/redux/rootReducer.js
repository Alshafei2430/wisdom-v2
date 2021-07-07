import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postsReducer from "./Posts/posts.reducer";
import userReducer from "./User/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  postsData: postsReducer,
});

const configStrorage = {
  key: "root",
  storage,
};
export default persistReducer(configStrorage, rootReducer);
