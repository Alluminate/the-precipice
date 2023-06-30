import './globals.css'
import { Metadata } from 'next'
import { Fira_Sans, Raleway } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { NavBar } from '@/components/navbar'

const firaSans = Fira_Sans({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['400', '700'], variable: '--font-firaSans', })
const raleway = Raleway({ subsets: ['latin'], style: ['italic', 'normal'], weight: ['400', '700'], variable: '--font-raleway' })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  // title: {
  //   default: siteConfig.name,
  //   template: `%s - ${siteConfig.name}`,
  // },
  // keywords: [
  //   "Next.js",
  //   "React",
  //   "Tailwind CSS",
  //   "Server Components",
  //   "Radix UI",
  // ],
  // authors: [
  //   {
  //     name: "shadcn",
  //     url: "https://shadcn.com",
  //   },
  // ],

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
    // creator: "@shadcn",
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: `${siteConfig.url}/site.webmanifest`,
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={firaSans.className}>
        <main className="relative flex min-h-screen flex-col">
          <NavBar />
          <div className="flex-1 max-w-screen-xl mx-auto">{children}</div>
          {/* <SiteFooter /> */}
        </main>
      </body>
    </html>
  )
}
