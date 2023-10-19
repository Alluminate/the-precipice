# Author

```
{
  "name": "Author",
  "description": "",
  "displayField": "name",
  "fields": [
    {
      "id": "name",
      "name": "Name",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [
        {
          "unique": true
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "bio",
      "name": "Bio",
      "type": "Text",
      "localized": false,
      "required": false,
      "validations": [],
      "defaultValue": {
        "en-US": "Mitchell is a Product Manager with 6 years of experience working in startups. Introduced to blockchain in Spring of 2017. Mitchell and his friends embarked on a crypto startup spree and created Coinscore, a precursor to Messari, and a CryptoKitties-copycat NFT video-game, called CryptoPets, before he teamed up with Michael and Powers on BUIDLHub. "
      },
      "disabled": false,
      "omitted": false
    }
  ],
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "h8dzfmrvmn3m"
      }
    },
    "id": "author",
    "type": "ContentType",
    "createdAt": "2023-09-22T22:38:42.063Z",
    "updatedAt": "2023-09-25T13:44:39.184Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2023-09-25T13:44:39.184Z",
    "firstPublishedAt": "2023-09-22T22:38:42.294Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "2cq8RS1aiIXNsziEs281QC"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "2cq8RS1aiIXNsziEs281QC"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "2cq8RS1aiIXNsziEs281QC"
      }
    }
  }
}
```

# Blog Post

```
{
  "name": "Blog Post",
  "description": "",
  "displayField": "title",
  "fields": [
    {
      "id": "title",
      "name": "Title",
      "type": "Symbol",
      "localized": true,
      "required": true,
      "validations": [
        {
          "unique": true
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "content",
      "name": "Content",
      "type": "RichText",
      "localized": true,
      "required": true,
      "validations": [
        {
          "enabledMarks": [
            "bold",
            "italic",
            "underline",
            "code",
            "superscript",
            "subscript"
          ],
          "message": "Only bold, italic, underline, code, superscript, and subscript marks are allowed"
        },
        {
          "enabledNodeTypes": [
            "heading-1",
            "heading-2",
            "heading-3",
            "heading-4",
            "heading-5",
            "heading-6",
            "ordered-list",
            "unordered-list",
            "hr",
            "blockquote",
            "embedded-entry-block",
            "embedded-asset-block",
            "table",
            "hyperlink",
            "entry-hyperlink",
            "asset-hyperlink",
            "embedded-entry-inline"
          ],
          "message": "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed"
        },
        {
          "nodes": {}
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "subtitle",
      "name": "Subtitle",
      "type": "Text",
      "localized": true,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "publishedDate",
      "name": "Published Date",
      "type": "Date",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "slug",
      "name": "Slug",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [
        {
          "unique": true
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "tag",
      "name": "Tag",
      "type": "Link",
      "localized": true,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "linkType": "Entry"
    },
    {
      "id": "coverImage",
      "name": "Cover Image",
      "type": "Link",
      "localized": false,
      "required": true,
      "validations": [
        {
          "assetImageDimensions": {
            "width": {
              "min": 637,
              "max": null
            },
            "height": {
              "min": null,
              "max": null
            }
          }
        },
        {
          "assetFileSize": {
            "min": 0,
            "max": 6291456
          }
        }
      ],
      "disabled": false,
      "omitted": false,
      "linkType": "Asset"
    },
    {
      "id": "author",
      "name": "Author",
      "type": "Link",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "linkType": "Entry"
    }
  ],
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "h8dzfmrvmn3m"
      }
    },
    "id": "blogPost",
    "type": "ContentType",
    "createdAt": "2023-09-22T22:39:58.116Z",
    "updatedAt": "2023-10-08T14:26:46.996Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 21,
    "publishedAt": "2023-10-08T14:26:46.996Z",
    "firstPublishedAt": "2023-09-22T22:39:58.346Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "2cq8RS1aiIXNsziEs281QC"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "2cq8RS1aiIXNsziEs281QC"
      }
    },
    "publishedCounter": 11,
    "version": 22,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "2cq8RS1aiIXNsziEs281QC"
      }
    }
  }
}
```

# Tags

```
{
  "name": "Tags",
  "description": "",
  "displayField": "tagName",
  "fields": [
    {
      "id": "tagName",
      "name": "Tag Name",
      "type": "Symbol",
      "localized": true,
      "required": true,
      "validations": [
        {
          "unique": true
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "slug",
      "name": "slug",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [
        {
          "unique": true
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "description",
      "name": "Description",
      "type": "RichText",
      "localized": true,
      "required": true,
      "validations": [
        {
          "enabledMarks": [
            "bold",
            "italic",
            "underline",
            "code",
            "superscript",
            "subscript"
          ],
          "message": "Only bold, italic, underline, code, superscript, and subscript marks are allowed"
        },
        {
          "enabledNodeTypes": [
            "heading-1",
            "heading-2",
            "heading-3",
            "heading-4",
            "heading-5",
            "heading-6",
            "ordered-list",
            "unordered-list",
            "hr",
            "blockquote",
            "embedded-entry-block",
            "embedded-asset-block",
            "table",
            "hyperlink",
            "entry-hyperlink",
            "asset-hyperlink",
            "embedded-entry-inline"
          ],
          "message": "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed"
        },
        {
          "nodes": {}
        }
      ],
      "disabled": false,
      "omitted": false
    }
  ],
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "h8dzfmrvmn3m"
      }
    },
    "id": "tags",
    "type": "ContentType",
    "createdAt": "2023-09-22T22:42:17.613Z",
    "updatedAt": "2023-09-26T11:07:37.110Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2023-09-26T11:07:37.110Z",
    "firstPublishedAt": "2023-09-22T22:42:17.889Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "2cq8RS1aiIXNsziEs281QC"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "2cq8RS1aiIXNsziEs281QC"
      }
    },
    "publishedCounter": 3,
    "version": 6,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "2cq8RS1aiIXNsziEs281QC"
      }
    }
  }
}
```
