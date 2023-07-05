import { SubHeader } from "@/components/elements";
import { data } from "./data";
import { HIWCard } from "./hiw-card";


export function HowItWorks() {
  return (
    <section className="container space-y-4">
      <SubHeader>Here&apos;s How it works</SubHeader>
      <div>
        {data.map(item => <HIWCard key={item.title} {...item} />)}
      </div>
    </section>
  )
}