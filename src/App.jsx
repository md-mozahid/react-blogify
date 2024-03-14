import { Route, Routes } from 'react-router-dom'
import {
  CreateBlog,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegistrationPage,
  SingleBlog,
  UpdateBlog,
} from './pages'
import PrivateRoutes from './routes/PrivateRoutes'
import PublicRoutes from './routes/Routes'

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/update-blog" element={<UpdateBlog />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/single-blog" element={<SingleBlog />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
