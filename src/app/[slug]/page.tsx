import { BlogPost, ContentfulApi } from "@/lib/contentfulApi";
import { RecentCard, RecentCardProps } from "../home/recent-articles/recent-card";
import { Metadata } from 'next';
import { detailedServerLogger } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const contentful = new ContentfulApi();
export async function generateStaticParams() {
    const paths = await contentful.getPaths();
    console.log('paths!', paths);
    return paths;
}

export const dynamicParams = false;

function convertToRecentCardProps(blogPost: BlogPost, delay: number): RecentCardProps {
  return {
    imageUrl: blogPost.coverImage ? blogPost.coverImage.imageUrl : '', 
    title: blogPost.title,
    subtitle: blogPost.subtitle,
    link: `/path-to-blog/${blogPost.slug}`, 
    tag: typeof blogPost.tag === 'string' ? blogPost.tag : blogPost.tag.title,
    delay: delay
  };
}

export async function generateMetadata({
  params: { slug },
}: { params: { slug: string }}): Promise<Metadata> {
  const tag = await contentful.getTagInfoBySlug(slug);

  return {
    title: `Articles tagged: ${slug}`,
    description:
      `Explore articles related to ${tag.fields.title} on Your Site Name.`,
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/tags/${slug}`,
      title: `Articles tagged: ${tag.fields.title}`,
      description: `Articles tagged: ${tag.fields.title}`,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `Articles tagged: ${tag.fields.title}`,
    description: `Articles tagged: ${tag.fields.title}`,
    },
  };
}


export default async function Page({ params }: {params : {slug: string} }) {

    const { slug } = params;

    const postData = await contentful.fetchBlogPostsByTag(slug.toLowerCase())
    const tagInfo = await contentful.getTagInfoBySlug('nanoforge')
    return (
        <>
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Posts tagged: {slug}</h1>
            {postData.map((post) => {
              const recentBlogPost = convertToRecentCardProps(post, 0);
              return (
              <div key={post.id} className="mb-6">
                <RecentCard {...recentBlogPost}/>
              </div>
              )
          })}
          </div>
        </>
      );
  }

