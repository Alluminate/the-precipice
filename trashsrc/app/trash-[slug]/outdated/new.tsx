import { contentfulApiInstance } from "@/lib/contentfulApi";
import { GetStaticPaths, GetStaticProps } from "next";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { BlogPost } from "@/lib/contentfulApi";
import { siteConfig } from "@/config/site";

const DynamicClientComponent = dynamic(() => import("../clientsidecomponent"), {
  ssr: false,
});

type Props = {
  initialPosts: BlogPost[];
  slug: string;
};

type Metadata = {
  title: string;
  description: string;
};

type TagMetadataProps = {
  params: { title: string; slug: string; description: string };
};

export const dynamicParams = true;

export default function TagPage({ initialPosts, slug }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>; // Or a loading spinner/component
  }

  return (
    <>
      <DynamicClientComponent initialPosts={initialPosts} slug={slug} />
    </>
  );
}

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
