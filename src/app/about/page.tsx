import { AboutCards, CoreTeam, Hero } from "./components";
import { getMetadata } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export const metadata = {
  ...getMetadata({ 
    title: 'About Us - Thorium | Powering the Progress of Web 3.0',
    description: 'Meet the team at Thorium - a collective of industry leaders with a shared passion for the future of open finance and data economies. Learn about our journey and commitment to innovation.',
    type: 'website',
    url: `${siteConfig.url}/about`
  })
}

export default function AboutPage() {
  return (
    <section className='space-y-20'>
      <Hero />
      <AboutCards />
      <CoreTeam />
    </section>
  )
}