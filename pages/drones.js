import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Drones() {
  return (
    <Layout>
      <Head>
        <title>Drones — Dronski</title>
        <meta name="description" content="Industrial & survey drones for mapping, monitoring, and delivery." />
      </Head>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Drones</h1>
        <p className="mt-4 text-gray-600">Rugged UAVs integrated with our energy and analytics stack for field operations.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <img src="/assets/drones.jpg" alt="drones" className="rounded shadow h-64 w-full object-cover" />
          <div>
            <h3 className="font-semibold">Applications</h3>
            <ul className="list-disc list-inside mt-3 text-gray-600">
              <li>Multispectral surveys</li>
              <li>Parcel/asset delivery</li>
              <li>Precision spraying (when permitted)</li>
              <li>Inspections and monitoring</li>
            </ul>

            <div className="mt-6">
              <Link href="/contact"><a className="bg-green-600 text-white px-4 py-2 rounded">Talk to Sales</a></Link>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  )
}
