import contentfulApiInstance, { ContentfulApi } from "@/lib/contentfulApi";
import { Metadata } from "next";
import { detailedServerLogger } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { FetchAllBlogEntriesReturnType } from "@/types/types";

export const dynamicParams = false;

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getAllPosts() {
  const blogPosts: FetchAllBlogEntriesReturnType =
    await contentfulApiInstance.fetchAllBlogEntries();

  return blogPosts;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blogPosts = await getAllPosts();

  if (!blogPosts) {
    return null;
  }

  return (
    <>
      <div className="p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">All Posts</h1>
        <h2 className="text-3xl my-2">Total Posts: {blogPosts?.total}</h2>
        {blogPosts &&
          blogPosts?.blogPosts.map((post) => {
            return (
              <div
                key={post.id}
                className="mb-10 p-4 rounded shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-lg text-gray-700 mb-1">
                  Subtitle: {post.subtitle}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  Published: {post.date}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  By: {post.author?.fields.name as string}
                </p>
                {/* <p className="text-sm text-gray-500">Tag: {tagSlug}</p> */}
              </div>
            );
          })}
      </div>
    </>
  );
}
