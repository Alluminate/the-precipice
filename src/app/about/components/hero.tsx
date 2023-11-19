import {
  PageHeader,
  PageHeaderDescription,
  BigSubHeader,
  Paragraph,
} from "@/components/elements";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="flex flex-col items-center space-y-20 px-0 mx-2 md:mx-4 lg:mx-6 xl:mx-8 2xl:mx-12">
      <div className="h-fit md:h-fit items-start w-full md:w-[736px] lg:w-[948px] md:px-0 leading-relaxed mt-12 mb-4">
        <div className="flex flex-col items-start gap-4 w-full">
          <PageHeader className="">About</PageHeader>
          <PageHeaderDescription>
            Big ideas to accelerate culture 200+ years into the future.
          </PageHeaderDescription>
          <BigSubHeader className="italic">
            <span className={cn("font-bold")}>Precipice (n.)</span> — the narrow
            path teetering dangerously close to the edge along a steep cliff
            against a sheer drop-off. The precipice is a metaphor for humanity’s
            future and relationship with technology, itself, and its place in
            the cosmos. Coined by Toby Ord.
          </BigSubHeader>
          <BigSubHeader className={cn("mt-6")}>
            You can feel it around you. Our species is on the brink. Before us,
            a long, slippery, narrow bridge over the abyss. There are no
            guardrails and some planks will collapse if we put our full weight.
            And we are being chased by our demons. Our animalistic and tribal
            nature could be our undoing as much as the choices we make going
            forwards. This is what I call the{" "}
            <span className={cn("font-bold")}>Endgame Crisis</span>.
          </BigSubHeader>
          <Paragraph className={cn("pt-6")}>
            Inspired but unaffiliated with Toby Ord’s,{" "}
            <span className={cn("")}>The Precipice</span>. This content has been
            shaped by a wide range of thought, perspectives, and experiences.
          </Paragraph>
        </div>
      </div>
    </section>
    // <div className="container">
    //   <PageHeader data-aos="fade-in" className="h-fit md:h-fit">
    //     <div className="flex flex-col mx-auto gap-4">
    //       <PageHeaderHeading className="">About</PageHeaderHeading>
    //       <PageHeaderDescription>
    //         The next-generation of web has come, but it is not uniform, safe,
    //         accessible, trustworthy, seamless, nor usable.
    //       </PageHeaderDescription>
    //     </div>
    //   </PageHeader>
    // </div>
  );
}
