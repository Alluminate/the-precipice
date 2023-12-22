"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/recent-article-layout";
import { Button } from "@/components/ui/button";
import {
  PreviewCardExcerpt,
  PreviewCardTitle,
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
  RecentCardProps & { customWidth?: string; customBgClass?: string }
> = ({
  imageUrl,
  title,
  subtitle,
  link,
  tag,
  delay,
  customBgClass = "bg-color-0",
  customWidth = "",
  // isTopCard,
}) => {
  const isMobile = useIsMobile();
  const imageSource = imageUrl.includes(".png")
    ? imageUrl
    : `/assets/home/${imageUrl}.png`;

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
              src={imageSource}
              width={250}
              height={250}
              alt={title}
            />
          </div>

          <div className={"relative w-full md:w-6/12 md:pl-5"}>
            <PreviewCardTitle>{title}</PreviewCardTitle>
            <PreviewCardExcerpt className={cn("pt-2 lg:pt-4")}>
              {subtitle}
            </PreviewCardExcerpt>
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
