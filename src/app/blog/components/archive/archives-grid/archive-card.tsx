"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FetchAllBlogEntriesBlogPostType } from "@/types/types";

export interface ArchiveCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  slug: string;
}

export const ArchiveCard = ({
  coverImage,
  title,
  subtitle,
  slug,
  date,
  tag,
}: FetchAllBlogEntriesBlogPostType) => {
  let titleDisplay;
  const tagTitle = tag.title;
 typeof title === "string" ? titleDisplay = title : titleDisplay = "Placeholder Title";

  return (
    <Link className="inline-grid" href={`/blog/${slug}`} passHref>
      <Card className="flex flex-col bg-black border border-primary shadow-none hover:shadow-primary hover:shadow-md transition-shadow">
        <CardContent className="space-y-3 flex-1 flex flex-col pt-6 ">
          <Image
            className="self-center rounded object-cover"
            src={`${coverImage?.imageUrl}`}
            width={360}
            height={120}
            alt={title}
          />
          <div className="flex items-center gap-2">
            <span className="bg-primary rounded p-2 text-sm">{tagTitle as string}</span>
            <span className="text-sm">{date}</span>
          </div>
          <h4 className="text-base uppercase font-bold">{titleDisplay}</h4>
          <p className="line-clamp-3">{subtitle}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
