# Changes from Integrating Newly Generated Types

- Organized the imports to separate external libraries, types, and configurations.
- Made use of ?. optional chaining in several places to enhance code robustness.
- Added some comments for clarity.
- Streamlined some functions for better readability.

- removed `"contentful-typescript-codegen": "contentful-typescript-codegen --output @types/generated/contentful.d.ts"`
- added `"generate": "cf-content-types-generator -s h8dzfmrvmn3m -t CFPAT-4rheICbQrqfVD0B87kN-ROiHi2Tq2eDMh-UVYCitzLQ -o types/generated/contentful.d.ts -X -g"`

- added `"cf-content-types-generator": "^2.12.9",`
- added `"contentful-cli": "^3.1.0",`
- removed `"contentful-typescript-codegen": "^3.4.0",`

- removed

```
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
```

- added instead

```
import { TypeBlogPostFields, TypeBlogPost, TypeAuthor, TypeAuthorFields, TypeTagsFields, TypeTags, TypeTagsSkeleton, TypeBlogPostSkeleton, TypeAuthorSkeleton } from "@contentfulTypes"
import { BlogPostReturnType } from "@/types/types";

```

- added

```
export type TAuthor = TypeAuthor<any, any>;
export type TBlogPost = TypeBlogPost<any, any>;
export type TTags = TypeTags<any, any>;
export type TBlogPostFieldKeys = keyof TypeBlogPostFields;
```

- changed `function hasValidNameAndBio(fields: any): fields is IAuthorFields {` to `function hasValidNameAndBio(fields: any): boolean {`

- added

```
export function isTypeAuthor(entry: any): entry is Entry<TypeAuthorSkeleton, undefined, string> {
  return entry && entry.sys && entry.sys.contentType && entry.sys.contentType.sys.id === 'author';
}
```

- changed `client: ContentfulClientApi<undefined>;` to `client: ContentfulClientApi<"WITHOUT_UNRESOLVABLE_LINKS">;`

- changed `convertAuthor = (rawAuthor: IAuthor): IAuthor | null => {` to `convertAuthor = (rawAuthor: Entry<TypeAuthorSkeleton, undefined, string>): TAuthor | null => {`

- Changed

```
  formatDate = (rawDate: string): string | undefined => {
    if (rawDate) {
      return new Intl.DateTimeFormat("en-US", this.dateOptions).format(
        new Date(rawDate)
      );
```

to

```
formatDate = (rawDate: string | undefined): string => {
    if (!rawDate) {
      return new Intl.DateTimeFormat("en-US", this.dateOptions).format(new Date());
          }
    return new Intl.DateTimeFormat("en-US", this.dateOptions).format(new Date(rawDate));
```

- changed

```
convertPost = (rawData: IBlogPost): IBlogPostFields | null => {
    if (isIBlogPostFields(rawData.fields)) {
      //  Using this method with caution, not certain if rawPost will contain the required fields, using type assertions here
      const rawPost = rawData.fields as unknown as IBlogPostFields;
      const rawTag = rawPost?.tag ? (rawPost.tag as ITagFields) : null;
```

to

```
 convertPost = (rawData: Entry<TypeBlogPostSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>) => {
    if (!isTypeBlogPostFields(rawData.fields)) {
      return null;
    }
      const rawPost = rawData.fields;
      const rawTag = rawPost?.tag;
```

- added

```
 let author: TAuthor | null = null;
      if (isTypeAuthor(rawData.fields.author)) {
        author = this.convertAuthor(rawData.fields.author);
      }
```

- changed

```
tag: rawTag
? {
    title: rawTag.tagName,
    description: rawTag.description,
    slug: rawTag.slug,
}
: null,
```

to

```
tag: {
    title: rawTag.entry?.fields?.tagName,
    description: rawTag.entry?.fields?.description,
    slug: rawTag.entry?.fields?.slug,
    },
```

- changed

