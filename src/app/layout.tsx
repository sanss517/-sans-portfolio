import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SANS — Les toiles du silence',
  description: 'Œuvres et manifeste d’absence.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="bg-white border-b border-gray-200 p-4">
          <nav className="max-w-6xl mx-auto flex gap-6 font-semibold text-sm">
            <Link href="/" className="hover:underline">Accueil</Link>
            <Link href="/a-propos" className="hover:underline">À propos</Link>
            <Link href="#contact" className="hover:underline">Précommande</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
