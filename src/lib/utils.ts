import { Metadata } from "next";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/config/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const calculateRange = (length: number) => Array.from({ length }, (_, k) => k + 1);

type getMetadataProps = {
  title: string;
  description: string;
  url: string;
  type: "website" | "article";
  imageUrl?: string
};
export const getMetadata = ({ title, description, url, type, imageUrl }: getMetadataProps): Metadata => ({
  title: title,
  description: description,
  openGraph: {
    type: type,
    url: url,
    title: title,
    description: description,
    siteName: title,
    authors: ['Thorium'],
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
})