import { FAQS, Hero, HowItWorks, ServicesCards } from "./components";
import { getMetadata } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export const metadata = {
  ...getMetadata({ 
    title: 'Services - Thorium | Web 3.0 Infrastructure, Blockchain Engineering & Architecture, Consulting & More',
    description: "From blockchain development to scalable backends, our diverse services are engineered for serving millions of users on realtime state changes. Discover Thorium's transformative solutions.",
    type: 'website',
    url: `${siteConfig.url}/services`
  })
}

export default function ServicesPage() {   
  return (
    <section className='space-y-20'>
      <Hero />
      <HowItWorks />
      <ServicesCards />
      <FAQS />
    </section>
  )
 }