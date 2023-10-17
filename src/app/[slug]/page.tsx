import { ContentfulApi, BlogPost } from "@/lib/contentfulApi";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { useRouter, notFound } from "next/navigation"; // Keep using next/navigation as per the error message
import { siteConfig } from "@/config/site";
import { getMetadata } from "@/lib/utils";

const DynamicClientComponent = dynamic(
  () => import("@/app/[slug]/clientsidecomponent"),
  { ssr: false }
);

type Props = {
  initialPosts: BlogPost[];
  slug: string;
};

type Metadata = {
  title: string;
  description: string;
  openGraph: {
    type: string;
    url: string;
    title: string;
    description: string;
    siteName: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
  };
  // ... other properties
};

type TagMetadataProps = {
  params: { title: string; slug: string; description: string };
};

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: TagMetadataProps): Promise<Metadata> {
  const contentful = new ContentfulApi();
  const tagPosts = await contentful.fetchBlogPostsByTag(params.slug);

  if (!tagPosts || tagPosts.length === 0) {
    // Handle the case when no posts are found
    return {
      title: `No articles found for tag: ${params.slug}`,
      description: `There are no articles associated with the tag ${params.slug} on Your Site Name.`,
      // ... other metadata properties with default or error values
    };
  }

  // Assuming the first post has the tag information you need
  const tag = tagPosts[0].tag;

  return {
    title: `Articles tagged: ${tag.title}`,
    description:
      tag.description ||
      `Explore articles related to ${tag.title} on Your Site Name.`,
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/tags/${params.slug}`,
      title: `Articles tagged: ${tag.title}`,
      description: tag.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `Articles tagged: ${tag.title}`,
      description: tag.description,
    },
    // ... Add more metadata properties as per your SEO strategy
  };
}

export async function generateStaticParams() {
  const contentful = new ContentfulApi();
  const paths = await contentful.getPaths();
  return paths;
}

type Params = {
  slug: string;
};

async function getPosts(params: Params) {
  const contentful = new ContentfulApi();
  const posts = await contentful.fetchBlogPostsByTag(params?.slug);
  if (!posts || posts.length === 0) {
    notFound(); // Please ensure this function behaves as expected
  }

  return posts;
}

export default async function TagPage({ params }: Props) {
  await generateMetadata({ params });
  const posts = await getPosts(params);

  return <DynamicClientComponent initialPosts={posts} slug={params.slug} />;
}

// export default function TagPage({ initialPosts, slug }: Props) {
//     const router = useRouter();

//     if (router.isFallback) {
//       return <div>Loading...</div>; // Or a loading spinner/component
//     }

//     return (
//       <>
//         <DynamicClientComponent initialPosts={initialPosts} slug={slug} />
//       </>
//     );
//   }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = await generateStaticParams();
//   return { paths, fallback: true };
// };

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
//   const slug = params?.slug as string | undefined;
//   let initialPosts: BlogPost[] = [];

//   if (slug) {
//     try {
//       initialPosts = await contentfulApiInstance.fetchBlogPostsByTag(slug);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   }

//   return {
//     props: { initialPosts, slug: slug || "" },
//     revalidate: 1,
//   };
// };
