import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import {
  AuthProvider,
  BlogProvider,
  ProfileProvider,
  SingleBlogProvider,
} from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <ProfileProvider>
        <BlogProvider>
          <SingleBlogProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </SingleBlogProvider>
        </BlogProvider>
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>
);
