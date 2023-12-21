// import { ContentfulClientApi, createClient } from "contentful";
// import type { EntryFieldTypes } from "contentful";
// import type { EntrySkeletonType } from "contentful/dist/types/types/query/util"

// import { siteConfig } from "@/config/site";
// import { ContentTypesKeys, IBlogTags, ITagType } from "../types/old-types";

// export type Author = {
//   name: string;
// };

// export type CoverImage = {
//   imageUrl: string;
//   description: string;
//   title: string;
// };

// export type TagIconProp = CoverImage & {};

// export type BlogPost = {
//   id: string;
//   content: any;
//   subtitle: string;
//   publishedDate: string | undefined;
//   slug: string;
//   // TODO: CHANGED AND ADDED THIS HERE
//   tag: TagType | string;
//   title: string;
//   coverImage?: CoverImage | null;
//   author?: Author | null;
// };

// export type TypeBlogFields = {
//   title: EntryFieldTypes.Symbol;
//   content: EntryFieldTypes.RichText;
//   subtitle: EntryFieldTypes.Text;
//   coverImage?: EntryFieldTypes.AssetLink;
//   date?: EntryFieldTypes.Date;
//   slug: EntryFieldTypes.Symbol;
//   author?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
//   tag: EntryFieldTypes.EntryLink<EntrySkeletonType>;
// };

// export type BlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;

// export interface TypeBlogTagsFields {
//   title: EntryFieldTypes.Symbol;
//   description: EntryFieldTypes.RichText;
//   slug: EntryFieldTypes.Symbol;
// }

// export interface TagType {
//   title: string;
//   description: any; // Adjust based on how you handle RichText fields
//   slug: string;
// }

// export type BlogTagsSkeleton = EntrySkeletonType<
//   TypeBlogTagsFields,
//   "blogTags"
// >;

// export type BlogEntriesProps = {
//   limit?: number;
//   skip?: number;
//   tag?: string;
// };

// export type ArticleEntriesProps = {
//   tag?: string;
//   // content_type?: "help" | "academy";
// };

// export type BlogEntriesReturnType = {
//   blogPosts: BlogPost[];
//   total: number;
//   limit: number | undefined;
//   skip: number | undefined;
// };

// export type ArticleTagsReturnType = {
//   id: string;
//   title: string;
//   slug: string;
//   description: string;
//   tagIcon: TagIconProp | null;
// };

// // type ArticleTagsType = "helpTags" | "academyTags";

// export class ContentfulApi {
//   client: ContentfulClientApi<undefined>;
//   dateOptions: Intl.DateTimeFormatOptions = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };

//   constructor(preview?: boolean) {
//     this.client = createClient({
//       space: process.env.CONTENTFUL_SPACE_ID ?? "",
//       accessToken: preview
//         ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ?? ""
//         : process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
//       ...(preview && { host: "preview.contentful.com" }),
//     });
//   }

//   convertImage = (rawImage: any): CoverImage | TagIconProp | null => {
//     if (rawImage) {
//       return {
//         imageUrl: rawImage.file.url.replace("//", "https://"),
//         description: rawImage.description,
//         title: rawImage.title,
//       };
//     }
//     return null;
//   };

//   convertAuthor = (rawAuthor: Author): Author | null => {
//     if (rawAuthor) {
//       return {
//         name: rawAuthor.name,
//       };
//     }
//     return null;
//   };

//   formatDate = (rawDate: string): string | undefined => {
//     if (rawDate) {
//       return new Intl.DateTimeFormat("en-US", this.dateOptions).format(
//         new Date(rawDate)
//       );
//     }
//   };

//   convertPost = (rawData: any): BlogPost => {
//     const rawPost = rawData.fields;

//     const rawHeroImage = rawPost.heroImage ? rawPost.heroImage.fields : null;
//     const rawAuthor = rawPost.author ? rawPost.author.fields : null;
//     const rawTag = rawPost?.tag ? rawPost?.tag.fields : null;

//     return {
//       id: rawData.sys.id,
//       content: rawPost?.content,
//       subtitle: rawPost?.excerpt,
//       publishedDate: rawPost?.date
//         ? this.formatDate(rawPost?.date)
//         : this.formatDate(rawData.sys.createdAt),
//       slug: rawPost?.slug,
//       tag: rawTag
//         ? {
//             title: rawTag.title,
//             description: rawTag.description,
//             slug: rawTag.slug,
//           }
//         : null,
//       title: rawPost?.title,
//       coverImage: this.convertImage(rawHeroImage),
//       author: this.convertAuthor(rawAuthor),
//     };
//   };

//   async fetchBlogEntries(
//     { limit, skip, tag }: BlogEntriesProps = {
//       limit: siteConfig.pageSize,
//       skip: 0,
//       tag: "",
//     }
//   ): Promise<BlogEntriesReturnType> {
//     try {
//       const res = await this.client?.getEntries<BlogSkeleton>({
//         content_type: "blog",
//         include: 1,
//         limit,
//         skip,
//         "fields.tag.sys.id": tag,
//         order: ["-fields.date"],
//       });

