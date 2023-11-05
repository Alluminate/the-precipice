import { contentfulApiInstance } from "@/lib/contentfulApi";
import { GetStaticPaths, GetStaticProps, Metadata } from "next";
import { useRouter } from "next/router";
import { BlogPost } from "@/lib/contentfulApi";
import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";
import Head from "next/head";
import { useEffect, useState } from "react";

// import { BlogContent } from "../components";

// type Props = {
//   params: { slug: string };
//   searchParams?: { [key: string]: string | string[] | undefined };
// };

type Props = {
  initialPosts: BlogPost[];
  slug: string;
};

// type Metadata = {
//   title: string;
//   description: string;
//   //... other properties as per your use case.
// };

type TagMetadataProps = {
  params: { title: string; slug: string; description: string };
};

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: TagMetadataProps): Promise<Metadata> {
  const contentful = new contentfulApiInstance();
  const tag = await contentful.fetchBlogPostsByTag(params.slug);
  //   const post = await contentful.fetchBlogBySlug(params.slug);

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
  const contentful = new contentfulApiInstance();
  const paths = await contentful.getPaths();
  return paths;
}

type Params = {
  slug: string;
};

async function getPost(params: Params) {
  // const contentful = new ContentfulApi(preview);
  const contentful = new contentfulApiInstance();
  const post = await contentful.fetchBlogBySlug(params?.slug);
  if (!post) {
    notFound();
  }

  return post;
}

// export default async function BlogContentPage({ params }: Props) {
//   await generateMetadata({ params });
//   const post = await getPost(params);

//   return <BlogContent post={post} />;
// }

export default function TagPage({ initialPosts, slug }: Props) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const router = useRouter();

  useEffect(() => {
    if (!router.isFallback && posts.length === 0) {
      const fetchPosts = async () => {
        try {
          const relatedPosts = await contentfulApiInstance.fetchBlogPostsByTag(
            slug
          );
          setPosts(relatedPosts);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
      fetchPosts();
    }
  }, [router.isFallback, posts, slug]);

  if (router.isFallback) {
    return <div>Loading...</div>; // Or a loading spinner/component
  }
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts tagged: {slug}</h1>
        {posts.map((post) => (
          <div key={post.id} className="mb-6">
            <h2 className="text-xl">{post.title}</h2>
            {/* Render other post details */}
          </div>
        ))}
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await generateStaticParams();

  return {
    paths,
    fallback: true, // 'blocking' to make sure the page is generated at request time if not generated at build time
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string | undefined;
  let initialPosts: BlogPost[] = [];

  if (slug) {
    try {
      initialPosts = await contentfulApiInstance.fetchBlogPostsByTag(slug);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  return {
    props: { initialPosts, slug: slug || "" },
    revalidate: 1,
  };
};
