import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cervezas Huichahue',
  description: 'Cervecería Artesanal de Cunco, región de la Araucanía.',
  keywords: ['Huichahue', 'Cervezas artesanales','Cunco', 'araucania', 'piñones', 'maqui', 'moras', 'lupulos']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
