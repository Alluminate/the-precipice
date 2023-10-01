# For The Precipice

Tech Stack

- Typescript
- Next.js (bootstrapped with CRA)
- Tailwind.css
- postcss
- Hooks
- Context API

<hr>

## components.json

- `schema`: This is a common field used in JSON configuration files to link to a JSON schema that provides validation for the configuration file. Tools that recognize this can validate your config against this schema, ensuring you're not using invalid fields or values. The URL provided gives a hint about where this configuration might be coming from.
  style: This likely refers to a specific style or theme setting. The value "default" suggests it's using a standard style, but there might be other valid values you could use here.
- `rsc`: Not clear without additional context. It's a boolean flag, so it's turning on or off some feature.
- `tailwind`: This section has configurations related to TailwindCSS:
- `config`: Path to your Tailwind configuration file.
- `css`: Path to global CSS styles.
- `baseColor`: It might be a preset color scheme for the components.
- `cssVariables`: Whether to use CSS variables (custom properties). It's set to true, so it's likely that dynamic styles are being derived from CSS variables.
- `aliases`: Path aliases can simplify imports in your project. Instead of using relative paths (../../components/Button), you can use the alias (@/components/Button). These might need to be integrated into your webpack or TypeScript configurations for them to work.

# app

## globals.css

Controls light and dark theme values for potential themes enablign that switching functionality

# lib

## ContentfulAPI

Be aware that the new space is in a text file

# Default Materials

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
