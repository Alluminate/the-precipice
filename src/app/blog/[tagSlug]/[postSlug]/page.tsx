import contentfulApiInstance, { ContentfulApi } from "@/lib/contentfulApi";
import { BlogContent } from "../../components";
import { Metadata, ResolvingMetadata } from "next";
import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type Props = {
  params: { tagSlug: string; postSlug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const contentful = new ContentfulApi();
  const paths = await contentful.fetchAllBlogEntries();

  return paths?.blogPosts.map((entry) => {
    return {
      tag: entry.tag.slug ?? "",
      post: entry.slug ?? "",
    };
  });
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tagSlug, postSlug } = params;
  const post = await contentfulApiInstance.fetchBlogBySlug(params.postSlug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.title}`,
    description: `${post.subtitle}`,
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/blog/${tagSlug}/${postSlug}`,
      title: `${post.title}`,
      description: `${post.subtitle}`,
      publishedTime: `${post.date}`,
      siteName: siteConfig.name,
      authors: ["The Precipice"],
      images: [
        {
          url: `${post.coverImage?.imageUrl}`,
          width: 1200,
          height: 630,
          alt: `${post.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title}`,
      description: `${post.subtitle}`,
      images: [`${post.coverImage?.imageUrl}`],
    },
  };
}

async function getPost(postSlug: string) {
  // const contentful = new ContentfulApi(preview);
  const post = await contentfulApiInstance.fetchBlogBySlug(postSlug);
  if (!post) {
    notFound();
  }

  return post;
}

export type TBlogContent = Awaited<ReturnType<typeof getPost>>;

export default async function BlogContentPage({ params }: Props) {
  // Note from Femi: awaiting generateMetadata is not needed,
  // you only need to export it similarly to generateStaticParams

  // await generateMetadata({ params });
  const { postSlug } = params;

  const post = await getPost(postSlug);

  return <BlogContent post={post} />;
}
