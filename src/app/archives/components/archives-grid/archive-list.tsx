import { BlogPost } from "@/lib/contentfulApi";
import Link from "next/link";
import { ColoredSeparator } from "@/components/ui/separator";
import {
  ArchivePageBlogTitle,
  ArchivePageTagTitle,
  Paragraph,
} from "@/components/elements";
import { Button } from "@/components/ui/button";

interface ArchiveListProps {
  blog: BlogPost[];
}

export function ArchiveList({ blog }: ArchiveListProps) {
  if (blog.length === 0) {
    return (
      <div className="w-full md:w-[736px] lg:w-[948px] h-80 text-3xl text-center grid place-items-center">
        No blog posts found
      </div>
    );
  }

  // Identify and group blog posts by tag
  const postsByTag: { [key: string]: BlogPost[] } = {};

  blog.forEach((post) => {
    if (post.tag) {
      if (!postsByTag[post.tag.slug]) {
        postsByTag[post.tag.slug] = [];
      }
      postsByTag[post.tag.slug].push(post);
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.keys(postsByTag).map((tagSlug) => (
        <section key={tagSlug} className="mt-6">
          <ArchivePageTagTitle className="text-2xl mb-6">
            {postsByTag[tagSlug][0].tag.title}
          </ArchivePageTagTitle>
          <ColoredSeparator color="grey" className="mb-6" />
          <ul className="">
            {postsByTag[tagSlug].map((post) => (
              <li key={post.id} className="mb-6">
                <Link href={`/blog/${post.slug}`}>
                  <ArchivePageBlogTitle className="text-lg hover:underline mb-4">
                    {post.title}
                  </ArchivePageBlogTitle>
                </Link>
                <ColoredSeparator color="grey" />
              </li>
            ))}
          </ul>
          {/* Add link to tag */}
          <Link href={`/tags/${tagSlug}`} passHref>
            <Button as="a" variant="default" className="uppercase">
              See all {postsByTag[tagSlug][0].tag.title} posts
            </Button>
          </Link>
        </section>
      ))}
    </div>
  );
}
