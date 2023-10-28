import './globals.css'
import { Gabarito } from 'next/font/google'
import Navbar from '@/components/Navbar'
const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'cihuy',
  description: 'Anime List By Indonesia, Tangerang',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
