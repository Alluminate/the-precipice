import Link from "next/link";
import {
  LandingHeader,
  BigSubHeader,
  PageHeader,
  PageHeaderHeading,
  Paragraph,
} from "@/components/elements";
import { buttonVariants } from "@/components/ui/button";
import { calculateRange, cn } from "@/lib/utils";
import { HeroCard } from "./hero-card";
import { data } from "./data";

const MobileImage: React.FC = () => (
  <img
    src="/assets/home/landingheroimagesm.png"
    className="md:hidden block"
    alt="Hero"
  />
);

const DesktopImage: React.FC = () => (
  //   <div
  //     // lg:w-1/2 lg:h-full bg-cover bg-right
  //     className="hidden md:block"
  //     style={{
  //       backgroundImage: `url('/assets/home/landingheroimagelg.png')`,
  //     }}
  //   />
  <img
    src="/assets/home/landingheroimagelg.png"
    className="hidden md:block"
    alt="Hero"
  />
);

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse">
      {/* md:h-full */}
      <div className="flex items-center justify-center md:w-3/5 2xl:pl-2 2xl:w-7/12">
        <MobileImage />
        <DesktopImage />
      </div>
      <div className="p-8 md:pt-8 md:pl-8 xl:pl-10 2xl:pl-12 md:w-2/5 2xl:w-6/12 md:flex md:flex-col md:justify-start md:items-start">
        <LandingHeader className={cn("uppercase mb-2 2xl:pb-2")}>
          The Precipice
        </LandingHeader>
        <BigSubHeader>
          is a longform blog platform fighting for humanity’s destiny with
          dangerously sensible ideas. From{" "}
          <span className={cn("font-bold")}>existential risk</span>, to the{" "}
          <span className={cn("font-bold")}>broken discourse</span>, to our lack
          of <span className={cn("font-bold")}>shared truth</span>, it ascends
          from schools of unorthodox thought to accelerate culture 200+ years
          into the future.
        </BigSubHeader>
        <BigSubHeader className={cn("mt-6")}>
          If you reject the status quo, know you are not alone. Let's journey
          across the brink to the unimaginable that awaits us.
        </BigSubHeader>
        <Paragraph className={cn("pt-6 italic")}>
          Inspired but unaffiliated with Toby Ord’s,{" "}
          <span className={cn("")}>The Precipice</span>. This content has been
          shaped by a wide range of thought, perspectives, and experiences.
        </Paragraph>
      </div>
    </div>
  );
  // <div className="container">
  //   {/* h-fit md:h-fit */}
  //   <LandingHeader className={cn("place-items-start justify-items-start")}>
  //     <span>The Precipice</span>
  //   </LandingHeader>
  // </div>
  //     <div className="relative flex flex-col lg:flex-row-reverse lg:h-screen">
  //   <div
  //     className="lg:w-1/2 lg:h-full flex items-center justify-center bg-cover bg-right"
  //     style={{
  //       backgroundImage: `url('/assets/home/landingheroimagelg.png')`,
  //     }}
  //   >
  //     {/* Mobile image */}
  //     <img
  //       src="/assets/home/landingheroimagesm.png"
  //       className="lg:hidden block"
  //       alt="Hero"
  //     />
  //   </div>
  //   <div className="p-8 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-start">
  //     <LandingHeader className={cn("place-items-start justify-items-start")}>
  //       The Precipice
  //     </LandingHeader>
  //     <BigSubHeader>
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
  //       condimentum...
  //     </BigSubHeader>
  //     <Paragraph>inspired by placeholder text</Paragraph>
  //   </div>
  // </div>
  // relative flex flex-col lg:flex-row-reverse lg:h-screen
}
