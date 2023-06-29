import Navigation from '@/components/Layout/Navigation/Navigation'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontend Mentor | Audiophile e-commerce website',
  description: 'E-commerce website for audiophiles',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
