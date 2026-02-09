import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function LoadingOverlay({ show }) {
  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-white/80 backdrop-blur">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm ring-1 ring-inset ring-slate-100">
        <div
          className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-red-700"
          aria-hidden="true"
        />
        <div className="text-sm font-semibold text-slate-700">Memuat katalog produk…</div>
      </div>
    </div>
  )
}

export default function MainLayout({ children }) {
  const location = useLocation()
  const [isLoadingProduk, setIsLoadingProduk] = useState(false)

  useEffect(() => {
    if (location.pathname !== '/produk') {
      setIsLoadingProduk(false)
      return
    }

    setIsLoadingProduk(true)
    const t = setTimeout(() => setIsLoadingProduk(false), 1000)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <LoadingOverlay show={isLoadingProduk} />
      <main>{children ?? <Outlet />}</main>
      <Footer />
    </div>
  )
}
