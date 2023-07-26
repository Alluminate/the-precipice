import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES, } from '@contentful/rich-text-types';

import { BlockQuote } from "@/components/ui/blockquote";
import { Icons } from "@/components/icons";
import { ContentfulImage } from "@/components/ui/contentful-image";

import { slugify } from "./utils";
import { siteConfig } from "@/config/site";

export const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, description, file } = node.data.target.fields;

      const mimeType = file?.contentType
      const mimeGroup = mimeType?.split('/')[0]

      switch (mimeGroup) {
        case 'image':
          return (
            <ContentfulImage
              title={title ? title : null}
              alt={description ? description : null}
              src={file.url}
              style={{ objectFit: 'contain' }}
            />
          )

        case 'video':
          return (
            <div className='aspect-video'>
              <video controls width={'100%'}>
                <source src={file.url} type='video/mp4' />
                <p>Your browser doesnt support HTML5 video.</p>
              </video>
            </div>
          )

        case 'application':
          return (
            <a
              title={description ? description : null}
              href={file.url}
            >{title ? title : file.details.fileName}
            </a>
          )
        default:
          return <span style={{ backgroundColor: 'white', color: 'black' }}> {mimeType} embedded asset </span>
      }

    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any, children) => {
      const { sys, fields } = node.data.target;
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (sys.contentType.sys.id === "codeblocks") {
        return (
          <pre>
            {fields.codeblock}
          </pre>
        );
      }

      if (sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={fields.embedUrl}
            height="100%"
            width="100%"
            title={fields.title}
            allowFullScreen={true}
          />
        );
      }

      // switch (node.data.target.sys.contentType.sys.id) {
      //   case 'blockquote':
      //     return <div>
      //       <BlockQuote quoteText={fields.quoteText} quoter={fields.quoter} />
      //     </div>

    },
    [BLOCKS.PARAGRAPH]: (node: any, children) => <p className='text-foreground'>{children}</p>,
    [BLOCKS.HEADING_1]: (node: any) => {
      const headingId = slugify(node.content[0].value)
      return (
        <h1 className="flex items-center group mt-14 mr-0 mb-7 ml-0 text-3xl">
          <span id={headingId}></span>
          <a className="mr-2 not-prose text-foreground no-underline font-bold text-3xl" href={`#${headingId}`}>
            {node.content[0].value}
          </a>
          <span className="invisible group-hover:visible">
            <Icons.permaLink size={'0.75em'} />
          </span>
        </h1>
      )
    },
    [BLOCKS.HEADING_2]: (node: any) => {
      const headingId = slugify(node.content[0].value)
      return (
        <h2 className="flex items-center group mt-14 mr-0 mb-5 ml-0 text-xl">
          <span id={headingId}></span>
          <a className="mr-2 not-prose text-foreground no-underline font-bold text-xl" href={`#${headingId}`}>
            {node.content[0].value}
          </a>
          <span className="invisible group-hover:visible">
            <Icons.permaLink size={'0.75em'} />
          </span>
        </h2>
      )
    },
    [BLOCKS.HEADING_3]: (node: any) => {
      const headingId = slugify(node.content[0].value)
      return (
        <h3 className="flex items-center group mt-14 mr-0 mb-4 ml-0 text-lg">
          <span id={headingId}></span>
          <a className="mr-2 not-prose text-foreground no-underline font-bold text-lg" href={`#${headingId}`}>
            {node.content[0].value}
          </a>
          <span className="invisible group-hover:visible">
            <Icons.permaLink size={'0.75em'} />
          </span>
        </h3>
      )
    },
    [BLOCKS.HEADING_4]: (node: any) => {
      const headingId = slugify(node.content[0].value)
      return (
        <h4 className="flex items-center group mt-14 mr-0 mb-8 ml-0">
          <span id={headingId}></span>
          <a className="mr-2 not-prose text-foreground no-underline font-bold" href={`#${headingId}`}>
            {node.content[0].value}
          </a>
          <span className="invisible group-hover:visible">
            <Icons.permaLink size={'0.75em'} />
          </span>
        </h4>
      )
    },
    [BLOCKS.HEADING_5]: (node: any) => {
      const headingId = slugify(node.content[0].value)
      return (
        <h5 className="flex items-center group mt-14 mr-0 mb-8 ml-0">
          <span id={headingId}></span>
          <a className="mr-2 not-prose text-foreground no-underline font-bold" href={`#${headingId}`}>
            {node.content[0].value}
          </a>
          <span className="invisible group-hover:visible">
            <Icons.permaLink size={'0.75em'} />
          </span>
        </h5>
      )
    },
    [BLOCKS.HEADING_6]: (node: any) => {
      const headingId = slugify(node.content[0].value)
      return (
        <h6 className="flex items-center group mt-14 mr-0 mb-8 ml-0">
          <span id={headingId}></span>
          <a className="mr-2 not-prose text-foreground no-underline font-bold" href={`#${headingId}`}>
            {node.content[0].value}
          </a>
          <span className="invisible group-hover:visible">
            <Icons.permaLink size={'0.75em'} />
          </span>
        </h6>
      )
    },
    [INLINES.HYPERLINK]: ({ data }, children) => {
      return (
        <a className="text-primary" href={data?.uri}
          target={`${data?.uri.startsWith(siteConfig.url) ? '_self' : '_blank'}`}
          rel={`${data?.uri.startsWith(siteConfig.url) ? '' : 'noopener noreferrer'}`}
        >
          {children}
        </a>
      )
    }
  },
  renderMark: {
    [MARKS.UNDERLINE]: (text: any) => <span className="break-all underline">{text}</span>,
    [MARKS.BOLD]: (text: any) => <span className="font-bold">{text}</span>,
    [MARKS.CODE]: (text: any) => <code className="font-semibold">{text}</code>
  },
  // renderText: text => {
  //   return text.split('\n').reduce((children, textSegment, index) => {
  //     return [...children, index > 0 && <br key={index} />, textSegment];
  //   }, []);
  // },
}