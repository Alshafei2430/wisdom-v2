import { takeLatest, put, all, call } from "redux-saga/effects";
import { auth, serverTimesstamp } from "../../firebase/utils";
import { fetchPostsStart, setPosts } from "./posts.actions";
import {
  handleAddPost,
  handleCheckPostLikes,
  handleFetchPosts,
} from "./posts.helpers";
import postsTypes from "./posts.types";

export function* addPost({ payload }) {
  try {
    const createdDate = serverTimesstamp();
    yield handleAddPost({
      ...payload,
      postAuthor: auth.currentUser.uid,
      createdDate,
    });
    yield put(fetchPostsStart());
  } catch (err) {
    console.log(err);
  }
}

export function* onAddPostStart() {
  yield takeLatest(postsTypes.ADD_NEW_POST_START, addPost);
}

export function* checkPostLikes({ payload }) {
  const postData = yield handleCheckPostLikes(payload);
}

export function* onCheckPostLikesStart() {
  yield takeLatest(postsTypes.CHECK_POST_LIKES_START, checkPostLikes);
}

export function* fetchPosts({ payload }) {
  try {
    const posts = yield handleFetchPosts(payload);
    yield put(setPosts(posts));
  } catch (err) {}
}

export function* onFetchPostsStart() {
  yield takeLatest(postsTypes.FETCH_POSTS_START, fetchPosts);
}

export default function* postsSagas() {
  yield all([
    call(onFetchPostsStart),
    call(onAddPostStart),
    call(onCheckPostLikesStart),
  ]);
}
