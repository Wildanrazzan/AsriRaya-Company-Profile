import ButtonPrimary from '../components/buttonprim.jsx'
import ButtonSecondary from '../components/buttonsec.jsx'
import Container from '../components/Container.jsx'
import Input from '../components/input.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { MotionConfig, motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${new URL('../assets/bghero.jpg', import.meta.url).toString()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/65" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/55 to-slate-950/75"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-screen items-center py-16 sm:py-20">
        <motion.div
          className="max-w-3xl"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/15"
          >
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Toko Bangunan • Material & Alat
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            ASRI RAYA
            <span className="text-red-400">.</span>
            <br />
            Lengkap, amanah, dan siap kirim.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/85"
          >
            Menyediakan kebutuhan bangunan untuk retail maupun proyek: semen, pasir, batu, besi,
            baja ringan, cat, keramik, pipa, sanitari, listrik, dan lain-lain.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonPrimary
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Tanya Stok & Harga
            </ButtonPrimary>
            <ButtonSecondary
              onClick={() =>
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Lihat Kategori
            </ButtonSecondary>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

function AboutSection() {
  function IconBox({ className = '' }) {
    return (
      <svg
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Z"
          clipRule="evenodd"
        />
      </svg>
    )
  }

  function IconHandshake({ className = '' }) {
    return (
      <svg
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  function IconTruck({ className = '' }) {
    return (
      <svg
        className={className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <section id="about" className="bg-white">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
          <div className="w-full">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <SectionHeading
                align="center"
                eyebrow="Tentang"
                title="Toko bangunan untuk kebutuhan harian & proyek"
                description="Kami bantu kamu belanja material dengan pilihan lengkap, kualitas terjaga, dan pelayanan ramah."
              />
            </motion.div>

            <motion.div
              className="mx-auto mt-6 max-w-3xl space-y-4 text-slate-600"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.p variants={fadeUp} transition={{ duration: 0.55, ease: 'easeOut' }}>
                ASRI RAYA melayani kebutuhan pembangunan rumah, renovasi, sampai proyek skala kecil-menengah.
                Kamu bisa belanja eceran atau grosir—tinggal sebutkan kebutuhan dan kami bantu hitungkan.
              </motion.p>
              <motion.p variants={fadeUp} transition={{ duration: 0.55, ease: 'easeOut' }}>
                Untuk pembelian besar, kami bisa bantu rekomendasi material yang sesuai spesifikasi dan budget.
                Pengiriman tersedia untuk area sekitar (menyesuaikan jarak & volume).
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            className="w-full rounded-3xl border border-slate-100 bg-red-800 p-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="text-sm font-semibold text-white">KEUNGGULAN</div>
            <motion.div
              className="mt-4 grid gap-4 sm:grid-cols-3"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              {[
                {
                  title: 'Stok terjaga',
                  desc: 'Produk populer tersedia, bisa cek stok sebelum kirim.',
                  icon: IconBox,
                },
                {
                  title: 'Pelayanan ramah',
                  desc: 'Rekomendasi jelas untuk kebutuhan rumah maupun proyek.',
                  icon: IconHandshake,
                },
                {
                  title: 'Pengiriman aman',
                  desc: 'Packing rapi dan penanganan sesuai jenis barang.',
                  icon: IconTruck,
                },
              ].map((v) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-inset ring-transparent transition duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-slate-900/10 hover:ring-red-100"
                >
                  <div className="mx-auto grid h-35 w-35 place-items-center rounded-2xl bg-red-600/10 text-red-800 ring-1 ring-inset ring-red-100 transition group-hover:bg-red-600/15">
                    <v.icon className="h-20 w-20" />
                  </div>
                  <div className="mt-4 font-bold text-slate-900">{v.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{v.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      title: 'Semen & Mortar',
      desc: 'Semen, mortar instan, dan kebutuhan pondasi.',
    },
    {
      title: 'Pasir, Batu, Split',
      desc: 'Material cor & pondasi, siap antar sesuai volume.',
    },
    {
      title: 'Besi & Baja Ringan',
      desc: 'Besi beton, wiremesh, baja ringan, dan aksesoris.',
    },
    {
      title: 'Cat & Pelapis',
      desc: 'Cat tembok, waterproofing, kuas, roller.',
    },
    {
      title: 'Keramik & Granit',
      desc: 'Pilihan motif, ukuran, dan kebutuhan finishing.',
    },
    {
      title: 'Pipa & Sanitari',
      desc: 'Pipa, fitting, kran, closet, dan aksesori kamar mandi.',
    },
  ]

  return (
    <section id="services" className="bg-slate-50">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            align="center"
            eyebrow="Produk & Layanan"
            title="Kebutuhan bangunan, satu tempat"
            description="Kategori utama yang paling sering dicari pelanggan."
          />
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-100 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-red-600/10 ring-1 ring-inset ring-red-100">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
                </div>
                <span className="text-sm font-semibold text-red-700 opacity-0 transition group-hover:opacity-100">
                  Detail →
                </span>
              </div>
              <div className="mt-4 text-lg font-extrabold text-slate-900">{s.title}</div>
              <div className="mt-2 text-sm text-slate-600">{s.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: 'Renovasi Rumah',
      desc: 'Material pondasi, cat, keramik, pipa, dan kebutuhan finishing.',
      tags: ['Retail', 'Rekomendasi'],
    },
    {
      title: 'Proyek Kontraktor',
      desc: 'Supply material rutin untuk pekerjaan bertahap dan pengiriman terjadwal.',
      tags: ['Proyek', 'Pengiriman'],
    },
    {
      title: 'Bangun Baru',
      desc: 'Kebutuhan dari awal sampai finishing dengan daftar belanja yang rapi.',
      tags: ['Rumah', 'Lengkap'],
    },
  ]

  return (
    <section id="projects" className="bg-white">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-center"
        >
          <SectionHeading
            align="center"
            eyebrow="Kebutuhan"
            title="Untuk rumah, renovasi, sampai proyek"
            description="Contoh skenario belanja yang sering kami bantu."
          />
        </motion.div>

        <motion.div
          className="mt-4 flex justify-end"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <ButtonSecondary
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Minta daftar harga
          </ButtonSecondary>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-100 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-slate-500">Case Study</div>
                <div className="flex gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-6">
                <button
                  type="button"
                  className="text-sm font-semibold text-red-700 hover:text-red-600"
                >
                  Lihat detail →
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Dina — Pemilik Rumah',
      quote:
        'Belanjanya enak, dibantuin hitung kebutuhan. Barangnya sesuai dan pengirimannya aman.',
    },
    {
      name: 'Raka — Kontraktor',
      quote:
        'Stoknya cukup lengkap. Kalau butuh rutin buat proyek, tinggal koordinasi pengiriman.',
    },
    {
      name: 'Sinta — Tukang Bangunan',
      quote:
        'Harga jelas dan barangnya oke. Kalau ada alternatif, dikasih rekomendasi yang pas.',
    },
  ]

  return (
    <section id="testimonials" className="bg-slate-50">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            align="center"
            eyebrow="Testimoni"
            title="Kata mereka"
            description="Testimoni contoh untuk layout. Bisa kamu ganti dengan data asli."
          />
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-bold text-slate-900">
                {t.name}
              </figcaption>
              <div className="mt-3 flex gap-1 text-red-600" aria-hidden="true">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      q: 'Apakah bisa pesan & dikirim ke lokasi?',
      a: 'Bisa. Kirim daftar kebutuhan + alamat, kami bantu cek stok dan estimasi ongkir sesuai jarak & volume.',
    },
    {
      q: 'Bisa belanja eceran atau grosir?',
      a: 'Bisa keduanya. Kamu bisa belanja kebutuhan harian atau untuk proyek dengan jumlah besar.',
    },
    {
      q: 'Bagaimana cara cek harga terbaru?',
      a: 'Klik tombol “Minta daftar harga” atau hubungi WhatsApp. Sertakan jenis barang + jumlah supaya kami bisa hitungkan cepat.',
    },
    {
      q: 'Apakah bisa bantu rekomendasi material?',
      a: 'Bisa. Ceritakan kebutuhan (mis. luas, jenis pekerjaan, spek), kami bantu rekomendasikan material yang sesuai budget.',
    },
  ]

  return (
    <section id="faq" className="bg-white">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Pertanyaan yang sering ditanyakan"
            description="Jawaban singkat agar kamu bisa cepat ambil keputusan."
          />
        </motion.div>

        <motion.div
          className="mx-auto mt-10 grid max-w-3xl gap-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {faqs.map((f) => (
            <motion.div
              key={f.q}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-sm font-bold text-slate-900">{f.q}</span>
                  <span
                    className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-inset ring-slate-200 transition group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</div>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

function LocationSection() {
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.5085912543899!2d112.71243326955396!3d-7.236919999548089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fed2ed149891%3A0xd40f32ae0e2d1be5!2sJl.%20Tambak%20Asri%20No.173%2C%20RT.016%2FRW.06%2C%20Morokrembangan%2C%20Kec.%20Krembangan%2C%20Surabaya%2C%20Jawa%20Timur%2060178!5e0!3m2!1sid!2sid!4v1770279899460!5m2!1sid!2sid'

  return (
    <section id="location" className="bg-slate-50">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            align="center"
            eyebrow="Lokasi"
            title="Temukan toko kami"
            description="Datang langsung atau kirim titik lokasi untuk pengiriman."
          />
        </motion.div>

        <motion.div
          className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.45, ease: 'easeOut' }}>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Alamat</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Jl. Tambak Asri No.173, RT.016/RW.06, Morokrembangan, Kec. Krembangan, Surabaya, Jawa Timur 60178
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonPrimary
                  className="inline-flex items-center justify-center rounded-xl bg-red-800 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
                  href="https://maps.google.com/?q=Jl.%20Tambak%20Asri%20No.173%2C%20Surabaya"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buka di Google Maps
                </ButtonPrimary>
                <ButtonSecondary
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-red-700 ring-1 ring-inset ring-red-200 hover:bg-red-50"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Minta pengiriman
                </ButtonSecondary>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.45, ease: 'easeOut' }}>
            <div className="w-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-inset ring-slate-200">
              <div className="aspect-[4/3] w-full bg-slate-100">
                <iframe
                  src={mapSrc}
                  title="Lokasi ASRI RAYA di Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  style={{ border: 0 }}
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="bg-white">
      <Container className="py-16 sm:py-20">
        <motion.div
          className="rounded-3xl border border-red-100 bg-red-800 p-8 sm:p-10"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-red-700 ring-1 ring-inset ring-red-100">
                <span className="h-2 w-2 rounded-full bg-red-600" />
                Kontak
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Butuh material bangunan hari ini?
              </h2>
              <p className="mt-4 text-base text-white">
                Kirim kebutuhan kamu (jenis barang + jumlah + lokasi). Kami bantu cek stok dan estimasi ongkir.
              </p>

              <div className="mt-8 grid gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <div>
                  <div className="text-sm font-semibold text-slate-500">Email</div>
                  <div className="mt-1 text-l font-semibold text-slate-900">
                    asriraya@example.com
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500">WhatsApp</div>
                  <div className="mt-1 text-l font-semibold text-slate-900">
                    +62 838-4979-0195
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              className="rounded-2xl bg-white p-6 shadow-sm"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              onSubmit={(e) => {
                e.preventDefault()
                alert('Form demo: belum ada backend. Nanti bisa kita sambungkan ke WhatsApp / email / Google Form.')
              }}
            >
              <div className="grid gap-4">
                <Input name="name" label="Nama" placeholder="Nama kamu" autoComplete="name" required />
                <Input name="email" label="Email" placeholder="nama@email.com" autoComplete="email" type="email" required />
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-900">Kebutuhan</span>
                  <textarea
                    name="message"
                    rows={4}
                    className="block w-full resize-none rounded-xl bg-white px-4 py-2.5 text-sm text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Contoh: semen 10 sak, pasir 1 kubik, cat 2 kaleng. Lokasi: ..."
                    required
                  />
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <ButtonPrimary type="submit" className="sm:w-auto">
                    Kirim
                  </ButtonPrimary>
                  <p className="text-xs text-slate-500">
                    Dengan mengirim form, kamu setuju dihubungi via email/WA.
                  </p>
                </div>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <LocationSection />
    </MotionConfig>
  )
}
