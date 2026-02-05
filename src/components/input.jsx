
export default function Input({
	className = '',
	label,
	id,
	error,
	...props
}) {
	const inputId = id ?? props.name

	return (
		<label className="block">
			{label ? (
				<span className="mb-1.5 block text-sm font-medium text-slate-900">{label}</span>
			) : null}
			<input
				id={inputId}
				className={
					'block w-full rounded-xl bg-white px-4 py-2.5 text-sm text-slate-900 ' +
					'ring-1 ring-inset ring-slate-200 ' +
					'placeholder:text-slate-400 ' +
					'focus:outline-none focus:ring-2 focus:ring-red-500 ' +
					(error ? 'ring-red-300 focus:ring-red-600 ' : '') +
					className
				}
				{...props}
			/>
			{error ? (
				<span className="mt-1.5 block text-sm text-red-600">{error}</span>
			) : null}
		</label>
	)
}

