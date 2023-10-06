"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  BlogCardExcerpt,
  BlogCardTitle,
  Paragraph,
} from "@/components/elements";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks";

// TODO: Change imageURL to have imageUrlSmall and imageUrlLarge

export interface RecentCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  link: string;
  tag: string;
  delay: number;
}

export const RecentCard: React.FC<
  RecentCardProps & { customWidth?: string }
> = ({
  imageUrl,
  title,
  subtitle,
  link,
  tag,
  delay,
  customBgClass,
  customWidth = "",
  // isTopCard,
}) => {
  const isMobile = useIsMobile();

  return (
    <Card
      data-aos="fade-up"
      data-aos-delay={isMobile ? null : delay}
      className={`pt-3 flex m-1 lg:mx-2 w-full ${customBgClass}`}
    >
      <Link href={link} className={cn("px-0 mx-0")}>
        <CardContent className={`space-y-4 flex-1 flex flex-col md:flex-row`}>
          <div className={"w-full md:w-5/12"}>
            <Image
              className="articlePreviewImage"
              src={`/assets/home/${imageUrl}.png`}
              width={250}
              height={250}
              alt={title}
            />
          </div>

          <div className={"relative w-full md:w-6/12 md:pl-5"}>
            <BlogCardTitle>{title}</BlogCardTitle>
            <BlogCardExcerpt className={cn("pt-2 lg:pt-4")}>
              {subtitle}
            </BlogCardExcerpt>
            <div className={"mt-4 md:mt-0 md:absolute md:bottom-0"}>
              <Button>
                <Paragraph>{tag}</Paragraph>
              </Button>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
