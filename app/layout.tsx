import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Metadata } from 'next'


export const metadata: Metadata ={
    title:"Nico's Blog",
    description:"Created by Nico"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar/>
        <main className="px-4 md:px-6 prose prose-xl prose-slate
        prose-invert mx-auto">
          {children}
        </main>
        </body>
    </html>
  )
}
