import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Legal"
          title="Syarat & Ketentuan"
          description="Ketentuan penggunaan website dan cara kami melayani pemesanan."
        />

        <div className="mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-700">
          <p className="text-xs text-slate-500">Terakhir diperbarui: 6 Februari 2026</p>

          <div className="space-y-2">
            <div className="text-base font-extrabold text-slate-900">1. Informasi umum</div>
            <p>
              Website ini bersifat informatif untuk membantu pelanggan mengenal produk/layanan ASRI RAYA dan
              memudahkan kontak via WhatsApp.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-base font-extrabold text-slate-900">2. Harga, stok, dan ketersediaan</div>
            <ul className="list-disc space-y-1 pl-5">
              <li>Harga dapat berubah sewaktu-waktu mengikuti kondisi pasar.</li>
              <li>Stok bersifat dinamis; konfirmasi final dilakukan via WhatsApp sebelum transaksi.</li>
              <li>Foto/ilustrasi produk (jika ada) dapat berbeda sedikit dengan barang aktual.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-base font-extrabold text-slate-900">3. Pemesanan & komunikasi</div>
            <p>
              Pemesanan dan konsultasi dilakukan melalui WhatsApp. Mohon kirim informasi yang jelas (jenis barang,
              jumlah/ukuran, dan lokasi). Kami akan membalas sesuai jam operasional.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-base font-extrabold text-slate-900">4. Pengiriman</div>
            <p>
              Pengiriman tersedia untuk area tertentu dan dapat dikenakan biaya sesuai jarak dan volume. Estimasi
              ongkir dan jadwal dikonfirmasi sebelum pengiriman.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-base font-extrabold text-slate-900">5. Pembatasan tanggung jawab</div>
            <p>
              Kami berusaha menyajikan informasi seakurat mungkin. Namun, ASRI RAYA tidak menjamin seluruh konten
              bebas dari kesalahan ketik/ketidakakuratan. Jika ada perbedaan, konfirmasi via WhatsApp menjadi acuan.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-base font-extrabold text-slate-900">6. Perubahan ketentuan</div>
            <p>
              Ketentuan ini dapat diperbarui sewaktu-waktu. Perubahan akan ditampilkan di halaman ini.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/" className="text-sm font-semibold text-red-700 hover:text-red-600">
              ← Kembali ke Beranda
            </Link>
            <Link to="/privacy" className="text-sm font-semibold text-red-700 hover:text-red-600">
              Lihat Kebijakan Privasi →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
