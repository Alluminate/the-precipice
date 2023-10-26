// @ DEV : this is an older blog page meant to render a grid of blog posts on a separate /blog page. Which isn't the structure I have now.

import contentfulApiInstance, { ContentfulApi } from "@/lib/contentfulApi";
import { BlogGrid, Header } from "./components";
import { siteConfig } from "@/config/site";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getTags() {
  const contentful = new ContentfulApi();
  const tags = await contentful.getAllTags();

  return tags;
}

async function getPosts({ params, searchParams }: Props) {
  let page = 1;

  const data = await contentfulApiInstance.fetchBlogEntries({
    tag: "",
    skip: (page - 1) * siteConfig.pageSize,
    limit: siteConfig.pageSize,
  });

  if (!data) {
    return {
      blogPosts: [],
      total: 0,
      limit: 0,
      skip: 0,
    };
  }
  
  const { blogPosts, total, limit, skip } = data;

  return { blogPosts, total, limit, skip };
}

export default async function Blog({ params, searchParams }: Props) {
  const tags = await getTags();
  const { blogPosts } = await getPosts({ params, searchParams });

  return (
    <section className="container space-y-20">
      <Header tags={tags} />
      <BlogGrid blog={blogPosts} />
    </section>
  );
}
