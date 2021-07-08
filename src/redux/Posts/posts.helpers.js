import { firestore } from "../../firebase/utils";

export const handleAddPost = (post) => {
  return new Promise((resolve, reject) => {
    let postRef = firestore.collection("posts").doc();
    postRef
      .set({ ...post, postRef })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleCheckPostLikes = (postId) => {
  console.log("ggggg");
  return new Promise((resolve, reject) => {
    let postRef = firestore.collection("posts").doc(postId);
    postRef
      .get()
      .then((post) => {
        if (post.exists) {
          const postData = post.data();
          console.log("PPP", postData);
          resolve(postData);
        } else {
          console.log("Post not found");
          reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export const handleFetchPosts = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("posts")
      .orderBy("createdDate", "desc")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        });

        resolve(posts);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
