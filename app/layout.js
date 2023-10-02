import './globals.css'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Poppins({
  weight: '500',
  subsets: ['latin']
})

export const metadata = {
  title: 'Bored API',
  description: 'Things to do when bored.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
