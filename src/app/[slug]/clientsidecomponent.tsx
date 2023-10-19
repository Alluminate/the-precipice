"use client";

// ClientSideComponent.tsx
import React, { useEffect, useState } from "react";
import { ContentfulApi } from "@/lib/contentfulApi";
import { BlogPost } from "@/lib/contentfulApi";

type ClientSideComponentProps = {
  initialPosts: BlogPost[];
  slug: string;
};

const ClientSideComponent = ({
  initialPosts,
  slug,
}: ClientSideComponentProps) => {
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    // Only fetch posts client-side if no posts were provided during SSR/SSG
    if (posts.length === 0 && initialPosts.length === 0) {
      const fetchPosts = async () => {
        try {
          const relatedPosts = await ContentfulApi.fetchBlogPostsByTag(slug);
          setPosts(relatedPosts);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
      fetchPosts();
    }
  }, [posts, slug, initialPosts]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts tagged: {slug}</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-6">
          <h2 className="text-xl">{post.title}</h2>
          {/* Render other post details */}
        </div>
      ))}
    </div>
  );
};

export default ClientSideComponent;
