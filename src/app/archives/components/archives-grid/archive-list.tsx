import Link from "next/link";
import { ColoredSeparator } from "@/components/ui/separator";
import {
  ArchivePageBlogTitle,
  ArchivePageTagTitle,
  Paragraph,
} from "@/components/elements";
import { Button } from "@/components/ui/button";
import { TGetPostsReturnType } from "../../page";

interface ArchiveListProps {
  blog: TGetPostsReturnType["blogPosts"];
}

// Helper function to group posts by their tag
function groupPostsByTag(posts: TGetPostsReturnType["blogPosts"]) {
  return posts.reduce((acc, post) => {
    const tagSlug = post.tag.slug;
    if (!acc[tagSlug]) {
      acc[tagSlug] = [];
    }
    acc[tagSlug].push(post);
    return acc;
  }, {} as { [key: string]: TGetPostsReturnType["blogPosts"] });
}

export function ArchiveList({ blog }: ArchiveListProps) {
  if (blog.length === 0) {
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
        const firstPostTitle = posts[0].title;
        const tagTitle = posts[0].tag.title;

        return (
          <section key={slug} className="mt-6">
            <ArchivePageTagTitle className="text-2xl mb-6">
              {firstPostTitle}
            </ArchivePageTagTitle>
            <ColoredSeparator color="grey" className="mb-6" />
            <ul>
              {posts.map((post) => (
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
            <Link href={`/${slug}`}>
              <Button variant="default" className="uppercase">
                See all {tagTitle} posts
              </Button>
            </Link>
          </section>
        );
      })}
    </div>
  );
}
