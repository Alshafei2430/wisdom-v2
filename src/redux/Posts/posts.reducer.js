import postsTypes from "./posts.types";

const INITIAL_STATE = {
  posts: [],
};

const postsReducer = (state = INITIAL_STATE, action) => {
  console.log("action...", action);
  switch (action.type) {
    case postsTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
