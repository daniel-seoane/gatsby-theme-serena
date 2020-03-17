const withDefaults = require(`./utils/default-options`);
const menuLinks = require(`./utils/default-menu-links`);

module.exports = themeOptions => {
  const options = withDefaults(themeOptions);
  const { mdx = true } = themeOptions;
  return {
    siteMetadata: {
      title: `Title placeholder`,
      description: `Description placeholder`,
      author: "Gatsby",
      image: "",
      name: `Serena`,
      tagline: `Gatsby Theme`,
      menuLinks,
      socialLinks: [
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
    },
    plugins: [
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          defaultLayouts: {
            default: require.resolve("./src/components/page.js")
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // should this be configurable by the end-user?
                maxWidth: 1380,
                linkImagesToOriginal: false
              }
            },
            { resolve: `gatsby-remark-copy-linked-files` },
            { resolve: `gatsby-remark-smartypants` }
          ],
          remarkPlugins: [require(`remark-slug`)]
        }
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-transformer-yaml`,
        options: {
          typeName: `Gallery`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content`,
          name: options.contentPath || `content`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.assetPath || `content/assets`,
          name: options.assetPath || `content/assets`
        }
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-offline`
    ].filter(Boolean)
  };
};
