// @ DEV this renders the blog posts through a map function

import { TBlogContent } from "../../[tagSlug]/[postSlug]/page";
import { BlogCard } from "./blog-card";

interface BlogGridProps {
  blog: TBlogContent[];
}

export function BlogGrid({ blog }: BlogGridProps) {
  return blog.length === 0 ? (
    <div className="w-full md:w-[736px] lg:w-[948px] h-80 text-3xl text-center grid place-items-center">
      No blog posts found
    </div>
  ) : (
    <section className="grid grid-cols-holy-grail gap-4">
      {blog.map((item) => (
        <BlogCard key={item.id} {...item} />
      ))}
    </section>
  );
}
