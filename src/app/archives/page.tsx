import contentfulApiInstance, { ContentfulApi } from "@/lib/contentfulApi";
import { ArchiveGrid, ArchiveTags, ArchiveList } from "./components";
import { PageHeader } from "@/components/elements";

import { getMetadata } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { FetchAllBlogEntriesReturnType } from "@/types/types";

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
  const tags = await contentfulApiInstance.getAllTags();

  return tags;
}

async function getAllPosts() {
  const blogPosts: FetchAllBlogEntriesReturnType =
    await contentfulApiInstance.fetchAllBlogEntries();

  return blogPosts;
}

// async function getPosts({ params, searchParams }: Props) {
//   let page = 1;

//   const data = await contentfulApiInstance.fetchBlogEntries({
//     tag: "",
//     skip: (page - 1) * siteConfig.pageSize,
//     limit: siteConfig.pageSize,
//   });

//   if (!data) {
//     return {
//       blogPosts: [],
//       total: 0,
//       limit: 0,
//       skip: 0,
//     };
//   }

//   const { blogPosts, total, limit, skip } = data;

//   return { blogPosts, total, limit, skip };
// }

const ArchiveHeader = () => {
  return (
    <div className="flex mt-12">
      <div className="h-fit md:h-fit items-start w-full md:w-[736px] lg:w-[948px] md:px-0 leading-relaxed mt-12 mb-4">
        <div className="flex flex-col items-start gap-4 w-full">
          <PageHeader className="">Pieces by Topics</PageHeader>
        </div>
      </div>
    </div>
  );
};

export default async function ArchivesPage() {
  const blogPosts = await getAllPosts();

  if (!blogPosts) {
    return null;
  }

  return (
    <section className="flex flex-col items-center space-y-20 px-0 mx-2 md:mx-4 lg:mx-6 xl:mx-8 2xl:mx-12 min-h-screen">
      <div className="w-full md:w-10/12 lg:w-9/12 2xl:w-8/12">
        {/* <ArchiveTags tags={tags} /> */}
        <ArchiveHeader />
        {/* <ArchiveGrid blog={blogPosts} /> */}
        <ArchiveList blog={blogPosts?.blogPosts} />
      </div>
    </section>
  );
}
