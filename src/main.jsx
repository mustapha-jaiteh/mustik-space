import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Technology from "./pages/Technology.jsx";
import Destination from "./pages/Destination.jsx";
import Crew from "./pages/Crew.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/destinations/:id",
        element: <Destination />,
      },
      // {
      //   path: "/destinations",
      //   element: <DestinationDetails />,
      // },
      {
        path: "/crew/:id",
        element: <Crew />,
      },
      // {
      //   path: "/crew/:id",
      //   element: <CrewDetails />,
      // },
      {
        path: "/technologies/:id",
        element: <Technology />,
      },
      // {
      //   path: "/technologies/:id",
      //   element: <TechnologyDetails />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
