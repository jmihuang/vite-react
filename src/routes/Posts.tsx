import "../App.scss";
import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PostList from "../component/post/PostList";
import { useLoaderData } from "react-router-dom";
import React from "react";
function Posts() {
  const posts: any = useLoaderData() || {
    id: "3898888",
    author: "Jamie",
    body: "keep going",
  };

  return (
    <main className="post-list">
      <p className="flex">
        <Link to="/create-post" className="button ml-auto">
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
      <PostList posts={posts} />
      <Outlet />
    </main>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.post;
}
