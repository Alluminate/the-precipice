// import Contentful, { ContentfulClientApi, createClient } from "contentful";
// import { PAGE_SIZE } from "./constants";
// import * as CFRichTextTypes from "@contentful/rich-text-types";

export type Author = {
  name: string;
};

export type HeroImage = {
  imageUrl: string;
  description: string;
  title: string;
};

export type TagIconProp = HeroImage & {};

export type BlogPost = {
  id: string;
  content: any;
  excerpt: string;
  publishedDate: string | undefined;
  slug: string;
  // tags: Array<string>;
  tags: string;
  title: string;
  heroImage?: HeroImage | null;
  author?: Author | null;
};

export type HelpArticle = {
  id: string;
  content: any;
  subtitle: string;
  publishedDate: string | undefined;
  slug: string;
  tag: string;
  title: string;
  author?: Author | null;
};

// export type TypeBlogFields = {
//   title: Contentful.EntryFields.Symbol;
//   content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
//   excerpt?: Contentful.EntryFields.Text;
//   heroImage?: Contentful.Asset;
//   date?: Contentful.EntryFields.Date;
//   slug: Contentful.EntryFields.Symbol;
//   author?: Contentful.Entry<Record<string, any>>;
//   tags?: Contentful.Entry<Record<string, any>>[];
// }

export type BlogEntriesProps = {
  limit?: number;
  skip?: number;
  tag?: string;
};

export type ArticleEntriesProps = {
  tag?: string;
  content_type?: 'help' | 'academy';
};

export type BlogEntriesReturnType = {
  blogPosts: BlogPost[];
  total: number;
  limit: number | undefined;
  skip: number | undefined;
}

export type ArticleEntriesReturnType = {
  articles: HelpArticle[];
  total: number;
}

export type ArticleTagsReturnType = {
  id: string;
  title: string;
  slug: string;
  description: string;
  tagIcon: TagIconProp | null;
}

type ArticleTagsType = 'helpTags' | 'academyTags';



