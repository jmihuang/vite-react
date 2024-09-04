import React from "react";
import { MdPostAdd, MdMessage } from "react-icons/md";

function MainHeader({ onCreatePost }) {
  const [pathname, setPathname] = React.useState("/");
  return (
    <header className="header">
      <ul className="flex flex-row gap-2">
        <li>
          <a
            className="cursor-pointer text-blue-500"
            onClick={() => {
              setPathname("/");
              window.history.pushState({}, "Post", "/post");
            }}
          >
            Post
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer"
            onClick={() => {
              setPathname("/about");
              window.history.pushState({}, "About", "/about");
            }}
          >
            About
          </a>
        </li>
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
