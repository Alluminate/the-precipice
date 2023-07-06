import { AboutCards, CoreTeam, Hero } from "./components";

export default function About() {
  return (
    <section className='space-y-20'>
      <Hero />
      <AboutCards />
      <CoreTeam />
    </section>
  )
}