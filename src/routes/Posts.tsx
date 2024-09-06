import "../App.scss";
import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PostList from "../component/post/PostList";
import { useLoaderData } from "react-router-dom";
import { getData } from "../firebase";

import React from "react";
interface IPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}
function Posts() {
  const posts: IPost[] = useLoaderData() as IPost[];

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
  // Get a reference to the collection

  getData(1);
}
