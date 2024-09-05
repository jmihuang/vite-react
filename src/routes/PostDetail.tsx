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
      <main className="details bg-[#9c7eee]">
        <p className="title">{post.title}</p>
        <p className="text">{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const resData = response.json();
  return resData;
}
