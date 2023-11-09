# Changes from Integrating Newly Generated Types

## in `archive-list.tsx`

- added `import { TGetPostsReturnType } from "../../page";`

- changed
  `import { TGetPostsReturnType } from "../../page";` to `import { FetchAllBlogEntriesBlogPostType, FetchAllBlogEntriesReturnType } from "@/types/types";`

- added

```
  const emptyPostElement = {} as FetchAllBlogEntriesBlogPostType;

  //Adding empty elements to groups with less than 3 posts
  Object.keys(grouped).forEach(tagSlug => {
    const group = grouped[tagSlug];
    if (group.length > 3) {
      // Slice the group to only include the first 3 posts
      grouped[tagSlug] = group.slice(0, 3);
    } else if (group.length > 0 && group.length < 3) {
      // Add empty elements if there are fewer than 3 posts
      while (group.length < 3) {
        group.push(emptyPostElement);
      }
    }
  });

  return grouped;
}
```

- changed

```
function groupPostsByTag(posts: TGetPostsReturnType["blogPosts"]) {
  return posts.reduce(
```

to

```
function groupPostsByTag(posts: NonNullable<FetchAllBlogEntriesReturnType>["blogPosts"]) {
  const grouped = posts.reduce(
```

- added

```
  blog: TGetPostsReturnType["blogPosts"];
}

// Helper function to group posts by their tag
function groupPostsByTag(posts: TGetPostsReturnType["blogPosts"]) {
  return posts.reduce((acc, post) => {
    const tagSlug = post.tag.slug;
    if (!acc[tagSlug]) {
      acc[tagSlug] = [];
    }
    acc[tagSlug].push(post);
    return acc;
  }, {} as { [key: string]: TGetPostsReturnType["blogPosts"] });
```

- removed

```
  const postsByTag: { [key: string]: BlogPost[] } = {};

  blog.forEach((post) => {
    if (post.tag && typeof post.tag !== "string") {
      if (!postsByTag[post.tag.slug]) {
        postsByTag[post.tag.slug] = [];
      }
      postsByTag[post.tag.slug].push(post);
    }
  });
```

to `const postsByTag = groupPostsByTag(blog);`

- changed

```
      {Object.keys(postsByTag).map((slug) => (
        <section key={slug} className="mt-6">
          <ArchivePageTagTitle className="text-2xl mb-6">
            {typeof postsByTag[slug][0].tag !== "string"
              ? postsByTag[slug][0].tag.title
              : postsByTag[slug][0].tag}
          </ArchivePageTagTitle>
          <ColoredSeparator color="grey" className="mb-6" />
          <ul className="">
            {postsByTag[slug].map((post) => (
              <li key={post.id} className="mb-6">
                <Link href={`/blog/${post.slug}`}>
                  <ArchivePageBlogTitle className="text-lg hover:underline mb-4">
                    {post.title}
                  </ArchivePageBlogTitle>
                </Link>
                <ColoredSeparator color="grey" />
              </li>
            ))}
          </ul>
          {/* Add link to tag */}
          {/* <Link href={`/${tagSlug}`} passHref> */}
          <Link href={`/${slug}`}>
            {/* <Link href={`/tags/${tagSlug}`} passHref> */}
            <Button variant="default" className="uppercase">
              See all {postsByTag[slug][0].tag.title} posts
            </Button>
          </Link>
        </section>
      ))}
```

to

```
{Object.entries(postsByTag).map(([slug, posts]) => {
    const firstPostTitle = posts[0].title;
    const tagTitle = posts[0].tag.title;

    return (
        <section key={slug} className="mt-6">
        <ArchivePageTagTitle className="text-2xl mb-6">
            {firstPostTitle}
        </ArchivePageTagTitle>
        <ColoredSeparator color="grey" className="mb-6" />
        <ul>
            {posts.map((post) => (
            <li key={post.id} className="mb-6">
                <Link href={`/blog/${post.slug}`}>
                <ArchivePageBlogTitle className="text-lg hover:underline mb-4">
                    {post.title}
                </ArchivePageBlogTitle>
                </Link>
                <ColoredSeparator color="grey" />
            </li>
            ))}
        </ul>
        <Link href={`/${slug}`}>
            <Button variant="default" className="uppercase">
            See all {tagTitle} posts
            </Button>
        </Link>
        </section>
    );
    })}
```

- changed

```
  {posts.map((post) => (
    <li key={post.id} className="mb-6">
      <Link href={`/blog/${post.slug}`}>
        <ArchivePageBlogTitle className="text-lg hover:underline mb-4">
          {post.title}
        </ArchivePageBlogTitle>
      </Link>
      <ColoredSeparator color="grey" />
    </li>
  ))}
```

to

```
 {posts.map((post, i) => {
      return (
        <li key={post.id} className="mb-6">
          <Link href={`/blog/${post.slug}`}>
            <ArchivePageBlogTitle className="text-lg hover:underline mb-4">
              {post.title}
            </ArchivePageBlogTitle>
          </Link>
          <ColoredSeparator color="grey" />
        </li>
      )
  })}
```
