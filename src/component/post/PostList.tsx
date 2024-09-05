import React, { useEffect, useState } from "react";
import Post from "./Post";
function PostList({ posts }) {
  return (
    <>
      {posts.length > 0 ? (
        <ul className="posts">
          {posts.map((post, idx) => (
            <li key={idx}>
              <Post id={post.id} author={post.body} body={post.body} />
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
