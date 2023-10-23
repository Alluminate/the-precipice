# Blog Page and Component Folder

## Introduction

This repository focuses on maintaining the blog page's core rendering logic. Styling will be custom-managed separately.

## URL Structure

The blog posts adhere to the URL format: `/[tag_slug]/[post_slug]`.

## Components Overview

### `page.tsx`

- Manages tag and post data fetching from Contentful.
- Uses TypeScript Props interface to handle `params` and `searchParams`.

### `page/[page]/layout.tsx`

- Provides the foundational React component layout for child components.
- Designed to be minimalistic for styling flexibility.

### `page/[page]/tag[tag].tsx`

- Acts as a placeholder for blog posts filtered by tags.

### `components/index.tsx`

- Exports all blog-related components.

### `blog/components/header/index.tsx`

- Displays available tags and enables tag selection.
- Utilizes Next.js's `useRouter` and `useSearchParams` hooks.

### `components/blog-content/index.tsx`

- Renders individual blog post details.
- Uses Contentful's `@contentful/rich-text-react-renderer`.

## Codebase Conventions

Follow the linting and formatting guidelines defined in the `.eslintrc` and `.prettierrc` files.

## Tech Stack

- TypeScript
- Next.js
- Contentful
