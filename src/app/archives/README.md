# Archives Folder

## Overview

The `archives` folder consists of components and logic for rendering archived or older content. It is structured into sub-components to manage the layout and data retrieval for displaying archives in a grid format along with associated tags.

## Structure

- `archives-content/`
  - `index.tsx` : An outdated file, demonstrating how rich text from `contentfulApi.ts` is interpreted to create a blog page.
- `archives-grid/`
  - `index.tsx` : Lays out a grid for independent lists.
  - `archive-list.tsx` : Lays out the relevant blog titles for each tag in the list with a button to navigate to the whole tag page.
  - `archive-card.tsx` : An unused file, retained from an earlier project layout, demonstrates a use of types defined in `contentfulApi.ts`.
- `archives-tags/`

  - `index.tsx` : Contains older logic for fetching tags using a query string function to update the page inline with pagination.

- `page.tsx` : Exports the page as a structured component to be inserted into the main page layout.
- `index.tsx` : Exports each of the subcomponents making them accessible to `page.tsx`.

## Usage

This folder is primarily for reference and may contain outdated or unused components. Some components, like the query string function in `archives-tags/index.tsx`, may still have relevant logic for newer implementations.

To adapt any logic or component from this folder, it's recommended to copy the necessary code to the active directories and ensure compatibility with the current project setup.

## Notes

- Before reusing or modifying any components from this folder, ensure understanding of the original context and the current project requirements.
- Some components showcase usage of types and data retrieval methods from `contentfulApi.ts`, which may be helpful for reference or adaptation.

## Contact

For further clarification or questions regarding the `archives` folder, contact me
