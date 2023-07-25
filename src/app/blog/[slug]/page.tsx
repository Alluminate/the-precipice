import { ContentfulApi } from "@/lib/contentfulApi";
import { BlogContent } from "../components";
import { Metadata, ResolvingMetadata } from "next";
import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const contentful = new ContentfulApi();
  const post = await contentful.fetchBlogBySlug(params.slug);

  return {
    title: `${post.title}`,
    description: `${post.excerpt}`,
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/blog/${params.slug}`,
      title: `${post.title}`,
      description: `${post.excerpt}`,
      publishedTime: `${post.publishedDate}`,
      siteName: siteConfig.name,
      authors: ['Thorium'],
      images: [
        {
          url: `${post.heroImage?.imageUrl}`,
          width: 1200,
          height: 630,
          alt: `${post.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title}`,
      description: `${post.excerpt}`,
      images: [`${post.heroImage?.imageUrl}`],
    },
  }
}

export async function generateStaticParams() {
  const contentful = new ContentfulApi();
  const paths = await contentful.getPaths();
  return paths
}

type Params = {
  slug: string;
}

async function getPost(params: Params) {
  // const contentful = new ContentfulApi(preview);
  const contentful = new ContentfulApi();
  const post = await contentful.fetchBlogBySlug(params?.slug);
  if (!post) {
    notFound()
  }

  return post;
}

export default async function BlogContentPage({ params }: Props) {
  await generateMetadata({ params });
  const post = await getPost(params)

  return (
    <BlogContent post={post} />
  )
}
