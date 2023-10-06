"use client";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BlogCardExcerpt, BlogCardTitle } from "@/components/elements";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks";

// TODO: Change imageURL to have imageUrlSmall and imageUrlLarge

export interface FeaturedCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  link: string;
  //   learnMoreList: string[];
  //   button: {
  //     label: string;
  //     link: string;
  //   }
  delay: number;
}

export const FeaturedCard: React.FC<
  FeaturedCardProps & { customWidth?: string }
> = ({
  imageUrl,
  title,
  subtitle,
  link,
  delay,
  customWidth = "",
  isTopCard,
}) => {
  const isMobile = useIsMobile();

  return (
    <Card
      data-aos="fade-up"
      data-aos-delay={isMobile ? null : delay}
      // className="pt-3 border-0 flex flex-col flex-[0_0_calc(33.33% - 40px)] m-5 w-full sm:w-80 items-center lg:items-start"
      //   className="pt-3 flex flex-col m-0 w-full md:w-1/2 lg:w-1/3 items-center lg:items-start"
      //   className={`pt-3 flex flex-col m-5 w-full md:w-1/2 lg:w-1/3 items-center lg:items-start ${customWidth}`}
      // className={`pt-3 flex flex-col m-1 lg:mx-2 w-full ${customWidth} items-center lg:items-center`}
      className={`pt-3 flex m-1 lg:mx-2 w-full ${customWidth} `}
    >
      <Link
        href={link}
        className={cn("px-0 mx-0")}
        //   className={cn(buttonVariants({ variant: "outline" }), "gap-1")}
      >
        {/* <CardContent className="space-y-4 flex-1 flex flex-col"> */}

        <CardContent
          className={`space-y-4 flex-1 flex flex-col ${
            isTopCard ? "md:flex-row" : "md:flex-col"
          }`}
        >
          <div className={`${isTopCard ? "2xl:w-7/12" : ""}`}>
            <Image
              className="articlePreviewImage"
              src={`/assets/home/${imageUrl}.png`}
              width={250}
              height={250}
              alt={title}
            />
          </div>

          <div className={`${isTopCard ? "pl-5 2xl:w-5/12" : ""}`}>
            <BlogCardTitle>{title}</BlogCardTitle>
            <BlogCardExcerpt className={cn("pt-2 lg:pt-4")}>
              {subtitle}
            </BlogCardExcerpt>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

// <Icons.arrowRight size={'1em'} />

{
  /* <div>
<h6>Learn More:</h6>
<ul className="list-disc list-outside pl-5">
{learnMoreList.map((item, index) => <li key={index} className="text-primary">{item}</li>)}
</ul>
</div> */
}
