import React, { useState } from "react";
interface PostData {
  body: string;
  author: string;
}
interface Props {
  onCancel: () => void;
  onSubmit: (arg0: PostData) => void;
}
function NewPost(props: Props) {
  const { onCancel, onSubmit } = props;
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
    onCancel();
    onSubmit(postData);
  };
  return (
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
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
