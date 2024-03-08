import { Route, Routes } from 'react-router-dom'
import {
  CreateBlog,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegistrationPage,
  SingleBlog,
} from './pages'
import PublicRoutes from './routes/Routes'

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/single-blog" element={<SingleBlog />} />
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
