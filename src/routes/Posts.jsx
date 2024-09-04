import "../App.scss";
import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PostList from "../component/post/PostList";
function Posts() {
  return (
    <main className="post-list">
      <p className="flex">
        <Link to="/create-post" className="button ml-auto">
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
      <PostList />
      <Outlet />
    </main>
  );
}

export default Posts;
