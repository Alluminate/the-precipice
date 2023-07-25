import { PageHeader, PageHeaderHeading } from "@/components/elements";
import { StatCard } from "./stat-card";
import { data } from "./data";


export function Hero() {
  return (
    <section className="container">
      <PageHeader className="h-fit md:h-fit">
        <div className="flex flex-col mx-auto gap-4">
          <PageHeaderHeading data-aos="fade-in" className="text-center">
            World class Web 3.0 products, protocols, and pros trust the <span className="golden-italic">Nanoforge.</span>
          </PageHeaderHeading>
      
          <div className="w-full flex flex-wrap items-center justify-center">
            {data.map(item => <StatCard key={item.description} {...item} />)}
          </div>
        </div>
      </PageHeader>
    </section>
  )
}