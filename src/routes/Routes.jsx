import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

export default function PublicRoutes() {
  return (
    <>
      <Header />
      <main className="">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
