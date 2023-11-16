// import contentfulApiInstance, { ContentfulApi } from "@/lib/contentfulApi";
// import { BlogContent } from "./blog-content";
// import { Metadata, ResolvingMetadata } from "next";
// import { siteConfig } from "@/config/site";
// import { notFound } from "next/navigation";

// export const dynamicParams = true;

// type Props = {
//   params: { post: string };
//   searchParams?: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const post = await contentfulApiInstance.fetchBlogBySlug(params.post);

//   if (!post) {
//     notFound();
//   }

//   return {
//     title: `${post.title}`,
//     description: `${post.subtitle}`,
//     openGraph: {
//       type: "article",
//       url: `${siteConfig.url}/blog/${params.post}`,
//       title: `${post.title}`,
//       description: `${post.subtitle}`,
//       publishedTime: `${post.date}`,
//       siteName: siteConfig.name,
//       authors: ["Thorium"],
//       images: [
//         {
//           url: `${post.coverImage?.imageUrl}`,
//           width: 1200,
//           height: 630,
//           alt: `${post.title}`,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: `${post.title}`,
//       description: `${post.subtitle}`,
//       images: [`${post.coverImage?.imageUrl}`],
//     },
//   };
// }

// export async function generateStaticParams() {
//   const contentful = new ContentfulApi();
//   const paths = await contentful.getPaths();
//   return paths;
// }

// type Params = {
//   slug: string;
// };

// async function getPost(params: Params) {
//   // const contentful = new ContentfulApi(preview);
//   const post = await contentfulApiInstance.fetchBlogBySlug(params?.slug);
//   if (!post) {
//     notFound();
//   }

//   return post;
// }

// export type TBlogContent = Awaited<ReturnType<typeof getPost>>;

// export default async function BlogContentPage({ params }: Props) {
//   await generateMetadata({ params });
//   const post = await getPost(params);

//   return <BlogContent post={post} />;
// }
