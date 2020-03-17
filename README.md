![gatsby-theme-serena image cover](https://media.publit.io/file/gatsbyThemeSerena/serena-theme-cover.png)

# Serena Theme

A minimalist Gatsby theme designed for photography and portfolios — with a masonry grid and lightbox

Check out the [live demo](https://gatsby-theme-serena-demo.netlify.com)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/daniel-seoane/gatsby-starter-serena)

## ✨Features

- Minimalist and fast
- Define your galleries with YAML
- Local or remote images
- Masonry grid (vertical or horizontal) and lightbox
- Contact form (Netlify)
- Generate About page and more with MDX
- Social links
- Styling with Theme UI
- Responsive
- Offline support
- Perfect Lighthouse score ([web.dev](https://web.dev))

![Perfect Lighthouse score](https://media.publit.io/file/gatsbyThemeSerena/serena-perfect-score-lighthouse.png )

## 🌐Showcase

Your project using this theme goes here

## 🚀Installation

### New site

Generate a new site pre-configured with Gatsby Theme Serena.

```sh
gatsby new my-themed-site https://github.com/daniel-seoane/gatsby-starter-serena
```

Here are the top-level files and directories you'll see in a site created using the starter:

```text
gatsby-starter-serena
├── content
│   ├── assets
|   ├── ├── icon.png
│   │   └── avatar.webp
│   ├── galleries
│   │   └── index.yml
│   └── pages
│       └── about.mdx
├── static
│   └── og-image.webp
├── src
├── .gitignore
├── gatsby-config.js
├── LICENSE
├── package.json
└── README.md
```

### Add to existing site

1. Install the theme

```sh
npm install --save gatsby-theme-serena
```

or

```sh
yarn add gatsby-theme-serena
```

2. Add the theme to your `gatsby-config.js`

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-serena',
      options: {
        // See config section for more information
      },
    },
  ],
}
```

## 📝Config

| Key              | Default value       | Description                                                                                               |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| `galleriesPath`  | `content/galleries` | Location of galleries, can be one or multiple YML files                                                   |
| `pagesPath`      | `content/pages`     | Location of pages                                                                                         |
| `assetPath`      | `content/assets`    | Location of assets                                                                                        |
| `disableContact` | `false`             | Delete the default Contact page                                                                           |
| `margin`         | `6`                 | Margin between photos in the masonry grid                                                                 |
| `direction`      | `column`            | Direction in the masonry grid, "column" (vertical) or "row" (horizontal)                                  |
| `mdx`            | `true`              | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |

## 📝Additional Configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`.

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `Serena`,
    // Used for the site description and SEO
    description: `Photography Theme`,
     // Used for SEO
    author: "Gatsby",
    // Used for SEO. Must be the full URL for the default image
    image: 'https://www.example.com/og-image.jpg',
    // Typographic logo
    name: `Serena`,
    // Short tagline
    tagline: `Photography Theme`,
    // Navigation links (this is the default)
    menuLinks: [
      {
        name: "About",
        url: "/about/",
        type: "internal" // internal or anchor
      },
      {
        name: "Contact",
        url: "/contact/",
        type: "internal" // internal or anchor
      }
    ],
    // Social links
    social: [
      {
        name: `Facebook`,
        url: `https://facebook.com`
      },
      {
        name: `Twitter`,
        url: `https://twitter.com`
      },
      {
        name: `Instagram`,
        url: `https://instagram.com`
      }
    ]
  }
}
```

## 🖼️Example of gallery

You can use remote or local images, but if you use remote images you cannot use local images and vice versa

### Remote (remote images are downloaded and create a File node)

```yml
- name: Remote
  slug: /remote
  photos:
    - title: San Francisco
      alt: San Francisco
      url: https://images.unsplash.com/photo-1583743220494-3da91330c2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80
    - title: Italy
      alt: Italy
      url: https://images.unsplash.com/photo-1583855282680-6dbdc69b0932?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80
```

### Local

```yml
- name: Local
  slug: /local
  photos:
    - title: San Francisco
      alt: San Francisco
      url: ../assets/san-francisco.png
    - title: Italy
      alt: Italy
      url: ../assets/italy.png
```

## 👥Shadowing

Remember that you can use shadowing

[Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/)

## ✋Support

If you want to thank me or support this project you can buy me a coffee

<a href="https://www.buymeacoffee.com/3fw5qHM" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

Issues and pull requests are welcome

## License

[MIT](LICENSE)