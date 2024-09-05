import React, { useState } from "react";
import Modal from "../component/post/Modal";
import { Link, Form, redirect } from "react-router-dom";
interface PostData {
  body: string;
  title: string;
}
function NewPost() {
  return (
    <Modal>
      <Form method="post" className="form">
        <p>
          <label htmlFor="body">User ID</label>
          <input name="userId" required />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name="title" required />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea name="body" required rows={3} />
        </p>

        <p className="actions">
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); //{body:'...',title:'...'}
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  return redirect("/");
}
