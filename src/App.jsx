import { Route, Routes } from 'react-router-dom'
import {
  CreateBlog,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegistrationPage,
} from './pages'
import PrivateRoutes from './routes/PrivateRoutes'

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
