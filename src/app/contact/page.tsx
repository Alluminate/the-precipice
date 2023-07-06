import { Hero } from "./components";
import { FAQS } from "../services/components";

export default function Radiance() {   
  return (
    <section className='space-y-20'>
      <Hero />
      <FAQS />
    </section>
  )
 }