import './globals.css'
import { Fira_Sans } from 'next/font/google'

const firaSans = Fira_Sans({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['400', '700'] })

export const metadata = {
  title: 'Thorium',
  description: 'Thorium is a decentralized dev team shipping blockchain products since 2017 and a strong conviction in our Web 3.0 Convergence thesis. We build next-generation web utilities for more efficient markets. Our Radiance guild empowers engineers and investors with advanced techniques across this new domain.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaSans.className}>{children}</body>
    </html>
  )
}
