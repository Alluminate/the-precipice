import { Metadata } from "next";
// for dynamic classname utilities.
import { type ClassValue, clsx } from "clsx";
//  to merge multiple Tailwind CSS classes into optimized ones.
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/config/site";

// This function takes multiple class name inputs, combines them using clsx and optimizes the merged class string using twMerge. This is useful for dynamically applying class names in a component.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// A function to convert any string into a URL-friendly slug. For example, "Hello World!" would be converted to "hello-world".
export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

// A function that takes a number length and returns an array with values ranging from 1 to length. Useful for generating arrays with sequential numbers.
export const calculateRange = (length: number) =>
  Array.from({ length }, (_, k) => k + 1);

// A utility function that constructs metadata for pages. First, a type definition getMetadataProps is created to type-check the input. The function then takes the input and returns an object structured for metadata, likely for SEO and social sharing purposes.
type getMetadataProps = {
  title: string;
  description: string;
  url: string;
  type: "website" | "article";
  imageUrl?: string;
};
export const getMetadata = ({
  title,
  description,
  url,
  type,
  imageUrl,
}: getMetadataProps): Metadata => ({
  title: title,
  description: description,
  openGraph: {
    type: type,
    url: url,
    title: title,
    description: description,
    siteName: title,
    authors: ["The Precipice"],
    images: [
      {
        url: imageUrl ? imageUrl : siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [`${imageUrl ? imageUrl : siteConfig.ogImage}`],
  },
});


export function detailedServerLogger(obj: any, prefix = ''): void {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        console.log(`${prefix} ${key}: (Array)`);
        value.forEach((item, index) => {
          console.log(`${prefix}  [${index}]:`);
          detailedServerLogger(item, `${prefix}    `);
        });
      } else {
        console.log(`${prefix} ${key}: (Object)`);
        detailedServerLogger(value, `${prefix}  `);  // Recursive call with increased indentation
      }
    } else {
      console.log(`${prefix} ${key}: ${value}`);
    }
  });
}
