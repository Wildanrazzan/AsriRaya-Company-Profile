import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ButtonPrimary from '../components/buttonprim.jsx'
import ButtonSecondary from '../components/buttonsec.jsx'
import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

const whatsappNumber = '6283849790195'

function svgFallbackDataUri({ title = 'Produk' } = {}) {
	const safeTitle = (title || 'Produk').slice(0, 28)
	const svg =
		`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">` +
		`<defs>` +
		`<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
		`<stop offset="0" stop-color="#fee2e2"/>` +
		`<stop offset="1" stop-color="#f1f5f9"/>` +
		`</linearGradient>` +
		`</defs>` +
		`<rect width="800" height="600" fill="url(#g)"/>` +
		`<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="ui-sans-serif, system-ui" font-size="28" font-weight="800" fill="#0f172a">${safeTitle}</text>` +
		`<text x="50%" y="58%" text-anchor="middle" dominant-baseline="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="600" fill="#334155">Gambar belum tersedia</text>` +
		`</svg>`
	return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

function buildWhatsAppHref({ productName = '', extraNote = '' } = {}) {
	const whatsappTemplate =
		'Halo ASRI RAYA, saya mau tanya stok & harga.\n\n' +
		`Barang: ${productName}\n` +
		'Jumlah: \n' +
		'Lokasi: \n' +
		(extraNote ? `Catatan: ${extraNote}\n` : '') +
		'Kebutuhan (hari/tanggal): '

	return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappTemplate)}`
}

function ProductCard({ item, kategori }) {
	const fallbackSrc = useMemo(() => svgFallbackDataUri({ title: item.nama }), [item.nama])
	const [imgSrc, setImgSrc] = useState(item.imageUrl || fallbackSrc)

	const href = buildWhatsAppHref({
		productName: `${item.nama} (${kategori})`,
		extraNote: `Satuan: ${item.satuan}`,
	})

	return (
		<div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-inset ring-slate-100">
			<div className="aspect-4/3 w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-inset ring-slate-200">
				<img
					src={imgSrc}
					alt={item.nama}
					loading="lazy"
					referrerPolicy="no-referrer"
					className="h-full w-full object-cover"
					onError={() => setImgSrc(fallbackSrc)}
				/>
			</div>

			<div className="mt-4 flex flex-1 flex-col">
				<div className="flex items-start justify-between gap-4">
					<div className="min-w-0">
						<div className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-100">
							{kategori}
						</div>
						<div className="mt-3 text-base font-extrabold tracking-tight leading-snug wrap-break-word text-slate-900">
							{item.nama}
						</div>
					</div>
					<div className="shrink-0 rounded-xl bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
						{item.satuan}
					</div>
				</div>

				<p className="mt-3 text-sm line-clamp-2 leading-relaxed text-slate-600">{item.ringkas}</p>

				{item.tags?.length ? (
					<div className="mt-4 flex flex-wrap gap-2">
						{item.tags.map((t) => (
							<span
								key={t}
								className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200"
							>
								{t}
							</span>
						))}
					</div>
				) : null}

				<div className="mt-auto pt-5 flex flex-col gap-2 sm:flex-row justify-center">
					<ButtonPrimary href={href} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
						Tanya stok & harga
					</ButtonPrimary>
				</div>
			</div>
		</div>
	)
}

export default function Produk() {
	const umumHref = buildWhatsAppHref({ productName: 'Daftar produk / konsultasi kebutuhan material' })
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState('')
	const [groups, setGroups] = useState([])

	async function loadProducts(signal) {
		setIsLoading(true)
		setError('')

		try {
			const res = await fetch(
				'https://dummyjson.com/products?limit=24&select=title,description,category,thumbnail',
				{ signal },
			)
			if (!res.ok) throw new Error(`Gagal ambil data produk (HTTP ${res.status})`)
			const data = await res.json()

			const byCategory = new Map()
			for (const p of data.products ?? []) {
				const kategori = p.category || 'Lainnya'
				if (!byCategory.has(kategori)) byCategory.set(kategori, [])

				byCategory.get(kategori).push({
					nama: p.title || 'Produk',
					satuan: 'pcs',
					ringkas: p.description || 'Detail produk belum tersedia.',
					tags: [],
					imageUrl: p.thumbnail || '',
				})
			}

			setGroups(
				Array.from(byCategory.entries()).map(([kategori, items]) => ({
					kategori,
					items,
				})),
			)
		} catch (e) {
			if (e?.name === 'AbortError') return
			setGroups([])
			setError(e?.message || 'Gagal memuat produk. Coba lagi nanti.')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		const controller = new AbortController()
		loadProducts(controller.signal)
		return () => controller.abort()
	}, [])

	return (
		<section id="produk" className="bg-white">
			<Container className="py-16 sm:py-20">
				<SectionHeading
					eyebrow="Katalog"
					title="Produk yang kami jual"
					description="Katalog ditarik dari API publik (contoh). Stok & harga mengikuti kondisi pasar — konfirmasi via WhatsApp untuk daftar terbaru."
				/>

				<div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-sm text-slate-700">
					<div className="font-extrabold text-slate-900">Catatan</div>
					<ul className="mt-2 list-disc space-y-1 pl-5">
						<li>Untuk proyek, kirim kebutuhan (jenis + jumlah + lokasi) biar kami hitungkan cepat.</li>
						<li>Pengiriman menyesuaikan jarak dan volume.</li>
						<li>Kalau cari merk/ukuran tertentu, tulis di catatan chat.</li>
					</ul>
				</div>

				{isLoading ? (
					<div className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 text-sm text-slate-700 ring-1 ring-inset ring-slate-100">
						<div className="flex items-center gap-3">
							<div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-red-700" aria-hidden="true" />
							<div className="font-semibold">Memuat produk…</div>
						</div>
						<div className="mt-2 text-sm text-slate-600">
							Menyiapkan katalog dari API publik.
						</div>
					</div>
				) : error ? (
					<div className="mt-10 rounded-2xl border border-red-100 bg-red-50 p-6 text-sm text-slate-800 ring-1 ring-inset ring-red-100">
						<div className="text-base font-extrabold text-slate-900">Gagal memuat produk</div>
						<div className="mt-2 text-slate-700">{error}</div>
						<div className="mt-4 flex flex-col gap-2 sm:flex-row">
							<ButtonPrimary
								onClick={() => {
									const controller = new AbortController()
									loadProducts(controller.signal)
								}}
							>
								Coba muat ulang
							</ButtonPrimary>
							<ButtonSecondary href={umumHref} target="_blank" rel="noreferrer">
								Chat WhatsApp
							</ButtonSecondary>
						</div>
					</div>
				) : (
					<div className="mt-10 grid gap-10">
						{groups.map((blok) => (
							<div key={blok.kategori} className="space-y-5">
							<div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
								<div>
									<div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Kategori</div>
									<div className="mt-1 text-xl font-extrabold tracking-tight text-slate-900">{blok.kategori}</div>
								</div>
								<ButtonSecondary
									href={buildWhatsAppHref({ productName: `Minta daftar harga: ${blok.kategori}` })}
									target="_blank"
									rel="noreferrer"
									className="w-full sm:w-auto"
								>
									Tanya {blok.kategori}
								</ButtonSecondary>
							</div>

							<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{blok.items.map((item) => (
									<ProductCard key={`${blok.kategori}-${item.nama}`} item={item} kategori={blok.kategori} />
								))}
							</div>
						</div>
					))}
				</div>
				)}

				<div className="mt-12 flex flex-col gap-4 rounded-3xl border border-red-100 bg-red-800 p-8 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<div className="text-sm font-semibold text-white/90">Butuh yang tidak ada di list?</div>
						<div className="mt-1 text-2xl font-extrabold tracking-tight text-white">Chat kami, sebutkan kebutuhan.</div>
						<div className="mt-2 text-sm text-white/90">Kami bantu cek stok, harga, dan estimasi pengiriman.</div>
					</div>
					<ButtonSecondary href={umumHref} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
						Chat WhatsApp
					</ButtonSecondary>
				</div>

			</Container>
		</section>
	)
}

