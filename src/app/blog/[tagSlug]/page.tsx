import { ContentfulApi } from "@/lib/contentfulApi";
import {
  RecentCard,
  RecentCardProps,
} from "../../home/recent-articles/recent-card";
import { Metadata } from "next";
import { detailedServerLogger } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { FetchAllBlogEntriesBlogPostType } from "@/types/types";
import { PageHeader, PageHeaderDescription } from "@/components/elements";

const contentful = new ContentfulApi();
export async function generateStaticParams() {
  const paths = await contentful.getTagPaths();
  console.log("paths!", paths);
  return paths;
}

export const dynamicParams = false;

function convertToRecentCardProps(
  blogPost: FetchAllBlogEntriesBlogPostType,
  delay: number
): RecentCardProps {
  return {
    imageUrl: blogPost.coverImage ? blogPost.coverImage.imageUrl : "",
    title: blogPost.title,
    subtitle: blogPost.subtitle,
    link: `/blog/${blogPost.tag.slug}/${blogPost.slug}`,
    tag: blogPost.tag.title as string,
    delay: delay,
  };
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const tag = await contentful.getTagInfoBySlug(slug);

  return {
    title: `${tag?.fields.tagName} Articles | The Precipice - Big Ideas to Accelerate Culture 200 Years into the Future`,
    description: `Explore articles related to ${tag?.fields?.tagName}.`,
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/tags/${slug}`,
      title: `Articles tagged: ${tag?.fields.tagName}`,
      description: `Explore articles related to ${tag?.fields.tagName}`,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `Articles tagged: ${tag?.fields.tagName}`,
      description: `Explore articles related to ${tag?.fields.tagName}`,
    },
  };
}

const bgColorClasses = [
  "bg-color-0",
  "bg-color-1",
  "bg-color-2",
  "bg-color-3",
  "bg-color-4",
  "bg-color-5",
  "bg-color-6",
  "bg-color-7",
];

export default async function Page({
  params,
}: {
  params: { tagSlug: string };
}) {
  const { tagSlug } = params;
  console.log(params);

  const postData = await contentful.fetchBlogPostsByTag(tagSlug);
  const tagInfo = await contentful.getTagInfoBySlug("...");

  // @DEV Fix getTagDescriptionBySLug
  // const tagDescription = await contentful.getTagDescriptionBySlug(tagSlug);
  // console.log(`Here's the tag slug: ${tagSlug}`);
  // console.log(`Here's the tag description: ${tagDescription}`);

  return (
    <>
      <div className="p-12">
        <div className="flex flex-col items-start gap-4 w-full">
          <PageHeader className="my-4">{tagSlug}</PageHeader>
          {/* <PageHeaderDescription>{tagDescription}</PageHeaderDescription> */}
        </div>
        {/* <h1 className="text-2xl font-bold mb-4">Posts tagged: {tagSlug}</h1> */}
        {postData.map((post, index) => {
          if (!post) return null;
          const recentBlogPost = convertToRecentCardProps(post, 0);
          return (
            <div key={post.id} className="mb-6">
              <RecentCard
                {...recentBlogPost}
                customBgClass={bgColorClasses[index % bgColorClasses.length]}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
