import { SubHeader } from "@/components/elements"
import { RadianceCard } from "./radiance-card"
import { data } from "./data"

export function RadianceCards() {
  return (
    <section className='container space-y-8'>
      {Object.keys(data).map(key => {
        return (
          <div className='space-y-4' key={key}>
            <SubHeader>{key}</SubHeader>
            <div className="grid grid-cols-holy-grail gap-4">
              {data[key].map(item => <RadianceCard key={item.title} {...item} />)}
            </div>
          </div>
        )
      })}
    </section>
  )
}