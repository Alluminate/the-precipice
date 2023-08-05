import Link from "next/link";
import { PageHeader, PageHeaderHeading, Paragraph } from "@/components/elements";
import { buttonVariants } from "@/components/ui/button";
import { calculateRange, cn } from "@/lib/utils";
import { HeroCard } from "./hero-card";
import { data } from "./data";


export default function Hero() {
  return (
    <div className="container space-y-64 md:space-y-40">
      <PageHeader className="h-fit md:h-fit">
        <div className="space-y-20 flex flex-col mx-auto">
          <PageHeaderHeading className="text-center" data-aos="fade-in">
            We <span className="golden-italic">energize</span> products, protocols, & the pros to accelerate Web 3.0.
          </PageHeaderHeading>
          <div className="relative w-full">
            <div className="absolute flex flex-col w-full md:flex-row items-center justify-around gap-5 -top-10 z-10">
              {data?.map(item => <HeroCard key={item.imageUrl} {...item} />)}
            </div>
            {/* Full Bleed */}
            <div className="flex flex-col space-y-5 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
              {calculateRange(8).map((_, index) => <div key={index} className={cn("h-[20px] bg-secondary-foreground/50")}></div>)}
            </div>
          </div>
        </div>
      </PageHeader>
      <div data-aos="fade-up" className="text-center py-8 grid place-items-center gap-4">
        <h2 className="text-2xl md:text-5xl italic font-bold">Forging a <span className="golden-italic">Fair Future.</span></h2>
        <Paragraph className="max-w-[720px]">
          <span className="golden-italic">Thorium</span> is a decentralized dev team shipping blockchain products since 2017 and a strong conviction in our Web 3.0 Convergence thesis. We build next-generation web utilities for more efficient markets. Our Radiance guild empowers engineers and investors with advanced techniques across this new domain.
        </Paragraph>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/services" className={cn(buttonVariants())}>See our Services</Link>
          {/* <Link href="/academy" className={cn(buttonVariants({ variant: 'outline' }))}>Learn from the best</Link> */}
          <Link href="/contact" className={cn(buttonVariants({ variant: 'outline' }))}>Learn from the best</Link>
        </div>
      </div>
    </div>
  )
}