export class ContentfulApi {
  client: ContentfulClientApi;
  dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  constructor(preview?: boolean) {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID ?? '',
      accessToken: preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ?? '' : process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
      ...(preview) && { host: "preview.contentful.com" },
    })
  }

  convertImage = (rawImage: any): HeroImage | TagIconProp | null => {
    if (rawImage) {
      return {
        imageUrl: rawImage.file.url.replace("//", "https://"),
        description: rawImage.description,
        title: rawImage.title
      };
    }
    return null;
  };

  convertAuthor = (rawAuthor: Author): Author | null => {
    if (rawAuthor) {
      return {
        name: rawAuthor.name,
      };
    }
    return null;
  };

  formatDate = (rawDate: string): string | undefined => {
    if (rawDate) { return new Intl.DateTimeFormat('en-US', this.dateOptions).format(new Date(rawDate)) }
  }

  convertPost = (rawData: any): BlogPost => {
    const rawPost = rawData.fields;

    const rawHeroImage = rawPost.heroImage ? rawPost.heroImage.fields : null;
    const rawAuthor = rawPost.author ? rawPost.author.fields : null;
    const rawTags = rawPost?.tags[0] ? rawPost?.tags[0].fields : null;

    return {
      id: rawData.sys.id,
      content: rawPost?.content,
      excerpt: rawPost?.excerpt,
      publishedDate: rawPost?.date ? this.formatDate(rawPost?.date) : this.formatDate(rawData.sys.createdAt),
      slug: rawPost?.slug,
      tags: rawTags?.title,
      title: rawPost?.title,
      heroImage: this.convertImage(rawHeroImage),
      author: this.convertAuthor(rawAuthor),
    };
  };

  convertHelpArticle = (rawData: any): HelpArticle => {
    const rawPost = rawData.fields;

    const rawAuthor = rawPost.author ? rawPost.author.fields : null;
    const rawTag = rawPost?.tag ? rawPost?.tag.fields : null;

    return {
      id: rawData.sys.id,
      content: rawPost?.content,
      subtitle: rawPost?.subtitle,
      publishedDate: this.formatDate(rawData.sys.updatedAt),
      slug: rawPost?.slug,
      tag: rawTag?.slug,
      title: rawPost?.title,
      author: this.convertAuthor(rawAuthor),
    };
  };

  async fetchBlogEntries({ limit, skip, tag }: BlogEntriesProps = {
    limit: PAGE_SIZE,
    skip: 0,
    tag: ''
  }): Promise<BlogEntriesReturnType> {
    try {
      const res = await this.client?.getEntries({
        include: 1,
        limit,
        skip,
        'fields.tags.sys.id': tag,
        content_type: 'blog',
        order: '-fields.date',
      })

      if (res && res.items && res.items.length > 0) {
        const blogPosts = res.items.map(entry => this.convertPost(entry));
        const total = res.total;
        return { blogPosts, total, limit, skip };
      }
      return { blogPosts: [], limit: PAGE_SIZE, skip: 0, total: 0 };

    } catch (error) {
      console.log(error)
      throw (error);
    }
  }

  async fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const res = await this.client.getEntries({
        content_type: "blog",
        "fields.slug": slug,
      })
      if (res && res.items && res.items.length > 0) {
        const post = this.convertPost(res.items[0]);
        return post;
      }
      return null;

    } catch (error) {
      console.log(error)
      throw (error);
    }
  }

  async getAllTags(): Promise<{ id: string; title: string; }[]> {
    const res = await this.client.getEntries({
      content_type: 'tags'
    });

    const tags = res.items.map(
      ({ sys, fields }: { sys: any; fields: any }) => ({
        id: sys.id,
        title: fields.title
      })
    );
    return tags;
  }

  async getPaths(): Promise<{ params: { slug: string; } }[] | []> {
    const res = await this.client.getEntries({
      content_type: "blog",
    });
    if (res && res.items && res.items.length > 0) {
      const paths = res.items.map(item => {
        return {
          params: { slug: (item.fields as any).slug }
        }
      })
      return paths;
    }
    return []
  }

  //Help and Academy Articles
  async fetchArticleEntries({ tag, content_type }: ArticleEntriesProps = {
    tag: '',
    content_type: 'help'
  }): Promise<ArticleEntriesReturnType> {
    try {
      const res = await this.client?.getEntries({
        include: 1,
        'fields.tag.sys.id': tag,
        content_type,
        order: '-fields.date',
      })

      if (res && res.items && res.items.length > 0) {
        const articles = res.items.map(entry => this.convertHelpArticle(entry));
        const total = res.total;
        return { articles, total };
      }
      return { articles: [], total: 0 };

    } catch (error) {
      console.log(error)
      throw (error);
    }
  }

  async fetchArticleBySlug(content_type: ArticleEntriesProps['content_type'] = "help", slug: string): Promise<HelpArticle | null> {
    try {
      const res = await this.client.getEntries({
        content_type,
        "fields.slug": slug,
      })
      if (res && res.items && res.items.length > 0) {
        const post = this.convertHelpArticle(res.items[0]);
        return post;
      }
      return null;

    } catch (error) {
      console.log(error)
      throw (error);
    }
  }

  async getAllArticleTags(content_type: ArticleTagsType = 'helpTags'): Promise<ArticleTagsReturnType[]> {
    const res = await this.client.getEntries({
      content_type,
      order: 'sys.updatedAt',
    });

    const tags = res.items.map(
      ({ sys, fields }: { sys: any; fields: any }) => ({
        id: sys.id,
        slug: fields.slug,
        title: fields.title,
        description: fields.description,
        tagIcon: fields.tagIcon.file ? this.convertImage(fields.tagIcon) : null,
      })
    );
    return tags;
  }

}
