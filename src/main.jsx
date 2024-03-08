import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {
  AuthProvider,
  BlogProvider,
  ProfileProvider,
  SingleBlogProvider,
} from './providers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
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
)
