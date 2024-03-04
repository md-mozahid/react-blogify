import { Routes, Route } from "react-router-dom";
import {
  CreateBlog,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegistrationPage,
  ProfilePage,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
