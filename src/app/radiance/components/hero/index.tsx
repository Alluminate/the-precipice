import Link from "next/link";
import { PageHeader, PageHeaderDescription, PageHeaderHeading, Paragraph } from "@/components/elements";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export function Hero() {
  return (
    <div className="container">
      <PageHeader>
        <div className="flex flex-col mx-auto gap-4">
          <PageHeaderHeading className="text-center">
            Learn from the <span className="golden-italic">brightest.</span>
          </PageHeaderHeading>
          <PageHeaderDescription className="text-center">
            Thorium’s <span className="golden-italic">Radiance</span> is a pro-level focused academy, informed by Web 3.0 Convergence theory, years of implementation, and subject-matter experts.
          </PageHeaderDescription>
          <div className="mt-8 w-full flex flex-col sm:flex-row h-[480px] gap-5">
            <div className="flex flex-col flex-[2] gap-5 justify-between h-full">
              <div className="p-5 grid gap-2 content-end flex-[5] rounded border border-secondary-foreground bg-gradient-radial from-[#33066D] to-black">
                <h3 className="text-2xl">The Radiance Academy</h3>
                <Link href='/' className={cn(buttonVariants({ variant: 'outline' }), 'inline-flex items-center gap-1 border-foreground font-bold w-fit')}>Click to Start <Icons.arrowRight size={'1em'} strokeWidth={3} /></Link>
              </div>
              <div className="flex flex-col sm:flex-row justify-between flex-1 gap-3 w-full">
                <Link href='/' className={cn(buttonVariants({ variant: 'outline' }), 'flex items-center gap-1 flex-1 h-full border-secondary-foreground font-bold')}>See our Github <Icons.arrowRight size={'1em'} strokeWidth={3} /></Link>
                <Link href='/' className={cn(buttonVariants({ variant: 'outline' }), 'flex items-center gap-1 flex-1 h-full border-secondary-foreground font-bold')}>Join the Discussion <Icons.arrowRight size={'1em'} strokeWidth={3} /></Link>
              </div>
            </div>

            <div className="p-5 grid place-items-center content-end gap-5 text-center flex-1 border border-secondary-foreground rounded bg-gradient-radial from-[#33066D] to-black">
              <Icons.logoNoText width={80} height={80} />
              <Paragraph className="max-w-[250px]">Radiance materials focus on investors and builders who are leading the Web 3.0 revolution.</Paragraph>
              <Link href='/'>
                <Paragraph className="font-bold flex items-center gap-1">Become a Contributor <Icons.arrowRight size={'1em'} strokeWidth={3} /></Paragraph>
              </Link>
            </div>
          </div>
        </div>
      </PageHeader>
    </div>
  )
}