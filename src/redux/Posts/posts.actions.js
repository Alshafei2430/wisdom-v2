import postsTypes from "./posts.types";

export const addPostStart = (postData) => {
  return {
    type: postsTypes.ADD_NEW_POST_START,
    payload: postData,
  };
};

export const fetchPostsStart = () => ({
  type: postsTypes.FETCH_POSTS_START,
});

export const setPosts = (posts) => ({
  type: postsTypes.SET_POSTS,
  payload: posts,
});

export const checkPostLikesStart = (postId) => {
  console.log("postId", postId);
  return {
    type: postsTypes.CHECK_POST_LIKES_START,
    payload: postId,
  };
};
