import { TypeAuthorSkeleton, TypeBlogPostSkeleton, TypeTagsSkeleton } from '@contentfulTypes';
import type { ChainModifiers, ContentfulClientApi, Entry, EntrySkeletonType, LocaleCode } from 'contentful';
import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
}).withoutUnresolvableLinks;

type GetEntriesValue<T> = ReturnType<typeof client.getEntries<T extends EntrySkeletonType ? T : never>>

export type BlogPostReturnType = GetEntriesValue<TypeBlogPostSkeleton>
export type AuthorReturnType = GetEntriesValue<TypeAuthorSkeleton>
export type TagsReturnType = GetEntriesValue<TypeTagsSkeleton>
