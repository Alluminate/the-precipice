import Link from "next/link";
import { Icons } from "@/components/icons";
import { ContentfulImage } from "@/components/ui/contentful-image";
import { PageHeader } from "@/components/elements";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BlogPost } from "@/lib/contentfulApi";
import { richTextOptions } from "@/lib/richtext-options";

interface BlogContentProps {
  post: BlogPost
}

export function BlogContent({ post: { heroImage, tag, title, excerpt, publishedDate, content } }: BlogContentProps) {
  return (
    <section className="container space-y-20 flex flex-col flex-[1_1_65ch] max-w-blog">
      <PageHeader className="h-fit md:h-fit items-start w-full md:px-0">
        <Link href="/blog" passHref>
          <p className="flex items-center gap-2 cursor-pointer">
            <Icons.arrowLeft size={'1em'} /> Go back to the blog
          </p>
        </Link>
        {heroImage?.imageUrl &&
          <div className="-mx-4 sm:mx-0 mt-3">
            <ContentfulImage src={heroImage?.imageUrl} width={2000} height={1000} alt={title} className="rounded-md" />
          </div>
        }
      </PageHeader>
      <div className="rounded-md bg-black md:p-8">
        <div className="max-w-2xl mb-16">
          <p className="bg-primary px-4 py-2 rounded inline">{tag}</p>
          <h1 className="font-bold text-4xl mt-4 mb-2">{title}</h1>
          <h3 className="text-xl">{excerpt}</h3>
          <span className="text-sm text-muted-foreground">{publishedDate}</span>
        </div>
        <article className="prose max-w-none lg:prose-base prose-headings:text-foreground prose-headings:scroll-pt-28 prose-p:text-foreground prose-code:text-background prose-code:bg-foreground prose-code:rounded-sm prose-code:p-1">
          {documentToReactComponents(content, richTextOptions)}
        </article>
      </div>
    </section>
  )
}