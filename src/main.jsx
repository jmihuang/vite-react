import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./routes/NewPost";
import About from "./component/About";
import RootLayout from "./routes/RootLayout";
import Posts from "./routes/Posts";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        children: [{ path: "/create-post", element: <NewPost /> }],
      },
      { path: "/about", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
