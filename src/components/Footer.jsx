import BrandMark from './BrandMark.jsx'
import Container from './Container.jsx'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <BrandMark />
            <div>
              <div className="text-sm font-extrabold tracking-tight text-slate-900">
                ASRI RAYA
              </div>
              <div className="text-xs text-slate-500">Material bangunan lengkap & siap kirim.</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href="/#about" className="text-slate-600 hover:text-red-600">Tentang</a>
            <a href="/#services" className="text-slate-600 hover:text-red-600">Layanan</a>
            <a href="/#projects" className="text-slate-600 hover:text-red-600">Proyek</a>
            <a href="/#faq" className="text-slate-600 hover:text-red-600">FAQ</a>
            <a href="/#contact" className="text-slate-600 hover:text-red-600">Kontak</a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} ASRI RAYA. All rights reserved.</div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-red-600">Privacy</Link>
            <Link to="/terms" className="hover:text-red-600">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
