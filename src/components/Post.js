import { HeartIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { checkPostLikesStart } from "../redux/Posts/posts.actions";

import { formateDate } from "../Utils";
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function Post({ postId, wisdom, wisdomer, wisdomerImage, likes, createdDate }) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const handleLikes = (postId) => {
    dispatch(checkPostLikesStart(postId, currentUser));
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col flex-wrap content-center p-5 bg-gray-800 mt-10 rounded-2xl shadow-xl">
          <img
            className="mx-auto mb-2 rounded-full"
            src={wisdomerImage}
            alt=""
          />
          <div className="flex space-x-2">
            <div className="flex flex-grow flex-col text-gray-400">
              <p className="pt-4 pb-2  text-2xl text-center">“ {wisdom} ”</p>
              <div className="inline-flex  flex-col justify-end">
                <p className="flex-1 text-right font-thin text-xs">
                  {wisdomer}
                </p>
                <p className="flex-1 text-right text-xs text-gray-400">
                  {formateDate(createdDate)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* footer of post */}
        <div
          className="flex p-3 shadow-md text-gray-300 
        rounded-b-2xl
        justify-between items-center"
        >
          <div onClick={() => handleLikes(postId)} className="inputIcon">
            <HeartIcon className="h-4" />
            <p className="text-xs sm:text-base">{likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
