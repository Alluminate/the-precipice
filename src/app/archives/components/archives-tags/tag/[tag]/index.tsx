import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchBlogPostsByTag } from "@/lib/contentfulApi"; // <-- You may need to implement this
import { BlogPost } from "@/lib/contentfulApi";

interface TagPageProps {
  initialPosts: BlogPost[];
}

export default function TagPage({ initialPosts }: TagPageProps) {
  const router = useRouter();
  const { tag: tagSlug } = router.query;
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  // const [posts, setPosts] = useState([]);

  // Fetch more posts on client-side navigation
  //   useEffect(() => {
  //     if (Array.isArray(tagSlug)) return; // If tag is an array, ignore (can happen with Next.js dynamic routes)
  //     fetchBlogPostsByTag(tagSlug).then(setPosts);
  //   }, [tagSlug]);

  useEffect(() => {
    if (tagSlug) {
      // Assuming fetchBlogPostsByTag is an async function
      const fetchPosts = async () => {
        try {
          const relatedPosts = await fetchBlogPostsByTag(tagSlug);
          setPosts(relatedPosts);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };

      fetchPosts();
    }
  }, [tagSlug]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts tagged: {tagSlug}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={`/blog/${post.slug}`}>
              <a className="text-lg hover:underline">{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<TagPageProps> = async (
  context
) => {
  const tag = context.params?.tag;
  let initialPosts = [];

  if (typeof tag === "string") {
    initialPosts = await fetchBlogPostsByTag(tag);
  }

  return {
    props: { initialPosts },
  };
};
