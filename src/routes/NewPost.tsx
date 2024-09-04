import React, { useState } from "react";
import Modal from "../component/post/Modal";
import { Link } from "react-router-dom";
interface PostData {
  body: string;
  author: string;
}
interface Props {
  onSubmit: (arg0: PostData) => void;
}
function NewPost(props: Props) {
  const { onSubmit } = props;
  const [enteredBody, setEnteredBody] = useState<string>("");
  const [enteredAuthor, setEnteredAuthor] = useState<string>("");
  const onBodyChange = (event) => {
    setEnteredBody(event.target.value);
  };
  const onAuthorChange = (event) => {
    setEnteredAuthor(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onSubmit(postData);
  };
  return (
    <Modal>
      <form className="form" onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={onBodyChange} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={onAuthorChange} />
        </p>
        <p className="actions">
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