```
    const res = await this.client?.getEntries<BlogSkeleton>({
        content_type: "blog",
```

to

```
const res: Awaited<BlogPostReturnType> = await this.client?.getEntries<TypeBlogPostSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">({
        content_type: "blogPost",
```

- changed

```
 "fields.tag.sys.id": tag,
        order: ["-fields.date"],
```

to

```
order: ["-fields.publishedDate"],
        "fields.title": tag,
```

- changed `const blogPosts = res.items.map((entry) => this.convertPost(entry));` to `const blogPosts = res.items.map((entry) => this.convertPost(entry)).filter((post) => post !== null) as NonNullable<ConvertedPost>[];`

- changed

```
  async getAllTags(): Promise<{ id: string; title: string }[]> {
    const res = await this.client.getEntries<BlogTagsSkeleton>({
      content_type: "blogTags",
    });
```

to

```
async getAllTags() {
  const res = await this.client.getEntries<TypeTagsSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">({
      content_type: "tags",
      });
```

- removed promises

```
  async getTagInfoBySlug(slug: string): Promise<ITags> {
    const res = await this.client.getEntries<any>({
      content_type: "blogTags",
```

and

```
  async getPaths(): Promise<{ slug: string }[]> {
    const res = await this.client.getEntries({
      content_type: "blogTags",
```

to

```
async getTagInfoBySlug(slug: string) {
    const res = await this.client.getEntries<TypeTagsSkeleton>({
      content_type: "tags",
```

and

```
  async getPaths() {
    const res = await this.client.getEntries<TypeTagsSkeleton>({
      content_type: "tags",
```

# README.md for `lib/contentfulApi.ts`

## Introduction

- This module serves as a comprehensive interface to interact with Contentful's API, focusing primarily on blog operations.
- It utilizes TypeScript to enforce type safety, ensuring that data structures align with expected models.

## Class: `ContentfulApi`

### Properties

- `client`: Instance of `ContentfulClientApi`.
- `dateOptions`: Formatting options for date strings.

### Constructors

- `constructor(preview?: boolean)`: Initializes the client, optionally in preview mode.

### Methods

#### `convertImage(rawImage: any)`

- Transforms raw Contentful asset to `CoverImage` or `TagIconProp`.
- Standardizes image data.

#### `convertAuthor(rawAuthor: Author)`

- Transforms raw author data to `Author` type.
- Standardizes author data.

#### `formatDate(rawDate: string)`

- Transforms raw date to a human-readable format.
- Uses `Intl.DateTimeFormat`.

#### `convertPost(rawData: any)`

- Converts raw Contentful entry to `BlogPost`.
- Utilizes `convertImage` and `convertAuthor`.

#### Data Fetch Methods

- `fetchBlogEntries({ limit, skip, tag }: BlogEntriesProps)`: Fetches a list of blog posts. Returns `BlogEntriesReturnType`.
- `fetchBlogImages()`: Fetches blog images.
- `fetchBlogBySlug(slug: string)`: Fetches a specific blog post by slug.
- `getAllTags()`: Fetches all available tags.
- `getTagIdByTitle(tagTitle: string)`: Finds tag ID by tag title.
- `fetchBlogPostsByTag(tagTitle: string)`: Fetches all blog posts associated with a given tag.

## Types and Interfaces

- `Author`: Represents a blog post's author.
- `CoverImage`: Describes a cover image.
- `BlogPost`: Describes a complete blog post.
- `TypeBlogFields`: Fields for the Contentful "blog" content type.
- `TypeBlogTagsFields`: Fields for the Contentful "blogTags" content type.

## Type Aliases

- `BlogSkeleton`: Skeleton structure of a blog post.
- `BlogTagsSkeleton`: Skeleton structure of blog tags.
- `BlogEntriesProps`: Parameters for `fetchBlogEntries`.
- `ArticleEntriesProps`: Parameters for fetching articles.

## Exceptions

- Errors and exceptions are logged to the console for now.
