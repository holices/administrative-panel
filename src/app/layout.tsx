import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Administrative Panel',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="min-h-screen lg:grid lg:grid-cols-app dark:bg-zinc-900">
          <Sidebar />
          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-20 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
