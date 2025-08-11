import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/"><a className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Dronski" className="h-10 w-10 object-contain" />
            <div>
              <div className="font-bold text-lg">Dronski Pvt Ltd</div>
              <div className="text-xs text-gray-500 -mt-1">Solar · MPPT · Drones · Smart Agriculture</div>
            </div>
          </a></Link>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <Link href="/solar"><a>Solar</a></Link>
            <Link href="/mppt"><a>Patent MPPT</a></Link>
            <Link href="/drones"><a>Drones</a></Link>
            <Link href="/agriculture"><a>Smart Agri</a></Link>
            <Link href="/contact"><a className="bg-green-600 text-white px-4 py-2 rounded-md">Contact</a></Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>© {new Date().getFullYear()} Dronski Pvt Ltd — All rights reserved.</div>
            <div>
              <a href="mailto:hello@dronski.in" className="mr-4">hello@dronski.in</a>
              <span> | </span>
              <a href="/contact" className="ml-4">Get in touch</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
