# Changes from Integrating Newly Generated Types

## in `archive-list.tsx`

- added `import { TGetPostsReturnType } from "../../page";`

- removed

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
