// @ DEV This page represents one of the old preview cards to be represented in the grid of blog posts

"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BlogPost } from "@/lib/contentfulApi";

export interface BlogCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  slug: string;
}

export const BlogCard: React.FC<Partial<BlogPost>> = ({
  heroImage,
  title = "blog image",
  excerpt,
  slug,
  publishedDate,
  tag,
}) => {
  return (
    <Link className="inline-grid" href={`/blog/${slug}`} passHref>
      <Card className="flex flex-col bg-black border border-primary shadow-none hover:shadow-primary hover:shadow-md transition-shadow">
        <CardContent className="space-y-3 flex-1 flex flex-col pt-6 ">
          <Image
            className="self-center rounded object-cover"
            src={`${heroImage?.imageUrl}`}
            width={360}
            height={120}
            alt={title}
          />
          <div className="flex items-center gap-2">
            <span className="bg-primary rounded p-2 text-sm">{tag}</span>
            <span className="text-sm">{publishedDate}</span>
          </div>
          <h4 className="text-base uppercase font-bold">{title}</h4>
          <p className="line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="">
          <span className="text-primary cursor-pointer">Read More</span>
        </CardFooter>
      </Card>
    </Link>
  );
};