//       if (res && res.items && res.items.length > 0) {
//         const blogPosts = res.items.map((entry) => this.convertPost(entry));
//         const total = res.total;
//         return { blogPosts, total, limit, skip };
//       }
//       return { blogPosts: [], limit: siteConfig.pageSize, skip: 0, total: 0 };
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }

//   async fetchAllBlogEntries(): Promise<BlogEntriesReturnType> {
//     try {
//       const res = await this.client?.getEntries<BlogSkeleton>({
//         content_type: "blog",
//         limit: 100,
//         order: ["-fields.date"],
//       });
//       if (res && res.items && res.items.length > 0) {
//         const blogPosts = res.items.map((entry) => this.convertPost(entry));
//         const total = res.total;
//         return { blogPosts, total, limit: siteConfig.pageSize, skip: 0 };
//       }
//       return { blogPosts: [], limit: siteConfig.pageSize, skip: 0, total: 0 };
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }

//   }

//   async fetchBlogImages() {
//     try {
//       const res = await this.client.getAssets();
//       if (res && res.items && res.items.length > 0) {
//         return res.items.map((asset) => `https:${asset?.fields?.file?.url}`);
//       }
//       return [];
//     } catch (error) {
//       return [];
//     }
//   }

//   async fetchBlogBySlug(slug: string): Promise<BlogPost> {
//     try {
//       const res = await this.client.getEntries<BlogSkeleton>({
//         content_type: "blog",
//         "fields.slug": slug,
//       });
//       if (res && res.items && res.items.length > 0) {
//         const post = this.convertPost(res.items[0]);
//         return post;
//       }
//       return {} as BlogPost;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }


//   async getAllTags(): Promise<{ id: string; title: string }[]> {
//     const res = await this.client.getEntries<BlogTagsSkeleton>({
//       content_type: "blogTags",
//     });

//     const tags = res.items.map(
//       ({ sys, fields }: { sys: any; fields: any }) => ({
//         id: sys.id,
//         title: fields.title,
//       })
//     );
//     return tags;
//   }

//   async getTagIdByTitle(tagSlug: string): Promise<string | null> {
//     try {
//       const res = await this.client.getEntries({
//         content_type: "blogTags",
//         "fields.slug": tagSlug,
//       });

//       // Check if entries are returned and the first entry has a sys.id property
//       if (res.items.length > 0 && res.items[0].sys.id) {
//         return res.items[0].sys.id;
//       } else {
//         console.error(
//           "No tag found with the specified title or missing sys.id property:",
//           tagSlug
//         );
//         return null;
//       }
//     } catch (error) {
//       console.error("Error fetching tag ID by title:", error);
//       return null;
//     }
//   }

//   // TODO: Review
//   async fetchBlogPostsByTag(tagTitle: string): Promise<BlogPost[]> {
//     console.log("Fetching posts for tag:", tagTitle);

//     try {
//       // Get the sys.id for the provided tag title
//       const tagId = await this.getTagIdByTitle(tagTitle);
//       if (!tagId) {
//         console.error("No tag found with title:", tagTitle);
//         return [];
//       }

//       // Fetch entries where the tag field matches the specified tag ID
//       const res = await this.client.getEntries<BlogSkeleton>({
//         content_type: "blog",
//         "fields.tag.sys.id": tagId,
//         order: ["-fields.date"],
//       });

//       console.log("API response:", res);

//       if (res && res.items) {
//         const posts = res.items.map((item) => this.convertPost(item));
//         return posts;
//       }

//       return [];
//     } catch (error) {
//       console.error("Error fetching posts by tag:", error);
//       throw error;
//     }
//   }

// async getTagInfoBySlug(slug: string): Promise<ITagType> {
//     const res = await this.client.getEntries<any>({
//       content_type: "blogTags",
//       limit: 100,
//       "fields.slug": slug,
//     })

//     return res.items[0] as ITagType
//   }

//   async getPaths(): Promise<{ slug: string }[]> {
//     const res = await this.client.getEntries({
//       content_type: "blogTags"
//     });
//     const paths = res.items.map((item) => {
//       const slug = typeof item.fields.slug === 'string' ? item.fields.slug : ""
//       return ({
//         slug: slug.toLowerCase()
//         })})
//         console.log('all possible paths for /[slug]:', paths)
//         return paths 
//   }

//   async getContentTypeDetails(contentTypeId: string) {
//     try {
//       const contentType = await this.client.getContentType(contentTypeId);
//       return contentType;
  
//     } catch (error) {
//       console.error(`Error fetching details for content type ${contentTypeId}:`, error);
//       throw error;
//     }
//   }
  
// }

// const contentfulApiInstance = new ContentfulApi();
// export default contentfulApiInstance;

