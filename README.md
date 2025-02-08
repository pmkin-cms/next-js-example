# Next.js 14 Blog with PMKIN CMS

This project showcases a modern blog built with Next.js 14, leveraging
[PMKIN CMS](https://pmkin.io) for content management and its GraphQL API for
data fetching. The blog posts are rendered using the `marked` library, offering
a seamless markdown experience.

You can see it live at: https://pmkin-next-js-example.vercel.app/

## Features

- **Next.js 14**: Utilizes the latest features of Next.js for fast,
  server-rendered React applications.
- **PMKIN CMS Integration**: Fetches blog posts via PMKIN's GraphQL API,
  ensuring dynamic content management.
- **Markdown Rendering**: Uses the `marked` library to convert markdown content
  into HTML, enabling rich post formatting.
- **Responsive Design**: Ensures a great reading experience on devices of all
  sizes.

## Getting Started

Follow these steps to get your development environment set up.

### Prerequisites

- Node.js (version 18 or later)
- Yarn package manager

### Installation

Clone the repository:

```bash
git clone https://github.com/pmkin-cms/next-js-example
cd next-js-example

```

Install dependencies:

```bash
yarn

```

Create a .env.local file at the root of your project and add your PMKIN CMS API
credentials:

```env
PMKIN_API_KEY=your_api_key

```

Start the development server:

```bash
yarn dev

```

Visit `http://localhost:3000` in your browser to view the blog.

## License

This project is licensed under the MIT License - see the LICENSE.md file for
details.
