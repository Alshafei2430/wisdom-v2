import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostStart } from "../redux/Posts/posts.actions";
import { googleSignInStart } from "../redux/User/user.actions";
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userData: user.userData,
});

function Inputbox() {
  const dispatch = useDispatch();
  const { currentUser, userData } = useSelector(mapState);
  const { displayName, email, photoURL } = userData;

  const inputRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    if (!currentUser) {
      dispatch(googleSignInStart());
      return;
    }
    dispatch(
      addPostStart({
        wisdom: inputRef.current.value,
        wisdomer: displayName,
        wisdomerImage: photoURL,
        email: email,
      })
    );

    inputRef.current.value = "";
  };
  return (
    <div>
      <div className="flex border-b mt-10  border-gray-800 space-x-4 p-4 items-center px-auto">
        {photoURL && (
          <img
            className="rounded-full"
            src={photoURL}
            width={40}
            height={40}
            alt=""
          />
        )}
        <form
          className="
                        flex
                        flex-col
                        flex-grow
                        p-2
                        mt-10
                        space-y-2
                        "
        >
          <div className="">
            <textarea
              ref={inputRef}
              type="text"
              className="
            p-3
            resize-none
            overflow-auto
            focus:outline-none
            rounded-md flex-grow
            border-opacity-0"
              placeholder=" Write your today's wisdom"
            />
            <button
              className="
            inputIcon
            "
              type="submit"
              onClick={sendPost}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Inputbox;
