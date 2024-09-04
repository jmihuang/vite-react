import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import NewPost from "./component/post/NewPost";
import "./index.scss";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create-post", element: <NewPost /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
