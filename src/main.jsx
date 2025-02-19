import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayaout from "./routes/RootLayaout";
import NewPost from "./Components/Newpost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayaout />,
    children: [
      { path: "/", element: <App /> }, //Dominio Main
      { path: "/create-post", element: <NewPost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
