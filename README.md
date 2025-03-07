# SCP Charity Website

This is the official website for Supporting Children's Pathways charity, built using modern web technologies to provide an accessible and user-friendly experience for our visitors.

## About the Website

Our website serves as a central hub for information about our charity's mission, programs, and ways to get involved. It features:
- Information about our work and impact
- Ways to donate and support our cause
- News and updates about our programs
- Contact information and ways to get involved
- Search functionality to help visitors find what they need

## Technical Details

The website is built using:
- [Hugo](https://gohugo.io/) - A fast and modern static site generator
- The [Dot-Org Hugo Theme](https://themes.gohugo.io/themes/dot-org-hugo-theme/) - A modern, accessible theme ideal for non-profit organizations

## Prerequisites

To work on the website locally, you'll need:
- [Hugo](https://gohugo.io/installation/) installed on your system
- [Node.js](https://nodejs.org/) installed on your system
- Git

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd SCPCharity
```

2. Install project dependencies:
```bash
npm install
```

## Local Development

To run the site locally:

```bash
npm run start
```

This will start a local development server. You can view your site at `http://localhost:1313`.

To build the site:

```bash
npm run build
```

## Project Structure

```
SCPCharity/
├── config/             # Website configuration files
├── content/            # Website content (pages, posts, etc.)
├── static/             # Static assets (images, CSS, JS)
├── themes/             # Theme files
│   └── dot-org-hugo-theme/  # The main theme
├── package.json       # Node.js dependencies
└── postcss.config.js  # PostCSS configuration
```

The main directories you'll work with are:
- `content/` - Where you'll add and edit website content
- `config/` - Contains site configuration and settings
- `static/` - For adding images and other static files
- `themes/dot-org-hugo-theme/` - The theme files (usually you won't need to modify these)

## Features

The website includes:
- Modern, accessible design
- Responsive layout for all devices
- Multilingual support
- Easy-to-navigate mega menu
- FAQ section with accordion layout
- Search functionality to help visitors find information
- Custom content components for various types of information

## Search Functionality

To enable search functionality:

1. Build your site:
```bash
npm run build
```

2. Generate the search index:
```bash
npx -y pagefind --site public
```

Note: You'll need to regenerate the search index whenever you update your content.

## Contributing

We welcome contributions! To help improve our website:

1. Fork the repository and create a new branch for your changes
2. Make your changes and test them locally
3. Submit a Pull Request with a clear description of your changes
4. Link any related issues in your PR description

## License

This project is dual-licensed:

- **Technical Components**: The website's code and structure are licensed under the MIT License, allowing for reuse and modification of the technical implementation.
- **Content**: All content, including text, images, and other media, is © 2025 Supporting Children's Pathways. All rights reserved. This content may not be reproduced, distributed, or used without explicit permission. 