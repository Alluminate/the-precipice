import Link from "next/link";
import { ColoredSeparator } from "@/components/ui/separator";
import {
  ArchivePageBlogTitle,
  ArchivePageTagTitle,
  Paragraph,
} from "@/components/elements";
import { Button } from "@/components/ui/button";
import { FetchAllBlogEntriesBlogPostType, FetchAllBlogEntriesReturnType } from "@/types/types";

interface ArchiveListProps {
  blog: NonNullable<FetchAllBlogEntriesReturnType>["blogPosts"];
}

function groupPostsByTag(posts: NonNullable<FetchAllBlogEntriesReturnType>["blogPosts"]) {
  const grouped = posts.reduce(
    (acc, post) => {
      const tagSlug = post.tag.slug as string;
      if (!acc[tagSlug]) {
        acc[tagSlug] = [];
      }
      acc[tagSlug].push(post);
      return acc;
    },
    {} as { [key: string]: NonNullable<FetchAllBlogEntriesReturnType>["blogPosts"] }
  );

  const emptyPostElement = {} as FetchAllBlogEntriesBlogPostType;

  //Adding empty elements to groups with less than 3 posts
  Object.keys(grouped).forEach(tagSlug => {
    const group = grouped[tagSlug];
    if (group.length > 3) {
      // Slice the group to only include the first 3 posts
      grouped[tagSlug] = group.slice(0, 3);
    } else if (group.length > 0 && group.length < 3) {
      // Add empty elements if there are fewer than 3 posts
      while (group.length < 3) {
        group.push(emptyPostElement);
      }
    }
  });

  return grouped;
}


export function ArchiveList({ blog }: ArchiveListProps) {
  if (blog?.length === 0) {
    return (
      <div className="w-full md:w-[736px] lg:w-[948px] h-80 text-3xl text-center grid place-items-center">
        No blog posts found
      </div>
    );
  }

  const postsByTag = groupPostsByTag(blog);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(postsByTag).map(([slug, posts]) => {
        const tagTitle = posts[0].tag.title;

        return (
          <section key={slug} className="mt-6">
            <ArchivePageTagTitle className="text-2xl mb-6">
              {tagTitle as string}
            </ArchivePageTagTitle>
            <ColoredSeparator color="grey" className="mb-6" />
            <ul>
              {posts.map((post, i) => {
                return (
                  <li key={post.id} className="mb-6">
                    <Link href={`/blog/${slug}/${post.slug}`}>
                      <ArchivePageBlogTitle className="text-lg hover:underline mb-4">
                        {post.title}
                      </ArchivePageBlogTitle>
                    </Link>
                    <ColoredSeparator color="grey" />
                  </li>
                )
            })}
            </ul>
            <Link href={`/blog/${slug}`}>
              <Button variant="default" className="uppercase">
                See all {tagTitle as string} posts
              </Button>
            </Link>
          </section>
        );
      })}
    </div>
  );
}
