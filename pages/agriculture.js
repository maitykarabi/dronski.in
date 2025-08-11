import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Agriculture() {
  return (
    <Layout>
      <Head>
        <title>Smart Agriculture — Dronski</title>
        <meta name="description" content="IoT sensors, aerial imagery, and AI analytics for precision farming." />
      </Head>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Smart Agriculture</h1>
        <p className="mt-4 text-gray-600">From soil sensors to aerial NDVI maps — actionable prescriptions for agronomists.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold">Field IoT</h4>
            <p className="text-sm text-gray-600 mt-2">Soil moisture, conductivity and microclimate sensors with LPWAN connectivity.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold">Aerial Analytics</h4>
            <p className="text-sm text-gray-600 mt-2">Multispectral imagery and stress detection layers for targeted interventions.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold">Farm Dashboard</h4>
            <p className="text-sm text-gray-600 mt-2">Dashboard with alerts, prescriptions and exportable reports.</p>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/contact"><a className="bg-green-600 text-white px-4 py-2 rounded">Request Demo</a></Link>
        </div>
      </motion.section>
    </Layout>
  )
}
