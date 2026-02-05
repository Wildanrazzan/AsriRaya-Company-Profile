export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const isCentered = align === 'center'
  const alignClass = isCentered ? 'text-center' : 'text-left'

  return (
    <div className={alignClass}>
      {eyebrow ? (
        <div
          className={
            'text-sm font-semibold uppercase tracking-wider text-red-600 flex items-center ' +
            (isCentered ? 'justify-center' : 'justify-start')
          }
        >
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={"mt-3 max-w-2xl text-base text-slate-600 " + (isCentered ? 'mx-auto' : '')}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
