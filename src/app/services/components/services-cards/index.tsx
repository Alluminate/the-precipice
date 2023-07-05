import { ServiceCard } from "./service-card";
import { data } from "./data";

export function ServicesCards() {
  return (
    <section className="container space-y-4">
      {data.map(item => <ServiceCard key={item.title} {...item} />)}
    </section>
  )
}