module.exports = {
  siteMetadata: {
    title: `Serena`,
    description: `Photography Theme`,
    author: "Gatsby",
    image: "https://gatsby-theme-serena.netlify.com/og-image.webp",
    name: `Serena`,
    tagline: `Photography Theme`,
    social: [
      {
        name: `Facebook`,
        url: `https://facebook.com`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com`,
      },
      {
        name: `Instagram`,
        url: `https://instagram.com`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Serena`,
        short_name: `Serena`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        icon: `content/assets/icon.png`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-theme-serena`,
      options: {},
    },
  ],
}
