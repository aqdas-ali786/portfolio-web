require('dotenv').config()

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
* @type {import('gatsby').GatsbyConfig}
*/

const strapiConfig = {
  apiURL: process.env.REACT_APP_STRAPI_API_URL,
  accessToken: process.env.REACT_APP_STRAPI_TOKEN,
  collectionTypes: [`job`,`project`,`blog`],
  singleTypes: [`about`]
};

module.exports = {
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig
    },
  ],
  siteMetadata: {
    title: "WebDev Portfolio",
    description: "This is WebDev Portfolio Site",
    copyright: 'this website is copyright 2021 Web Dev',
    author: "@webdev",
    contact: 'me@thewebdevpk.com'
  }
}
