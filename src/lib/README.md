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
