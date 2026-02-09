import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Legal"
          title="Kebijakan Privasi"
          description="Ringkasan cara kami mengelola informasi saat kamu menghubungi ASRI RAYA."
        />

        <div className="mt-10 max-w-3xl space-y-8 text-sm leading-relaxed text-slate-700">
          <p className="text-xs text-slate-500">Terakhir diperbarui: 6 Februari 2026</p>

          <div className="space-y-2">
            <div className="text-base font-extrabold text-slate-900">1. Informasi yang kami terima</div>
            <p>
              Website ini tidak mewajibkan pembuatan akun. Informasi yang kami terima umumnya berasal dari pesan
              yang kamu kirim melalui WhatsApp, misalnya nama, nomor telepon, alamat pengiriman, dan detail
              kebutuhan barang.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-base font-extrabold text-slate-900">2. Cara kami menggunakan informasi</div>
            <ul className="list-disc space-y-1 pl-5">
              <li>Menjawab pertanyaan stok, harga, dan ketersediaan barang</li>
              <li>Menyiapkan penawaran, estimasi ongkir, dan jadwal pengiriman</li>
              <li>Koordinasi layanan purna jual (jika diperlukan)</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-base font-extrabold text-slate-900">3. Cookies & analitik</div>
            <p>
              Saat ini kami tidak memasang sistem login atau formulir pengumpulan data di website. Browser kamu
              tetap dapat menyimpan cookies teknis standar. Jika suatu saat kami menambahkan analitik (misalnya
              untuk melihat trafik), halaman ini akan diperbarui.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-base font-extrabold text-slate-900">4. Berbagi data dengan pihak ketiga</div>
            <p>
              Kami tidak menjual data pribadi. Informasi dapat dibagikan ke pihak ketiga hanya bila diperlukan
              untuk layanan (mis. ekspedisi/kurir) atau bila diwajibkan oleh hukum.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-base font-extrabold text-slate-900">5. Keamanan</div>
            <p>
              Kami berupaya menjaga informasi kamu dengan wajar. Namun, komunikasi via internet memiliki risiko.
              Hindari mengirim data yang tidak diperlukan (mis. kata sandi, data kartu).
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-base font-extrabold text-slate-900">6. Perubahan kebijakan</div>
            <p>
              Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan akan ditampilkan di halaman ini.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <div className="text-sm font-extrabold text-slate-900">Kontak</div>
            <p className="mt-2 text-slate-700">
              Untuk pertanyaan terkait privasi, hubungi kami via WhatsApp melalui halaman Kontak.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/" className="text-sm font-semibold text-red-700 hover:text-red-600">
              ← Kembali ke Beranda
            </Link>
            <Link to="/terms" className="text-sm font-semibold text-red-700 hover:text-red-600">
              Lihat Syarat & Ketentuan →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
