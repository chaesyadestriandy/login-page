import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import App from "./App";
import "./index.css"; // Import Tailwind CSS
import RequestResetPassPages from "./pages/RequestResetPassPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Halaman utama
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/request-password-reset",
    element: <RequestResetPassPages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
