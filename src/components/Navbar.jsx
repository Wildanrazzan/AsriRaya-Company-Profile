import { useEffect, useMemo, useState } from 'react'
import BrandMark from './BrandMark.jsx'
import Container from './Container.jsx'
import ButtonPrimary from './buttonprim.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function scrollToHref(href) {
    if (!href || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const links = useMemo(
    () => [
      { href: '#about', label: 'Tentang' },
      { href: '#services', label: 'Layanan' },
      { href: '#projects', label: 'Proyek' },
      { href: '#testimonials', label: 'Testimoni' },
      { href: '#faq', label: 'FAQ' },
      { href: '#location', label: 'Lokasi' },
      { href: '#contact', label: 'Kontak' },
    ],
    [],
  )

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault()
              scrollToHref('#')
            }}
          >
            <BrandMark />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight text-slate-900">
                ASRI RAYA
              </div>
              <div className="text-xs text-slate-500">Toko Bangunan</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-red-600"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHref(l.href)
                }}
              >
                {l.label}
              </a>
            ))}
            <ButtonPrimary
              onClick={() => {
                scrollToHref('#contact')
              }}
              className="px-4 py-2"
            >
              Minta Penawaran
            </ButtonPrimary>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 md:hidden"
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-slate-900/50"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-x-0 top-0 z-50 origin-top rounded-b-2xl bg-white shadow-lg">
            <Container>
              <div className="flex h-16 items-center justify-between">
                <a
                  href="#"
                  className="flex items-center gap-3"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    scrollToHref('#')
                  }}
                >
                  <BrandMark />
                  <div className="text-sm font-extrabold tracking-tight text-slate-900">
                    ASRI RAYA
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-50"
                  aria-label="Close menu"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <div className="space-y-2 pb-6">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(false)
                      scrollToHref(l.href)
                    }}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700"
                  >
                    {l.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    scrollToHref('#contact')
                  }}
                  className="mt-2 w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-500"
                >
                  Minta Penawaran
                </button>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  )
}
