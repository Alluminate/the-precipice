import Balance from "react-wrap-balancer";

import { cn } from "@/lib/utils";

// For "The Precipice" on Landing
function LandingHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        // "flex h-[100svh] md:h-[100vh] flex-col items-center gap-2 px-4 md:px-12 pt-40 md:pt-44 font-firaSansCondensed",
        "place-items-start text-5xl md:text-7xl 2xl:text-8xl pt-20 font-firaSansCondensed",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

// Used for about page and landing page
function BigSubHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      // text-2xl font-openSans sm:text-3xl max-w-xs
      className={cn(
        "font-openSans text-2xl 2xl:text-4xl leading-relaxed md:leading-snug 2xl:leading-normal",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

function BlogCardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        // "flex h-[100svh] md:h-[100vh] flex-col items-center gap-2 px-4 md:px-12 pt-40 md:pt-44 font-firaSansCondensed",
        // text-base md:text-lg capitalize font-bold
        "place-items-start text-3xl xl:text-3xl 2xl:text-3xl font-semibold font-firaSansCondensed",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function BlogCardExcerpt({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl font-firaSans",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

function PreviewCardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        // "flex h-[100svh] md:h-[100vh] flex-col items-center gap-2 px-4 md:px-12 pt-40 md:pt-44 font-firaSansCondensed",
        // text-base md:text-lg capitalize font-bold
        "place-items-start text-3xl xl:text-4xl 2xl:text-5xl font-semibold font-firaSansCondensed",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function PreviewCardExcerpt({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-base md:text-xl lg:text-2xl xl:-2xl 2xl:text-3xl font-firaSans",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// For About/Archives page titles and the Footer title
function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        //  "flex h-[100svh] md:h-[100vh] flex-col items-center gap-2 px-4 md:px-12 pt-40 md:pt-44 font-firaSansCondensed",
        "items-center font-firaSansCondensed text-5xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-extrabold uppercase",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl font-firaSansCondensed font-bold leading-tight tracking-tighter md:text-7xl lg:leading-[1.1]",
        className
      )}
      {...props}
    >
      <Balance>{children}</Balance>
    </h1>
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        "max-w-[750px] text-lg font-firaSans text-foreground sm:text-xl",
        className
      )}
      {...props}
    />
  );
}

function SubHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-2xl sm:text-3xl font-bold max-w-xs", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

function Paragraph({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-base md:text-lg font-firaSans", className)}
      {...props}
    >
      {children}
    </p>
  );
}

// Titles of themes on the Archive Page
function ArchivePageTagTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        // "text-sm leading-tight tracking-tighter lg:leading-[1.1]",
        "font-firaSansCondensed font-semibold text:lg md:text-xl uppercase",
        className
      )}
      {...props}
    >
      <Balance>{children}</Balance>
    </h1>
  );
}

// Titles of blogs on the Archive Page
function ArchivePageBlogTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        // "text-sm font-firaSans font-semibold leading-tight tracking-tighter md:text-md lg:leading-[1.1]",
        "font-firaSans font-semibold text-md md:text-lg",
        className
      )}
      {...props}
    >
      <Balance>{children}</Balance>
    </h1>
  );
}

// Title rendered in the middle of the cover image
function BlogPageTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl font-firaSansCondensed font-semibold leading-tight tracking-tighter md:text-7xl lg:leading-[1.1] uppercase",
        className
      )}
      {...props}
    >
      <Balance>{children}</Balance>
    </h1>
  );
}

// For the title of blog cards outside of the blog page - in archives/:tag and landing
function BlogDescriptionTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-2xl sm:text-3xl font-bold max-w-xs", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

// TODO: Add to export function
// For the exercpt on each blog page
function BlogPageFiledUnder({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        // max-w-[750px]
        "text-xl md:text-2xl font-openSans text-foreground",
        className
      )}
      {...props}
    />
  );
}

// For the exercpt on each blog page
function BlogExcerpt({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        // max-w-[750px]
        "text-3xl md:text-4xl font-openSans text-foreground sm:text-xl",
        className
      )}
      {...props}
    />
  );
}

// For the text of blogs
function BlogParagraph({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-base md:text-lg font-lora", className)} {...props}>
      {children}
    </p>
  );
}

// for the author bio
function BlogBio({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-base md:text-lg font-lora", className)} {...props}>
      {children}
    </p>
  );
}

export {
  LandingHeader,
  BigSubHeader,
  BlogCardTitle,
  BlogCardExcerpt,
  PreviewCardTitle,
  PreviewCardExcerpt,
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  SubHeader,
  Paragraph,
  ArchivePageTagTitle,
  ArchivePageBlogTitle,
  BlogDescriptionTitle,
  BlogPageTitle,
  BlogPageFiledUnder,
  BlogExcerpt,
  BlogParagraph,
  BlogBio,
};
