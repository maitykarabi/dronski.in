import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Solar() {
  return (
    <Layout>
      <Head>
        <title>Solar Panels — Dronski</title>
        <meta name="description" content="High-efficiency solar panels by Dronski Pvt Ltd." />
      </Head>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Solar Panels</h1>
        <p className="mt-4 text-gray-600">Monocrystalline and bifacial modules engineered for durability and high energy yield.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <img src="/assets/solar.jpg" alt="solar" className="rounded shadow h-64 w-full object-cover" />
          <div>
            <h3 className="font-semibold">Key features</h3>
            <ul className="list-disc list-inside mt-3 text-gray-600">
              <li>High efficiency cells</li>
              <li>Low degradation</li>
              <li>IP67 junction box option</li>
              <li>Warranty & bankable specs</li>
            </ul>

            <div className="mt-6">
              <Link href="/contact"><a className="bg-green-600 text-white px-4 py-2 rounded">Request Quote</a></Link>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  )
}
