import React, { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import MainHeader from "./MainHeader";

function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(true);
  const [posts, setPosts] = useState<any[]>([]);
  const showModalHandler = () => {
    setModalIsVisible(true);
  };
  const hideModalHandler = () => {
    setModalIsVisible(false);
  };
  const isPosting = () => {
    showModalHandler();
  };
  const onStopPosting = () => {
    hideModalHandler();
  };
  const addPostHandler = (postData) => {
    setPosts((existingData) => [postData, ...existingData]);
    console.log(posts);
  };
  return (
    <>
      <MainHeader onCreatePost={isPosting} />
      <ul className="posts">
        {posts.map((post) => (
          <li>
            <Post author={post.body} body={post.body} />
          </li>
        ))}
      </ul>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost onCancel={onStopPosting} onSubmit={addPostHandler} />
        </Modal>
      )}
    </>
  );
}

export default PostList;
