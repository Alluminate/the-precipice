import './globals.css'
import { Metadata } from 'next'
import { Fira_Sans, Raleway } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { NavBar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { GoogleAnalytics } from '@/lib/google-analytics'
import { AOSInit } from '@/lib/aos'


const firaSans = Fira_Sans({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['400', '700'], variable: '--font-firaSans', })
const raleway = Raleway({ subsets: ['latin'], style: ['italic', 'normal'], weight: ['400', '700'], variable: '--font-raleway' })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  // title: {
  //   default: siteConfig.name,
  //   template: `%s - ${siteConfig.name}`,
  // },
  keywords: [
    "Web 3.0",
    "DeFi",
    "Blockchain Engineering",
    "Consulting",
    "Thorium",
    "Innovation",
    "Finance"
  ],
  authors: [
    {
      name: "Thorium",
      url: "https://thorium.com",
    },
  ],

  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    // creator: "@sthorium",
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <GoogleAnalytics />
      <AOSInit />
      <body className={`min-h-screen antialiased ${firaSans.variable} ${raleway.variable}`} suppressHydrationWarning>
        <main className="relative flex min-h-screen flex-col overflow-x-clip">
          <NavBar />
          <div className="flex-1 max-w-screen-xl mx-auto">{children}</div>
          <Footer />
          <Toaster />
        </main>
      </body>
    </html>
  )
}
