import { AboutCard } from "./about-card";
import { data } from "./data";

export function AboutCards() {
  return (
    <section className="container space-y-4">
      {data.map(item => <AboutCard key={item.title} {...item} />)}
    </section>
  )
}