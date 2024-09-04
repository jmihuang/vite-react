import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";
function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 ? (
        <ul className="posts">
          {posts.map((post, idx) => (
            <li key={idx}>
              <Post author={post.body} body={post.body} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
}

export default PostList;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.post;
}
