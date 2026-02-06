
export default function ButtonPrimary({
	children,
	className = '',
	type = 'button',
	...props
}) {
	return (
		<button
			type={type}
			className={
				'inline-flex items-center justify-center rounded-xl bg-red-800 px-5 py-2.5 text-sm font-semibold text-white ' +
				'shadow-sm shadow-red-600/20 ring-1 ring-inset ring-red-800 ' +
				'hover:bg-red-700 active:bg-red-700 ' +
				'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ' +
				'disabled:cursor-not-allowed disabled:opacity-60 ' +
				className
			}
			{...props}
		>
			{children}
		</button>
	)
}

