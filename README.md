# Terminal

Terminal is a minimalistic terminal-inspired astro theme for blogs.

It's based from the minimalistic theme from [ekmas](https://github.com/ekmas).

## Get started

[Create a new repo](https://github.com/dhadjhenni/terminal-astro-blog/generate) from this template.

## Features

- Astro v5
- Tailwind for styling
- Responsive & SEO-friendly
- Dark/Light mode support
- MD & MDX posts
- View Transitions API
- Content collections
- Expressive-code code blocks
- Shiki code syntax styling
- Icons by [Svgrepo](https://www.svgrepo.com/)

## Configure

- Go to `astro.config.mjs` and change site
- Go to `src/config.ts` and configure data for meta tags
- You can also customize colors of entire layout by changing colors in tailwind config.
- You can customize code blocks config by changing `expressiveCode` object in astro config. Visit [expressive-code docs](https://expressive-code.com/reference/configuration) for more info.
- To change code blocks theme, you'll have to update themes both in `themes` array and in `config.ts`

## How to switch themes

- Go to `tailwind.config.ts` and change the theme in the `extend` object.

```
// Choose your themes here
const LIGHT_THEME = 'github-light'
const DARK_THEME = 'github-dark'
```

Themes available:
- dracula
- nord
- one-light
- one-dark
- github-light
- github-dark
- solarized-light
- solarized-dark
- vitesse-light
- vitesse-dark
- one-light-pro
- one-dark-pro
- material-theme-light
- material-theme-dark

## How to add new post

Create a new md/mdx file inside src/content/posts, and make sure it's in this format:

```
---
title: 'First post'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Dec 22 2023'
tags: ['astro', 'blogging', 'learning']
---

Your post
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## License

MIT
