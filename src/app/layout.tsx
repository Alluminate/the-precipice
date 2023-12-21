import "./globals.css";
import type { Metadata } from "next";
import {
  Fira_Sans,
  Raleway,
  Open_Sans,
  Fira_Sans_Condensed,
  Lora,
} from "next/font/google";
import { siteConfig } from "@/config/site";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@/lib/google-analytics";
import { AOSInit } from "@/lib/aos";
import { IsClientCtxProvider } from "@/context/is-client-ctx";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-firaSans",
});
const raleway = Raleway({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});
const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["600", "900"],
  variable: "--font-firaSansCondensed",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-openSans",
});
const lora = Lora({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theprecipice.co"),
  title: siteConfig.name,
  description: siteConfig.description,
  // title: {
  //   default: siteConfig.name,
  //   template: `%s - ${siteConfig.name}`,
  // },
  keywords: [
    "Existential Risk",
    "Rational Optimism",
    "Rationality",
    "NHI Intelligence",
    "The Precipice",
    "Venture Philosophy",
    "The Future of Humanity",
    "What the Future Looks Like",
    "2030",
  ],
  authors: [
    {
      name: "The Precipice",
      url: "https://theprecipice.co",
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
    creator: "@ThePrecipice",
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/assets/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  manifest: `/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <GoogleAnalytics />
      <AOSInit />
      <IsClientCtxProvider>
        <body
          className={`min-h-screen antialiased ${firaSans.variable} ${firaSansCondensed.variable} ${openSans.variable} ${lora.variable} ${raleway.variable}`}
          suppressHydrationWarning
        >
          {/* relative flex min-h-screen flex-col overflow-x-clip */}
          <main className="relative flex min-h-screen flex-col overflow-x-clip">
            <NavBar />
            {/* flex-1 max-w-screen-xl mx-auto" */}
            <div className="flex-1">{children}</div>
            <Footer />
            <Toaster />
          </main>
        </body>
      </IsClientCtxProvider>
    </html>
  );
}
