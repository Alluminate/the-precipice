# App Folder: Technical Documentation for Next.js with App Router

## 📝 Introduction

- **Purpose**: App architecture aims to define the Next.js project by employing the app router.

## 🎯 Objectives and KPIs

- **Objective**: Craft specialized, dynamic routes and page components.
- **Key Performance Indicator (KPI)**: Sub-200ms TTFB, Google Lighthouse SEO & performance score above 90.

## 📂 Directory Structure

### `[slug]`

- **Role**: To create dynamic routes based on tags.
- **Functionality**: Utilizes custom app router for SSR/SSG.

### `about`

- **Role**: Informative 'About Us' page.
- **Status**: Not yet implemented.

### `archives`

- **Role**: Repository for blog titles and lists.
- **Rendering Strategy**: Considers lazy-loading for extensive lists.

### `blog`

- **Role**: Main hub for all blog-related content and design.
- **Data Source**: Pulls from CMS such as Contentful or Sanity.io.

### `contact`

- **Role**: A contact form page for user inquiries.
- **Status**: Not yet implemented.

### `home`

- **Role**: Serves as the landing page for the application.
- **Design Strategy**: Leverages atomic design principles.

### `services`

- **Role**: Previously used folder, now deprecated.
- **Status**: Consider removal or archival.

## 🛠 Technologies & Dependencies

- **Next.js**: Core framework.
- **Custom App Router**: Special routing logic replacing Next.js' default pages-based routing.

## 🌐 API Endpoints & Functions

- `fetchByTag()`: Fetches pages by tag from CMS.
- `archiveList()`: Aggregates blog titles for the `archives` folder.

## 📈 Monitoring and Analytics

- **Web Vitals**: Utilized for frontend performance tracking.
- **Sentry**: Real-time error tracking and analytics.

## 🔒 Security Considerations

- **Content Security Policy (CSP)**: To mitigate XSS attacks.
- **Input Validation**: Particularly for `contact` form fields to prevent SQL Injection.

## 🚀 Deployment & Scaling

- **CI/CD Pipeline**: Automated testing and deployment.
- **Serverless Architecture**: Facilitates horizontal scaling.

## 🚧 Known Issues & Troubleshooting

- **Dynamic Routing**: Make sure the `[slug]` folder's custom routing is flawless.
- **Lazy-Loading**: Verify if effectively implemented in `archives`.

## 🗺 Roadmap

- Implement `about` and `contact` pages.
- Consider rearchitecting or removing `services`.
