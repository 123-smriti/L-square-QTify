import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Homepage from "./pages/Homepage/homepage";
import AlbumPage from "./pages/Albumpage/albumpage";
import reportWebVitals from "./helpers/reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "album/:albumId", element: <AlbumPage /> },
      { path: "*", element: <div style={{ padding: "2rem", color: "white" }}>Page not found</div> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>);
reportWebVitals();
