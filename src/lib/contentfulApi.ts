import { ContentfulClientApi, createClient } from "contentful";
import type { Asset, Entry, EntryFieldTypes } from "contentful";
import type { EntrySkeletonType } from "contentful/dist/types/types/query/util";
import { siteConfig } from "@/config/site";
import { TypeBlogPostFields, TypeBlogPost, TypeAuthor, TypeAuthorFields, TypeTagsFields, TypeTags, TypeTagsSkeleton, TypeBlogPostSkeleton, TypeAuthorSkeleton } from "@contentfulTypes"
import { BlogPostReturnType } from "@/types/types";

//The 'any' in these typesare there because this type expecte generics for your locale, which 
//isn't relevant for your project at the moment (used for things like translations or different)
//content depending on location

export type TAuthor = TypeAuthor<any, any>;
export type TBlogPost = TypeBlogPost<any, any>;
export type TTags = TypeTags<any, any>;
export type TBlogPostFieldKeys = keyof TypeBlogPostFields;


function isTypeAuthorFields(object: any): object is TypeAuthorFields {
  return "name" in object;
}

function isTypeBlogPostFields(obj: any): obj is TypeBlogPostFields {
  return (
    "coverImage" in obj && "author" in obj && "slug" in obj && "content" in obj
  );
}

function hasValidNameAndBio(fields: any): boolean {
  return (
    fields &&
    typeof fields.name === "string" &&
    (typeof fields.bio === "string" || typeof fields.bio === "undefined")
  );
}

export function isTypeAuthor(entry: any): entry is Entry<TypeAuthorSkeleton, undefined, string> {
  return entry && entry.sys && entry.sys.contentType && entry.sys.contentType.sys.id === 'author';
}

export type CoverImage = {
  imageUrl: string;
  description: string;
  title: string;
};

export type TagIconProp = CoverImage & {};

// Formerly BlogPost
// export type TypeBlogPostFields = {
//     id: string;
//     content: any;
//     subtitle: string;
//     publishedDate: string | undefined;
//     slug: string;
//     tag: ITagFields | string;
//     title: string;
//     coverImage?: CoverImage | null;
//     author?: TypeAuthorFields | null;
//   };

export type TypeBlogFields = {
  title: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.RichText;
  subtitle: EntryFieldTypes.Text;
  coverImage?: EntryFieldTypes.AssetLink;
  publishedDate?: EntryFieldTypes.Date;
  slug: EntryFieldTypes.Symbol;
  author?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  tag: EntryFieldTypes.EntryLink<EntrySkeletonType>;
};

export type BlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;

export interface TypeBlogTagsFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.RichText;
  slug: EntryFieldTypes.Symbol;
}

//   Formerly TagType
export interface ITagFields {
  title: string;
  description: any;
  slug: string;
}

export type BlogTagsSkeleton = EntrySkeletonType<
  TypeBlogTagsFields,
  "blogTags"
>;

export type BlogEntriesProps = {
  limit?: number;
  skip?: number;
  tag?: string;
};

export type BlogEntriesReturnType = {
  blogPosts: TypeBlogPostFields[];
  total: number;
  limit: number | undefined;
  skip: number | undefined;
};

export type ArticleTagsReturnType = {
  id: string;
  title: string;
  slug: string;
  description: string;
  tagIcon: TagIconProp | null;
};

export class ContentfulApi {
client: ContentfulClientApi<"WITHOUT_UNRESOLVABLE_LINKS">;
  dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  constructor(preview?: boolean) {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID ?? "",
      accessToken: preview
        ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ?? ""
        : process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
      ...(preview && { host: "preview.contentful.com" }),
    }).withoutUnresolvableLinks;
  }

