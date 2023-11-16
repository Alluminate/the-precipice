import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/elements";


export function Hero() {
  return (
    <div className="container">
      <PageHeader data-aos="fade-in" className="h-fit md:h-fit">
        <div className="flex flex-col mx-auto gap-4">
          <PageHeaderHeading className="">
            Thorium will <span className="golden-italic">change</span> your relationship with technology.
          </PageHeaderHeading>
          <PageHeaderDescription>
            The next-generation of web has come, but it is not uniform, safe, accessible, trustworthy, seamless, nor usable.
          </PageHeaderDescription>
        </div>
      </PageHeader>
    </div>
  )
}