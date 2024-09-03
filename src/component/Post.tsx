import React from "react";

interface Props {
  author: string;
  body: string;
}

function Post(props: Props) {
  const { author, body } = props;
  return (
    <>
      <div className="post">
        <p className="author">{author}</p>
        <p className="text">{body}</p>
      </div>
    </>
  );
}

export default Post;
