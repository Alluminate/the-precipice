export interface ISysObject {
    space: {
        sys: Record<string, any>;
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
        sys: Record<string, any>;
    };
    revision: number;
}

export interface IField {
    id: string;
    name: string;
    type: 'Symbol' | 'RichText';
    localized: boolean;
    required: boolean;
    disabled: boolean;
    omitted: boolean;
}

export interface IBlogTags {
    sys: ISysObject;
    displayField: string;
    name: string;
    description: string;
    fields: IField[];
}

export interface ITagType {
    metadata: {
      tags: any[];
    };
    sys: {
      space: {
        sys: {
          type: 'Link';
          linkType: 'Space';
          id: string;
        };
      };
      id: string;
      type: 'Entry';
      createdAt: string;
      updatedAt: string;
      environment: {
        sys: {
          id: string;
          type: 'Link';
          linkType: 'Environment';
        };
      };
      revision: number;
      contentType: {
        sys: {
          type: 'Link';
          linkType: 'ContentType';
          id: string;
        };
      };
      locale: string;
    };
    fields: {
      title: string;
      description: {
        nodeType: 'document';
        data: {};
        content: {
          nodeType: 'paragraph';
          data: {};
          content: {
            nodeType: 'text';
            value: string;
            marks: any[];
            data: {};
          }[];
        }[];
      };
      slug: string;
    };
  }

export const IContentTypes = [
    'codeblocks',
    'blog',
    'academy',
    'blogTags',
    'author',
    'academyTags'
] as const;

export type ContentTypesKeys = typeof IContentTypes[number];



