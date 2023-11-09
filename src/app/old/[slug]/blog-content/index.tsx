// // @ DEV This is the page that should render the blog content

// import Link from "next/link";
// import { Icons } from "@/components/icons";
// import { ContentfulImage } from "@/components/ui/contentful-image";
// import { PageHeader } from "@/components/elements";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { richTextOptions } from "@/lib/richtext-options";
// import { TBlogContent } from "../page";

// interface BlogContentProps {
//   post: TBlogContent;
// }

// export function BlogContent({
//   post: { coverImage, tag, title, subtitle, date, content },
// }: BlogContentProps) {
//   return (
//     <section className="container space-y-20 flex flex-col flex-[1_1_65ch] max-w-blog">
//       <PageHeader className="h-fit md:h-fit items-start w-full md:px-0">
//         <Link href="/blog" passHref>
//           <p className="flex items-center gap-2 cursor-pointer">
//             <Icons.arrowLeft size={"1em"} /> Go back to the blog
//           </p>
//         </Link>
//         {coverImage && (
//           <div className="-mx-4 sm:mx-0 mt-3">
//             <ContentfulImage
//               src={coverImage?.imageUrl}
//               width={2000}
//               height={1000}
//               alt={title.values}
//               className="rounded-md"
//             />
//           </div>
//         )}
//       </PageHeader>
//       <div className="rounded-md bg-black md:p-8">
//         <div className="max-w-2xl mb-16">
//           <p className="bg-primary px-4 py-2 rounded inline">{tag.title}</p>
//           <h1 className="font-bold text-4xl mt-4 mb-2">{title}</h1>
//           <h3 className="text-xl">{subtitle}</h3>
//           <span className="text-sm text-muted-foreground">{date}</span>
//         </div>
//         <article className="prose max-w-none lg:prose-base prose-headings:text-foreground prose-headings:scroll-pt-28 prose-p:text-foreground prose-code:text-background prose-code:bg-foreground prose-code:rounded-sm prose-code:p-1">
//           {documentToReactComponents(content, richTextOptions)}
//         </article>
//       </div>
//     </section>
//   );
// }
