import React from "react";
import ReactDOM from "react-dom/client";
import Posts from "./routes/Posts";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayaout from "./routes/RootLayaout";
import NewPost from "./routes/NewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayaout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        children: [{ path: "/create-post", element: <NewPost /> }],
      }, //Dominio Main
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