// // TODO: Assess if I need the Academy stuff still
// //Help and Academy Articles
// // async fetchArticleEntries(
// //   { tag, content_type = "academy" }: ArticleEntriesProps = {
// //     tag: "",
// //     content_type: "academy",
// //   }
// // ): Promise<ArticleEntriesReturnType> {
// //   try {
// //     const res = await this.client?.getEntries({
// //       content_type,
// //       include: 1,
// //       "fields.tag.sys.id": tag,
// //       order: ["-fields.date"],
// //     });

// //     if (res && res.items && res.items.length > 0) {
// //       const articles = res.items.map((entry) =>
// //         this.convertHelpArticle(entry)
// //       );
// //       const total = res.total;
// //       return { articles, total };
// //     }
// //     return { articles: [], total: 0 };
// //   } catch (error) {
// //     console.log(error);
// //     throw error;
// //   }
// // }

// // async fetchArticleBySlug(
// //   content_type: ArticleEntriesProps["content_type"] = "help",
// //   slug: string
// // ): Promise<HelpArticle | null> {
// //   try {
// //     const res = await this.client.getEntries({
// //       content_type,
// //       "fields.slug": slug,
// //     });
// //     if (res && res.items && res.items.length > 0) {
// //       const post = this.convertHelpArticle(res.items[0]);
// //       return post;
// //     }
// //     return null;
// //   } catch (error) {
// //     console.log(error);
// //     throw error;
// //   }
// // }

// //   async getAllArticleTags(
// //     content_type: ArticleTagsType = "helpTags"
// //   ): Promise<ArticleTagsReturnType[]> {
// //     const res = await this.client.getEntries({
// //       content_type,
// //       order: ["sys.updatedAt"],
// //     });

// //     const tags = res.items.map(
// //       ({ sys, fields }: { sys: any; fields: any }) => ({
// //         id: sys.id,
// //         slug: fields.slug,
// //         title: fields.title,
// //         description: fields.description,
// //         tagIcon: fields.tagIcon.file ? this.convertImage(fields.tagIcon) : null,
// //       })
// //     );
// //     return tags;
// //   }
// // }

// // convertHelpArticle = (rawData: any): HelpArticle => {
// //   const rawPost = rawData.fields;

// //   const rawAuthor = rawPost.author ? rawPost.author.fields : null;
// //   const rawTag = rawPost?.tag ? rawPost?.tag.fields : null;

// //   return {
// //     id: rawData.sys.id,
// //     content: rawPost?.content,
// //     subtitle: rawPost?.subtitle,
// //     publishedDate: this.formatDate(rawData.sys.updatedAt),
// //     slug: rawPost?.slug,
// //     tag: rawTag?.slug,
// //     title: rawPost?.title,
// //     author: this.convertAuthor(rawAuthor),
// //   };
// // };

// // export type ArticleEntriesReturnType = {
// //   articles: AllArticles[];
// //   total: number;
// // };

// // NEWDEV - remove
// // export interface TypeAcademyFields {
// //   title: EntryFieldTypes.Symbol;
// //   subtitle: EntryFieldTypes.Text;
// //   slug: EntryFieldTypes.Symbol;
// //   author: EntryFieldTypes.EntryLink<EntrySkeletonType>;
// //   date?: EntryFieldTypes.Date;
// //   content?: EntryFieldTypes.RichText;
// //   tag: EntryFieldTypes.EntryLink<EntrySkeletonType>;
// // }

// // export interface TypeAcademyTagsFields {
// //   title: EntryFieldTypes.Symbol;
// //   description?: EntryFieldTypes.Text;
// //   tagIcon?: EntryFieldTypes.AssetLink;
// //   slug?: EntryFieldTypes.Symbol;
// // }

// // export type HelpArticle = {
// //   id: string;
// //   content: any;
// //   subtitle: string;
// //   publishedDate: string | undefined;
// //   slug: string;
// //   tag: string;
// //   title: string;
// //   author?: Author | null;
// // };

// // convertPost = (rawData: any): BlogPost => {
// //   const rawPost = rawData.fields;

// //   const rawHeroImage = rawPost.heroImage ? rawPost.heroImage.fields : null;
// //   const rawAuthor = rawPost.author ? rawPost.author.fields : null;
// //   const rawTag = rawPost?.tag ? rawPost?.tag.fields : null;

// //   return {
// //     id: rawData.sys.id,
// //     content: rawPost?.content,
// //     subtitle: rawPost?.excerpt,
// //     publishedDate: rawPost?.date
// //       ? this.formatDate(rawPost?.date)
// //       : this.formatDate(rawData.sys.createdAt),
// //     slug: rawPost?.slug,
// //     tag: rawTag?.title,
// //     title: rawPost?.title,
// //     coverImage: this.convertImage(rawHeroImage),
// //     author: this.convertAuthor(rawAuthor),
// //   };
// // };
