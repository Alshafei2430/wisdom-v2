import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsStart } from "../redux/Posts/posts.actions";
import Post from "./Post";

const mapState = ({ user, postsData }) => ({
  currentUser: user.currentUser,
  posts: postsData.posts,
});

function Posts() {
  const dispatch = useDispatch();
  const { currentUser, posts } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchPostsStart());
  }, [currentUser, dispatch]);

  return (
    <div className="">
      {posts?.map((post) => {
        const postId = post.id;
        const { wisdom, wisdomer, wisdomerImage, likes, createdDate } =
          post.data;

        return (
          <Post
            key={postId}
            postId={postId}
            wisdom={wisdom}
            wisdomer={wisdomer}
            wisdomerImage={wisdomerImage}
            likes={likes}
            createdDate={createdDate}
          />
        );
      })}
    </div>
  );
}

export default Posts;
