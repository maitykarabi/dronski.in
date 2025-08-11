import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact — Dronski</title>
        <meta name="description" content="Contact Dronski Pvt Ltd for sales and support." />
      </Head>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">Get in touch</h1>
        <p className="mt-2 text-gray-600">Sales, partnerships, or technical inquiries — tell us about your project.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold">Office</h4>
            <p className="text-sm text-gray-600 mt-2">123 Innovation Drive, Bengaluru, India</p>
            <p className="mt-2 text-sm">✉️ hello@dronski.in</p>
            <p className="mt-1 text-sm">📞 +91 80 1234 5678</p>
          </div>

          <form className="bg-white p-6 rounded shadow" onSubmit={(e) => { e.preventDefault(); alert('Message sent (demo)') }}>
            <label className="block text-sm font-medium">Name</label>
            <input className="mt-1 w-full px-3 py-2 border rounded" required />

            <label className="block text-sm font-medium mt-3">Email</label>
            <input type="email" className="mt-1 w-full px-3 py-2 border rounded" required />

            <label className="block text-sm font-medium mt-3">Message</label>
            <textarea className="mt-1 w-full px-3 py-2 border rounded" rows="5" required />

            <div className="mt-4">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Send message</button>
            </div>
          </form>
        </div>
      </motion.section>
    </Layout>
  )
}
