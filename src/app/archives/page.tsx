import { ContentfulApi } from "@/lib/contentfulApi";
import { ArchiveGrid, ArchiveTags, ArchiveList } from "./components";

import { getMetadata } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export const metadata = {
  ...getMetadata({
    title:
      "Archives | The Precipice - Big Ideas to Accelerate Culture 200 Years into the Future",
    description:
      "Longform articles discussing humanity's potential and how you can help us get there..",
    type: "website",
    url: `${siteConfig.url}/archives`,
  }),
};

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
  const contentful = new ContentfulApi();
  let page = 1;

  const { blogPosts, total, limit, skip } = await contentful.fetchBlogEntries({
    tag: "",
    skip: (page - 1) * siteConfig.pageSize,
    limit: siteConfig.pageSize,
  });

  return { blogPosts, total, limit, skip };
}

export default async function ArchivesPage({ params, searchParams }: Props) {
  const tags = await getTags();
  const { blogPosts } = await getPosts({ params, searchParams });

  return (
    <section className="flex flex-col items-center  space-y-20 px-0 mx-2 md:mx-4 lg:mx-6 xl:mx-8 2xl:mx-12 min-h-screen">
      <div className="w-full md:w-10/12 lg:w-9/12 2xl:w-8/12">
        <ArchiveTags tags={tags} />
        {/* <ArchiveGrid blog={blogPosts} /> */}
        <ArchiveList blog={blogPosts} />
      </div>
    </section>
  );
}
