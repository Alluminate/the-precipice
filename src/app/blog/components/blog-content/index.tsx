// @ DEV This is the page that should render the blog content

import Link from "next/link";
import { Icons } from "@/components/icons";
import { ContentfulImage } from "@/components/ui/contentful-image";
import { PageHeader } from "@/components/elements";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextOptions } from "@/lib/richtext-options";
import { TBlogContent } from "../../[tagSlug]/[postSlug]/page";
import {
  BlogPageTitle,
  BlogPageFiledUnder,
  BlogExcerpt,
  BlogParagraph,
  BlogBio,
} from "@/components/elements";

interface BlogContentProps {
  post: TBlogContent;
}

export function BlogContent({
  post: { coverImage, tag, title, subtitle, date, content },
}: BlogContentProps) {
  return (
    <div>
      {/* @DEV Change this to a BlogContentPageCover component */}
      <div className="items-start w-full">
        <div className="relative">
          {coverImage && (
            <div className="inset-0 z-0">
              <ContentfulImage
                src={coverImage?.imageUrl}
                width={2000}
                height={1000}
                alt={title}
                // className="md:w-full h-full object-cover"
                className="h-1/2 md:h-full object-cover"
              />
            </div>
          )}

          {/* className="items-start w-full" */}
          <div className="absolute top-0 left-0 md:top-5 md:left-5 z-10 p-4">
            <Link href="/archives" passHref>
              <p className="flex items-center gap-2 cursor-pointer">
                <Icons.arrowLeft size={"1.5em"} /> Go back to the Archives
              </p>
            </Link>
          </div>

          {/* <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center"> */}
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center w-4/5 md:w-3/5">
            {/* <h1 className="text-white text-4xl font-bold">{title}</h1> */}
            <BlogPageTitle>{title}</BlogPageTitle>
            <div className="mt-2 md:mt-5">
              <BlogPageFiledUnder>
                filed under{" "}
                <span className="uppercase ml-2">{tag.title as string}</span>
              </BlogPageFiledUnder>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="container space-y-20 flex flex-col flex-[1_1_65ch] max-w-blog">
        <div className="rounded-md bg-black md:p-8">
          <div className="max-w-2xl mb-16">
            <p className="bg-primary px-4 py-2 rounded inline">
              {tag.title as string}
            </p>
            <h1 className="font-bold text-4xl mt-4 mb-2">{title}</h1>
            <h3 className="text-xl">{subtitle}</h3>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
          <article className="prose max-w-none lg:prose-base prose-headings:text-foreground prose-headings:scroll-pt-28 prose-p:text-foreground prose-code:text-background prose-code:bg-foreground prose-code:rounded-sm prose-code:p-1">
            {documentToReactComponents(content, richTextOptions)}
          </article>
        </div>
      </section>
    </div>
  );
}

// NOTES: this was for an old link that said go back to the blog page — might put it in the top left corner of the cover image

// <PageHeader className="h-fit md:h-fit items-start w-full md:px-0">
// <PageHeader className="items-start w-full">
// <Link href="/blog" passHref>
//   <p className="flex items-center gap-2 cursor-pointer">
//     <Icons.arrowLeft size={"1em"} /> Go back to the blog
//   </p>
// </Link>
// </PageHeader>
