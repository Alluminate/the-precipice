import { ContentfulApi } from "@/lib/contentfulApi";
import { Metadata } from 'next';
import { detailedServerLogger } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const contentful = new ContentfulApi();
export async function generateStaticParams() {
    const paths = await contentful.getPaths();
    console.log('paths!', paths);
    return paths;
}

export const dynamicParams = false;


export default async function Page({ params }: {params : {slug: string} }) {

    const { slug } = params;

    const postData = await contentful.fetchAllBlogEntries()

    
    return (
        <>
            <div className="p-6 bg-gray-100">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">All Posts</h1>
                <h2 className="text-3xl my-2">Total Posts: {postData?.total}</h2>
                {postData && postData.blogPosts.map((post) => {
                    return (
                        <div key={post.id} className="mb-10 p-4 rounded shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                            <p className="text-lg text-gray-700 mb-1">Subtitle: {post.subtitle}</p>
                            <p className="text-sm text-gray-500 mb-1">Published: {post.date}</p>
                            <p className="text-sm text-gray-500 mb-1">By: {post.author?.fields.name as string}</p>
                            <p className="text-sm text-gray-500">Tag: {post.tag.title}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
    
  }

