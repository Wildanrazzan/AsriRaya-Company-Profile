export default function BrandMark({ className = '' }) {
  return (
    <div
      className={
        'grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-inset ring-red-100 ' +
        className
      }
    >
      <img
        src={new URL('../assets/logoar.png', import.meta.url).toString()}
        alt="Logo Asri Raya"
        className="h-full w-full object-contain p-1"
        loading="lazy"
      />
    </div>
  )
}
