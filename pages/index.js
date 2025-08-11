import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dronski Pvt Ltd — dronski.in</title>
        <meta name="description" content="Dronski Pvt Ltd — Solar panels, patented MPPT, industrial drones, and smart agriculture solutions." />
        <meta property="og:title" content="Dronski Pvt Ltd" />
        <meta property="og:description" content="Solar, MPPT, Drones & Smart Agriculture" />
        <meta property="og:image" content="/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-extrabold leading-tight">
            Powering the future — clean energy, intelligent drones, and smarter farms
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-gray-600">
            Dronski builds modular solar systems, a patented MPPT controller, industrial drones, and a smart agriculture platform to help farms increase yields sustainably.
          </motion.p>

          <div className="mt-6 flex gap-4">
            <Link href="/solar"><a className="bg-green-600 text-white px-5 py-3 rounded-lg shadow">Explore Products</a></Link>
            <Link href="/contact"><a className="border border-green-600 text-green-600 px-5 py-3 rounded-lg">Contact Us</a></Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="bg-white p-3 rounded shadow">✓ 10+ years R&D</div>
            <div className="bg-white p-3 rounded shadow">✓ Patent-backed MPPT</div>
            <div className="bg-white p-3 rounded shadow">✓ Field-proven hardware</div>
            <div className="bg-white p-3 rounded shadow">✓ Farm-to-satellite telemetry</div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <img src="/assets/hero.jpg" alt="solar & drone" className="rounded-xl shadow-lg w-full object-cover h-80 md:h-[420px]" />
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold">Products & Solutions</h2>
        <p className="text-gray-600 mt-2">Modular systems built to work together — energy, control, aerial and analytics.</p>

        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Solar Panels" img="/assets/solar.jpg" href="/solar">High-efficiency PV modules designed for long life and maximum yield.</Card>
          <Card title="Patent MPPT" img="/assets/mppt.jpg" href="/mppt">Proprietary MPPT algorithm improves harvest under shading.</Card>
          <Card title="Drones" img="/assets/drones.jpg" href="/drones">Rugged UAVs for mapping, monitoring, and delivery.</Card>
          <Card title="Smart Agriculture" img="/assets/agriculture.jpg" href="/agriculture">IoT + AI stack for precision farming and analytics.</Card>
        </div>
      </section>
    </Layout>
  )
}

function Card({ title, img, href, children }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="bg-white rounded-xl shadow overflow-hidden">
      <img src={img} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <Link href={href}><a className="text-sm text-green-600">Learn →</a></Link>
        </div>
        <p className="text-sm text-gray-600 mt-2">{children}</p>
      </div>
    </motion.article>
  )
}