convertImage = (rawImage: Asset<"WITHOUT_UNRESOLVABLE_LINKS", string> & EntryFieldTypes.AssetLink ): CoverImage | TagIconProp | null => {
    if (rawImage) {
      return {
        imageUrl: rawImage.fields.file?.url.replace("//", "https://") ?? "",
        description: rawImage.fields.description ?? "",
        title: "test",
      };
    }
    return null;
  };

  convertAuthor = (rawAuthor: Entry<TypeAuthorSkeleton, undefined, string>): TAuthor | null => {
    if (rawAuthor && hasValidNameAndBio(rawAuthor.fields)) {
      return {
        sys: rawAuthor.sys,
        metadata: rawAuthor.metadata,
        fields: {
          name: rawAuthor.fields.name,
          ...(rawAuthor.fields.bio ? { bio: rawAuthor.fields.bio } : {}),
        },
      };
    }
    return null;
  };

  formatDate = (rawDate: string | undefined): string => {
    if (!rawDate) {
      return new Intl.DateTimeFormat("en-US", this.dateOptions).format(new Date());
    }
    return new Intl.DateTimeFormat("en-US", this.dateOptions).format(new Date(rawDate));
  };
  
  convertPost = (rawData: Entry<TypeBlogPostSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>) => {
    if (!isTypeBlogPostFields(rawData.fields)) {
      return null;
    }
      const rawPost = rawData.fields;
      const rawTag = rawPost?.tag;

      let author: TAuthor | null = null;
      if (isTypeAuthor(rawData.fields.author)) {
        author = this.convertAuthor(rawData.fields.author);
      }
  
      return {
        id: rawData.sys.id,
        content: rawPost.content,
        subtitle: rawPost.subtitle,
        date: (rawPost.publishedDate
          ? this.formatDate(rawPost.publishedDate.toString())
          : this.formatDate(rawData.sys.createdAt.toString())),
        slug: rawPost.slug,
        tag: {
              title: rawTag.entry?.fields?.tagName,
              description: rawTag.entry?.fields?.description,
              slug: rawTag.entry?.fields?.slug,
          },
        title: rawPost.title,
        coverImage: this.convertImage(rawPost.coverImage),
        author: author,
      };
    };

  async fetchBlogEntries(
    { limit, skip, tag }: BlogEntriesProps = {
      limit: siteConfig.pageSize,
      skip: 0,
      tag: "",
    }
  ) {
    try {
  const res: Awaited<BlogPostReturnType> = await this.client?.getEntries<TypeBlogPostSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">({
        content_type: "blogPost",
        include: 1,
        limit,
        skip,
        order: ["-fields.publishedDate"],
        "fields.title": tag,
      });

      type ConvertedPost = ReturnType<typeof this.convertPost>;

      if (res && res.items && res.items.length > 0) {
        const blogPosts = res.items.map((entry) => this.convertPost(entry)).filter((post) => post !== null) as NonNullable<ConvertedPost>[];
        const total = res.total;
        return { blogPosts, total, limit, skip };
      }
      return { blogPosts: [], limit: siteConfig.pageSize, skip: 0, total: 0 };
    } catch (error) {
      console.log("error fetching entries:", error);
    }
  }

  async fetchAllBlogEntries() {
    try {
      const res = await this.client?.getEntries<TypeBlogPostSkeleton>({
        content_type: "blogPost",
        limit: 100,
        order: ["-fields.publishedDate"],
      });

      type ConvertedPost = ReturnType<typeof this.convertPost>;
      

      if (res && res.items && res.items.length > 0) {
        const blogPosts = res.items.map((entry) => this.convertPost(entry)).filter((post) => post !== null) as NonNullable<ConvertedPost>[];
        const total = res.total;
        return { blogPosts, total, limit: siteConfig.pageSize, skip: 0 };
      }
      return { blogPosts: [], limit: siteConfig.pageSize, skip: 0, total: 0 };
    } catch (error) {
  console.log("error fetching all entries:", error);
    }
  }

  async fetchBlogImages() {
    try {
      const res = await this.client.getAssets();
      if (res && res.items && res.items.length > 0) {
        return res.items.map((asset) => `https:${asset?.fields?.file?.url}`);
      }
      return [];
    } catch (error) {
      return [];
    }
  }

  async fetchBlogBySlug(slug: string) {
    try {
      const res = await this.client.getEntries<TypeBlogPostSkeleton>({
        content_type: "blogPost",
        "fields.slug": slug,
      });
      if (res && res.items && res.items.length > 0) {
        const post = this.convertPost(res.items[0]);
        return post;
      }
      return null;
    } catch (error) {
    console.log("error fetching entry by slug", error);
    }
  }

  async getAllTags() {
  const res = await this.client.getEntries<TypeTagsSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">({
      content_type: "tags",
      });

    const tags = res.items.map(
      ({ sys, fields }) => ({
        id: sys.id,
        title: fields.tagName,
      })
    );
    return tags;
  }

  async getTagIdByTitle(tagSlug: string): Promise<string | null> {
    try {
      const res = await this.client.getEntries({
        content_type: "blogTags",
        "fields.slug": tagSlug,
      });

      // Check if entries are returned and the first entry has a sys.id property
      if (res.items.length > 0 && res.items[0].sys.id) {
        return res.items[0].sys.id;
      } else {
        console.error(
          "No tag found with the specified title or missing sys.id property:",
          tagSlug
        );
        return null;
      }
    } catch (error) {
      console.error("Error fetching tag ID by title:", error);
      return null;
    }
  }

  // TODO: Review
  async fetchBlogPostsByTag(tagTitle: string) {
    console.log("Fetching posts for tag:", tagTitle);

    try {
      // Get the sys.id for the provided tag title
      const tagId = await this.getTagIdByTitle(tagTitle);
      if (!tagId) {
        console.error("No tag found with title:", tagTitle);
        return [];
      }

      // Fetch entries where the tag field matches the specified tag ID
      const res = await this.client.getEntries<TypeBlogPostSkeleton>({
        content_type: "blogPost",
        "fields.tag.sys.id": tagId,
        order: ["-fields.publishedDate"],
      });

      console.log("API response:", res);

      if (res && res.items) {
        const posts = res.items.map((item) => this.convertPost(item));
        return posts;
      }

      return [];
    } catch (error) {
      console.error("Error fetching posts by tag:", error);
      return []
    }
  }

  async getTagInfoBySlug(slug: string) {
    const res = await this.client.getEntries<TypeTagsSkeleton>({
      content_type: "tags",
      limit: 100,
      "fields.slug": slug,
    });

    if (!!res.items.length) return res.items[0]
  }

  async getPaths() {
    const res = await this.client.getEntries<TypeTagsSkeleton>({
      content_type: "tags",
    });
    const paths = res.items.map((item) => {
      const slug = typeof item.fields.slug === "string" ? item.fields.slug : "";
      return {
        slug: slug.toLowerCase(),
      };
    });
    console.log("all possible paths for /[slug]:", paths);
    return paths;
  }

  async getContentTypeDetails(contentTypeId: string) {
    try {
      const contentType = await this.client.getContentType(contentTypeId);
      return contentType;
    } catch (error) {
      console.error(
        `Error fetching details for content type ${contentTypeId}:`,
        error
      );
      throw error;
    }
  }
}

const contentfulApiInstance = new ContentfulApi();
export default contentfulApiInstance;
