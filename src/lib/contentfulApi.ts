import { ContentfulClientApi, createClient } from "contentful";
import type { EntryFieldTypes } from "contentful";
import type { EntrySkeletonType } from "contentful/dist/types/types/query/util";
import {
  IAuthor,
  IBlogPost,
  IBlogPostFields,
  ITags,
  CONTENT_TYPE,
  IEntry,
  LOCALE_CODE,
  CONTENTFUL_DEFAULT_LOCALE_CODE,
} from "@/types/contentful";
import { siteConfig } from "@/config/site";

//   import { ContentTypesKeys, IBlogTags, ITagType } from "../types/old-types";

// Formerly Author
export type IAuthorFields = {
  name: string;
  bio?: string | undefined;
};

function isIAuthorFields(object: any): object is IAuthorFields {
  return "name" in object;
}

function isIBlogPostFields(obj: any): obj is IBlogPostFields {
  return (
    "coverImage" in obj && "author" in obj && "slug" in obj && "content" in obj
  );
}

function hasValidNameAndBio(fields: any): fields is IAuthorFields {
  return (
    fields &&
    typeof fields.name === "string" &&
    (typeof fields.bio === "string" || typeof fields.bio === "undefined")
  );
}

export type CoverImage = {
  imageUrl: string;
  description: string;
  title: string;
};

export type TagIconProp = CoverImage & {};

// Formerly BlogPost
// export type IBlogPostFields = {
//     id: string;
//     content: any;
//     subtitle: string;
//     publishedDate: string | undefined;
//     slug: string;
//     tag: ITagFields | string;
//     title: string;
//     coverImage?: CoverImage | null;
//     author?: IAuthorFields | null;
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
  blogPosts: IBlogPostFields[];
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
  client: ContentfulClientApi<undefined>;
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
    });
  }

  convertImage = (rawImage: any): CoverImage | TagIconProp | null => {
    if (rawImage) {
      return {
        imageUrl: rawImage.file.url.replace("//", "https://"),
        description: rawImage.description,
        title: rawImage.title,
      };
    }
    return null;
  };

  convertAuthor = (rawAuthor: IAuthor): IAuthor | null => {
    if (rawAuthor && hasValidNameAndBio(rawAuthor.fields)) {
      return {
        sys: rawAuthor.sys,
        metadata: rawAuthor.metadata,
        fields: {
          name: rawAuthor.fields.name,
          // bio is optional, so it might not exist on every IAuthorFields
          ...(rawAuthor.fields.bio ? { bio: rawAuthor.fields.bio } : {}),
        },
      };
    }
    return null;
  };

  formatDate = (rawDate: string): string | undefined => {
    if (rawDate) {
      return new Intl.DateTimeFormat("en-US", this.dateOptions).format(
        new Date(rawDate)
      );
    }
  };

  convertPost = (rawData: IBlogPost): IBlogPostFields | null => {
    if (isIBlogPostFields(rawData.fields)) {
      //  Using this method with caution, not certain if rawPost will contain the required fields, using type assertions here
      const rawPost = rawData.fields as unknown as IBlogPostFields;
      const rawTag = rawPost?.tag ? (rawPost.tag as ITagFields) : null;

      return {
        id: rawData.sys.id,
        content: rawPost.content,
        subtitle: rawPost.subtitle,
        publishedDate: rawPost.publishedDate
          ? this.formatDate(rawPost.publishedDate)
          : this.formatDate(rawData.sys.createdAt),
        slug: rawPost.slug,
        tag: rawTag
          ? {
              title: rawTag.tagName,
              description: rawTag.description,
              slug: rawTag.slug,
            }
          : null,
        title: rawPost.title,
        coverImage: this.convertImage(rawPost.coverImage),
        author: this.convertAuthor(rawData),
      };
    }

    // Return null or throw an error if the fields do not match the expected type.
    return null;
  };

  async fetchBlogEntries(
    { limit, skip, tag }: BlogEntriesProps = {
      limit: siteConfig.pageSize,
      skip: 0,
      tag: "",
    }
  ): Promise<BlogEntriesReturnType> {
    try {
      const res = await this.client?.getEntries<BlogSkeleton>({
        content_type: "blog",
        include: 1,
        limit,
        skip,
        "fields.tag.sys.id": tag,
        order: ["-fields.date"],
      });

      if (res && res.items && res.items.length > 0) {
        const blogPosts = res.items.map((entry) => this.convertPost(entry));
        const total = res.total;
        return { blogPosts, total, limit, skip };
      }
      return { blogPosts: [], limit: siteConfig.pageSize, skip: 0, total: 0 };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async fetchAllBlogEntries(): Promise<BlogEntriesReturnType> {
    try {
      const res = await this.client?.getEntries<BlogSkeleton>({
        content_type: "blog",
        limit: 100,
        order: ["-fields.date"],
      });
      if (res && res.items && res.items.length > 0) {
        const blogPosts = res.items.map((entry) => this.convertPost(entry));
        const total = res.total;
        return { blogPosts, total, limit: siteConfig.pageSize, skip: 0 };
      }
      return { blogPosts: [], limit: siteConfig.pageSize, skip: 0, total: 0 };
    } catch (error) {
      console.log(error);
      throw error;
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

  async fetchBlogBySlug(slug: string): Promise<IBlogPost> {
    try {
      const res = await this.client.getEntries<BlogSkeleton>({
        content_type: "blog",
        "fields.slug": slug,
      });
      if (res && res.items && res.items.length > 0) {
        const post = this.convertPost(res.items[0]);
        return post;
      }
      return {} as IBlogPost;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllTags(): Promise<{ id: string; title: string }[]> {
    const res = await this.client.getEntries<BlogTagsSkeleton>({
      content_type: "blogTags",
    });

    const tags = res.items.map(
      ({ sys, fields }: { sys: any; fields: any }) => ({
        id: sys.id,
        title: fields.title,
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
  async fetchBlogPostsByTag(tagTitle: string): Promise<IBlogPost[]> {
    console.log("Fetching posts for tag:", tagTitle);

    try {
      // Get the sys.id for the provided tag title
      const tagId = await this.getTagIdByTitle(tagTitle);
      if (!tagId) {
        console.error("No tag found with title:", tagTitle);
        return [];
      }

      // Fetch entries where the tag field matches the specified tag ID
      const res = await this.client.getEntries<BlogSkeleton>({
        content_type: "blog",
        "fields.tag.sys.id": tagId,
        order: ["-fields.date"],
      });

      console.log("API response:", res);

      if (res && res.items) {
        const posts = res.items.map((item) => this.convertPost(item));
        return posts;
      }

      return [];
    } catch (error) {
      console.error("Error fetching posts by tag:", error);
      throw error;
    }
  }

  async getTagInfoBySlug(slug: string): Promise<ITags> {
    const res = await this.client.getEntries<any>({
      content_type: "blogTags",
      limit: 100,
      "fields.slug": slug,
    });

    return res.items[0] as ITags;
  }

  async getPaths(): Promise<{ slug: string }[]> {
    const res = await this.client.getEntries({
      content_type: "blogTags",
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
