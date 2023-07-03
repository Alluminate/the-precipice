import Link from "next/link";
import { PageHeader, PageHeaderHeading, Paragraph } from "@/components/elements";
import { cn } from "@/lib/utils";
import { data } from "./data";
import { HeroCard } from "./hero-card";
import { buttonVariants } from "@/components/ui/button";


export default function Hero() {
  return (
    <div className="container">
      <PageHeader className="space-y-20">
        <PageHeaderHeading className="text-center">
          We <span className="golden-italic">energize</span> products, protocols, & the pros to accelerate Web 3.0.
        </PageHeaderHeading>
        <div className="relative w-full">
          <div className="flex flex-col w-full md:flex-row items-center justify-around gap-5 absolute -top-10">
            {data?.map(item => <HeroCard key={item.imageUrl} {...item} />)}
          </div>
          <div className="flex flex-col space-y-5 min-w-[calc(100%+8000px)] ml-[-4000px]">
            {Array.from({ length: 8 }, (_, k) => k + 1).map((_, index) => <div key={index} className={cn("h-[20px] bg-secondary-foreground/50")}></div>)}
          </div>
        </div>
      </PageHeader>
      <div className="text-center grid place-items-center gap-4">
        <h2 className="text-2xl md:text-5xl italic font-bold">Forging a <span className="golden-italic">Fair Future.</span></h2>
        <Paragraph className="max-w-[720px]">
          <span className="golden-italic">Thorium</span> is a decentralized dev team shipping blockchain products since 2017 and a strong conviction in our Web 3.0 Convergence thesis. We build next-generation web utilities for more efficient markets. Our Radiance guild empowers engineers and investors with advanced techniques across this new domain.
        </Paragraph>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/services" className={cn(buttonVariants())}>See our Services</Link>
          <Link href="/academy" className={cn(buttonVariants({ variant: 'outline' }))}>Learn from the best</Link>
        </div>
      </div>
    </div>
  )
}