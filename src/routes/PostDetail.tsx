import { useLoaderData, Link } from "react-router-dom";

import React from "react";
import Modal from "../component/post/Modal";

function PostDetails() {
  const post: any = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className="details">
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className="btn">
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className="details">
        <p className="author">{post.author}</p>
        <p className="text">{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader(params) {
  const response = await fetch(`http://localhost:8080/posts/${params.postId}`);
  const resData = response.json();
  return resData;
}
