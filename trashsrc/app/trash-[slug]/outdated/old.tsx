import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import contentfulApiInstance from "@/lib/contentfulApi";
import { BlogPost } from "@/lib/contentfulApi";
import { getMetadata } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface TagPageProps {
  initialPosts: BlogPost[];
}

export default function TagPage({ initialPosts }: TagPageProps) {
  console.log("Data in TagPage:", initialPosts);
  const router = useRouter();
  const { slug } = router.query;
  // const { tag } = router.query; // 'tag' must match the filename '[tag].tsx'
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

  // const metadata = {
  //   ...getMetadata({
  //     title:
  //       "Archives | The Precipice - Big Ideas to Accelerate Culture 200 Years into the Future",
  //     description:
  //       "Longform articles discussing humanity's potential and how you can help us get there..",
  //     type: "website",
  //     url: `${siteConfig.url}/${slug}`,
  //   }),
  // };

  useEffect(() => {
    if (slug) {
      const fetchPosts = async () => {
        try {
          // Use contentfulApiInstance to call fetchBlogPostsByTag
          const relatedPosts = await contentfulApiInstance.fetchBlogPostsByTag(
            slug as string
          );
          setPosts(relatedPosts);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
      fetchPosts();
    }
  }, [slug]);

  return (
    <>
      <Head>
        <title>{slug} Articles | Your Site Name</title>
        <meta
          name=""
          content="Archives | The Precipice - Big Ideas to Accelerate Culture 200 Years into the Future"
        />
        <meta
          name="description"
          content={`Longform articles discussing humanity's potential and how you can help us get there ${slug} on Your Site Name.`}
        />
        <meta name="type" content="website" />
        <meta name="url" content={`${siteConfig.url}/tags/${slug}`} />
        <meta name="keywords" content={`${slug}, articles, blog`} />
      </Head>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts tagged: {slug}</h1>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<TagPageProps> = async (
  context
) => {
  const slug = context.params?.slug;
  console.log("Slug:", slug); // Debug the slug
  let initialPosts: BlogPost[] = []; // Specifying the type here

  if (typeof slug === "string") {
    console.log("Fetching posts for:", slug); // Debug the fetching operation
    try {
      initialPosts = await contentfulApiInstance.fetchBlogPostsByTag(slug);
      console.log("Fetched Posts:", initialPosts); // Debug the fetched data
    } catch (error) {
      console.error("Error fetching posts:", error); // Debug potential fetching error
    }
  }

  return {
    props: { initialPosts },
  };
};

//
//
//
//
//

// //
// {posts.length ? (
//   posts.map((post) => (
//     // ...render post
//   ))
// ) : (
//   <p>No posts found for tag: {slug}</p>
// )}
// <ul>
// {posts.map((post) => (
//   <li key={post.id} className="mb-4">
//     {/* <Link href={`/blog/${post.slug}`}> */}
//     <Link href={`/blog/${post.slug}`}>
//       <p className="text-lg hover:underline">{post.title}</p>
//     </Link>
//   </li>
// ))}
// </ul>

// import { GetServerSideProps } from "next";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { fetchBlogPostsByTag } from "@/lib/contentfulApi"; // <-- You may need to implement this
// import { BlogPost } from "@/lib/contentfulApi";

// interface TagPageProps {
//   initialPosts: BlogPost[];
// }

// export default function TagPage({ initialPosts }: TagPageProps) {
//   const router = useRouter();
//   const { tag: tagSlug } = router.query;
//   const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
//   // const [posts, setPosts] = useState([]);

//   // Fetch more posts on client-side navigation
//   //   useEffect(() => {
//   //     if (Array.isArray(tagSlug)) return; // If tag is an array, ignore (can happen with Next.js dynamic routes)
//   //     fetchBlogPostsByTag(tagSlug).then(setPosts);
//   //   }, [tagSlug]);

//   useEffect(() => {
//     if (tagSlug) {
//       // Assuming fetchBlogPostsByTag is an async function
//       const fetchPosts = async () => {
//         try {
//           const relatedPosts = await fetchBlogPostsByTag(tagSlug);
//           setPosts(relatedPosts);
//         } catch (error) {
//           console.error("Error fetching posts:", error);
//         }
//       };

//       fetchPosts();
//     }
//   }, [tagSlug]);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Posts tagged: {tagSlug}</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id} className="mb-4">
//             <Link href={`/blog/${post.slug}`}>
//               <a className="text-lg hover:underline">{post.title}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export const getServerSideProps: GetServerSideProps<TagPageProps> = async (
//   context
// ) => {
//   const tag = context.params?.tag;
//   let initialPosts = [];

//   if (typeof tag === "string") {
//     initialPosts = await fetchBlogPostsByTag(tag);
//   }

//   return {
//     props: { initialPosts },
//   };
// };
