import React from "react";
import { Link } from "react-router-dom";
interface Props {
  id: string;
  author: string;
  body: string;
}

function Post(props: Props) {
  const { id, author, body } = props;
  return (
    <Link to={id}>
      <div className="post">
        <p className="author">{author}</p>
        <p className="text">{body}</p>
      </div>
    </Link>
  );
}

export default Post;
