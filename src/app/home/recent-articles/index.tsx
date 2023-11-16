import contentfulApiInstance, { ContentfulApi } from "@/lib/contentfulApi";
// import { data } from "./sample-data";
import { RecentCard, RecentCardProps } from "./recent-card";
import { Button, ButtonVariants } from "@/components/ui/button";
import { Paragraph } from "@/components/elements";
import {
  FetchAllBlogEntriesBlogPostType,
  FetchAllBlogEntriesReturnType,
} from "@/types/types";

// ADDED FUNCTIONS

const contentful = new ContentfulApi();
export async function generateStaticParams() {
  const paths = await contentful.getTagPaths();
  console.log("paths!", paths);
  return paths;
}

export const dynamicParams = false;

async function getAllPosts() {
  const blogPosts: FetchAllBlogEntriesReturnType =
    await contentfulApiInstance.fetchAllBlogEntries();

  return blogPosts;
}

function convertToRecentCardProps(
  blogPost: {
    coverImage: { imageUrl: string };
    title: any;
    subtitle: any;
    tag: { slug: any; title: string };
    slug: any;
  },
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

// FOR RECENT ARTICLES

const bgColorClasses = ["bg-color-0", "bg-color-1", "bg-color-2", "bg-color-3"];

export default async function RecentArticles() {
  // const blogPosts = await getAllPosts();

  // if (!blogPosts) {
  //   return null;
  // }

  // const sortedPosts = blogPosts.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));

  const blogPostsData = await getAllPosts();

  if (!blogPostsData || !blogPostsData.blogPosts) {
    return null;
  }

  const sortedPosts = blogPostsData.blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const recentPosts = sortedPosts.slice(0, 5);

  return (
    // <section className="container my-0 px-0 mx-0">
    // <section className="my-0 px-0 mx-0">
    // <div className="flex justify-start md:justify-center flex-wrap md:gap-8 my-0 px-0 mx-0">
    <div className="flex flex-col">
      <div className="text-center mb-5">
        <p className="text-xl lg:text-2xl xl:text-3xl uppercase font-firaSansCondensed font-extrabold md:text-md lg:leading-[1.1]">
          Recent Articles
        </p>
      </div>
      <div className="2xl:flex 2xl:mx-auto">
        <div className="hidden 2xl:block 2xl:w-1/12" />
        <div className="flex flex-wrap justify-start md:justify-center gap-0 px-0 mx-0 2xl:mx-12 2xl:w-10/12">
          {recentPosts &&
            recentPosts?.map((post, index) => {
              if (!post) return null;
              const recentBlogPost = convertToRecentCardProps(post, 0);
              return (
                <div key={post.id} className="mb-6">
                  <RecentCard
                    {...recentBlogPost}
                    customBgClass={
                      bgColorClasses[index % bgColorClasses.length]
                    }
                  />
                </div>
              );
            })}
        </div>
        <div className="hidden 2xl:block 2xl:w-1/12" />
      </div>
      <div className="text-center mt-8">
        <Paragraph className="mb-5">Showing 5 of 25</Paragraph>
        <Button className="uppercase py-2 px-10">See All Pieces</Button>
      </div>
    </div>
    // </section>
  );
}
