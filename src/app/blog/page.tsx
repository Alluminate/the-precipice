import { ContentfulApi } from "@/lib/contentfulApi";
import { BlogGrid, Header } from "./components";
import { siteConfig } from "@/config/site";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getTags() {
  const contentful = new ContentfulApi();
  const tags = await contentful.getAllTags();

  return tags;
}

async function getPosts({ params, searchParams }: Props) {
  // const contentful = new ContentfulApi(preview);
  const contentful = new ContentfulApi();
  let page = 1;

  const { blogPosts, total, limit, skip } = await contentful.fetchBlogEntries(
    {
      tag: '',
      skip: (page - 1) * siteConfig.pageSize,
      limit: siteConfig.pageSize,
    }
  );

  return { blogPosts, total, limit, skip };
}

export default async function Blog({ params, searchParams }: Props) {
  const tags = await getTags();
  const { blogPosts } = await getPosts({ params, searchParams });

  return (
    <section className='container space-y-20'>
      <Header tags={tags} />
      <BlogGrid blog={blogPosts} />
    </section>
  )
}