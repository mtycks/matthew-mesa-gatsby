module.exports = {
  siteMetadata: {
    title: `Matthew Mesa`,
    description: `Welcome to MatthewMesa.com! I'm Matt; I wear a lot of hats (literally and figuratively)`,
    author: `Matthew Mesa`,
    image: `https://matthewmesa.com/static/ogimage.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130003690-5",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MatthewMesa.com`,
        short_name: `matthewmesa.com`,
        start_url: `/`,
        background_color: `#252734`,
        theme_color: `#252734`,
        display: `minimal-ui`,
        icon: `src/images/mm_icon.png`, // This path is relative to the root of the site.
      },
      
    },
    `@fortawesome/react-fontawesome`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          `gatsby-remark-embedder`
        ],
      },
    },
    `gatsby-plugin-twitter`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
