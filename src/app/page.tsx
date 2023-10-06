import Hero from "./home/hero";
import FeaturedArticles from "./home/featured-articles";
import RecentArticles from "./home/recent-articles";

// import ThoriumRadiance from "./home/thorium-radiance";
// import WhereWeShine from "./home/where-we-shine";
// import DevBlog from "./home/dev-blog";
// import Community from "./home/community";

import { ContentfulApi } from "@/lib/contentfulApi";
import { siteConfig } from "@/config/site";

async function getPosts(preview: boolean = false) {
  const contentful = new ContentfulApi(preview);

  let page: number = 1;

  const { blogPosts, total, limit, skip } = await contentful.fetchBlogEntries({
    tag: "",
    skip: (page - 1) * siteConfig.pageSize,
    limit: siteConfig.pageSize,
  });
  return {
    blog: blogPosts,
    total,
    limit,
    skip,
    page,
  };
}

async function getTags(preview: boolean = false) {
  const contentful = new ContentfulApi(preview);
  const tags = await contentful.getAllTags();
  return tags;
}

export default async function Home() {
  // const post = await getPosts();
  // const tags = await getTags();

  return (
    <section className="space-y-20 px-0 mx-0">
      <Hero />
      <FeaturedArticles />
      <RecentArticles />
    </section>
  );
}
