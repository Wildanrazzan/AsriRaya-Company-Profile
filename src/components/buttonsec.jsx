
export default function ButtonSecondary({
	children,
	className = '',
	type = 'button',
	...props
}) {
	return (
		<button
			type={type}
			className={
				'inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-red-700 ' +
				'shadow-sm ring-1 ring-inset ring-red-200 ' +
				'hover:bg-red-50 active:bg-red-100 ' +
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

