import { FAQS, Hero, HowItWorks, ServicesCards } from "./components";

export default function Radiance() {   
  return (
    <section className='space-y-20'>
      <Hero />
      <HowItWorks />
      <ServicesCards />
      <FAQS />
    </section>
  )
 }