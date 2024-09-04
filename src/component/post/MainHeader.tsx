import React from "react";
import { MdPostAdd, MdMessage } from "react-icons/md";

function MainHeader({ onCreatePost }) {
  return (
    <header className="header">
      <ul className="flex-row">
        <li>Post</li>
        <li>About</li>
      </ul>
      <p>
        <button className="button" onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
