import { useEffect, useRef, useState } from 'react'

export default function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  from = 'up',
  once = true,
  animateOut = false,
  threshold = 0.15,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')
      ?.matches

    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          setVisible(true)
          if (once && !animateOut) observer.disconnect()
        } else if (animateOut || !once) {
          setVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animateOut, once, threshold])

  const fromClass =
    from === 'up'
      ? 'translate-y-4'
      : from === 'down'
        ? '-translate-y-4'
        : from === 'left'
          ? 'translate-x-4'
          : from === 'right'
            ? '-translate-x-4'
            : ''

  return (
    <Tag
      ref={ref}
      className={
        'transition-all duration-700 ease-out will-change-transform ' +
        (visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${fromClass}`) +
        ' ' +
        className
      }
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
