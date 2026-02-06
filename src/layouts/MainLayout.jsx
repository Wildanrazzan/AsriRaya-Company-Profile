import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>{children ?? <Outlet />}</main>
      <Footer />
    </div>
  )
}
