import React, { useEffect } from "react";
import { MdPostAdd, MdMessage } from "react-icons/md";
import { Route, Link } from "react-router-dom";
function MainHeader({ onCreatePost }) {
  return (
    <header className="header">
      <ul className="flex flex-row gap-2">
        <li>
          <Link to="/about" className="cursor-pointer text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="cursor-pointer text-blue-500">
            Post
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default MainHeader;
