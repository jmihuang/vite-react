import React, { useEffect, useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import MainHeader from "./MainHeader";

function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(true);
  const [posts, setPosts] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
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
    console.log("onStopPosting");
    hideModalHandler();
  };
  const addPostHandler = (postData) => {
    setPosts((existingData) => [postData, ...existingData]);
  };

  // useEffect(() => {
  //   //load from Data
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     const response = await fetch("http://localhost:8080/posts");
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }
  //   fetchPosts();
  // }, []);

  return (
    <>
      <MainHeader onCreatePost={isPosting} />
      {!isFetching && posts.length > 0 && (
        <ul className="posts">
          {posts.map((post, idx) => (
            <li key={idx}>
              <Post author={post.body} body={post.body} />
            </li>
          ))}
        </ul>
      )}

      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts here!</h2>
        </div>
      )}

      {isFetching && <p>Loading....</p>}

      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost onCancel={onStopPosting} onSubmit={addPostHandler} />
        </Modal>
      )}
    </>
  );
}

export default PostList;
