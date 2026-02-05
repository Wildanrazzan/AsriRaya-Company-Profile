import { useEffect, useMemo, useRef, useState } from 'react'

function clamp01(value) {
  if (value <= 0) return 0
  if (value >= 1) return 1
  return value
}

/**
 * ScrollScene
 * - Menghasilkan `progress` 0..1 berdasarkan posisi elemen terhadap viewport.
 * - Cocok untuk animasi yang dikontrol scroll (bukan hanya enter/leave).
 *
 * Cara baca start/end:
 * - start/end adalah posisi di viewport (0..1) dihitung dari atas.
 * - contoh start=0.85 artinya progress mulai saat top elemen menyentuh 85% tinggi viewport.
 * - end=0.35 artinya progress mencapai 1 saat top elemen menyentuh 35% tinggi viewport.
 */
export default function ScrollScene({
  as: Tag = 'div',
  children,
  className = '',
  start = 0.85,
  end = 0.35,
  disabled = false,
}) {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  const reducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  }, [])

  useEffect(() => {
    if (disabled || reducedMotion) {
      setProgress(1)
      return
    }

    const el = ref.current
    if (!el) return

    let rafId = 0

    const update = () => {
      rafId = 0

      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1

      const startPx = vh * start
      const endPx = vh * end
      const denom = startPx - endPx || 1

      // progress=0 ketika rect.top masih di bawah startPx
      // progress=1 ketika rect.top sudah melewati endPx
      const t = (startPx - rect.top) / denom
      setProgress(clamp01(t))
    }

    const requestUpdate = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [disabled, end, reducedMotion, start])

  return (
    <Tag ref={ref} className={className}>
      {typeof children === 'function' ? children({ progress }) : children}
    </Tag>
  )
}
