import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBlogPostFields {
    title: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.RichText;
    subtitle: EntryFieldTypes.Text;
    publishedDate: EntryFieldTypes.Date;
    slug: EntryFieldTypes.Symbol;
    tag: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    coverImage: EntryFieldTypes.AssetLink;
    author: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<TypeBlogPostFields, "blogPost">;
export type TypeBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;

export function isTypeBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeBlogPost<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'blogPost'
}
