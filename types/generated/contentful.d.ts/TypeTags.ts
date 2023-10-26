import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTagsFields {
    tagName: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
}

export type TypeTagsSkeleton = EntrySkeletonType<TypeTagsFields, "tags">;
export type TypeTags<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTagsSkeleton, Modifiers, Locales>;

export function isTypeTags<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeTags<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'tags'
}
