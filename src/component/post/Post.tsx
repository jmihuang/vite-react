import React from "react";
import { Link } from "react-router-dom";
interface Props {
  id: string;
  title: string;
  body: string;
}

function Post(props: Props) {
  const { id, title, body } = props;
  console.log("id", id);
  return (
    <Link to={`/${id}`}>
      <div className="post">
        <p className="title">
          {id}--{title}
        </p>
        <p className="text">{body}</p>
      </div>
    </Link>
  );
}

export default Post;
