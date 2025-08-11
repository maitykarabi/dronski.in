import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Mppt() {
  return (
    <Layout>
      <Head>
        <title>Patent MPPT — Dronski</title>
        <meta name="description" content="Proprietary MPPT controller optimized for partial shading and variable irradiance." />
      </Head>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Patent MPPT Controller</h1>
        <p className="mt-4 text-gray-600">Our MPPT controller is engineered to maximize energy harvest under non-ideal conditions.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Spec snapshot</h3>
            <table className="mt-3 text-sm w-full">
              <tbody>
                <tr><td className="py-2 text-gray-600">Max input</td><td className="text-right font-medium">1000 W</td></tr>
                <tr><td className="py-2 text-gray-600">Efficiency</td><td className="text-right font-medium">≥ 98%</td></tr>
                <tr><td className="py-2 text-gray-600">Temp range</td><td className="text-right font-medium">-20°C to 70°C</td></tr>
                <tr><td className="py-2 text-gray-600">Connectivity</td><td className="text-right font-medium">Modbus / CAN / LTE</td></tr>
              </tbody>
            </table>

            <div className="mt-6">
              <Link href="/contact"><a className="bg-green-600 text-white px-4 py-2 rounded">Request Technical Brief</a></Link>
            </div>
          </div>

          <img src="/assets/mppt.jpg" alt="mppt" className="rounded shadow h-64 w-full object-cover" />
        </div>
      </motion.section>
    </Layout>
  )
}
