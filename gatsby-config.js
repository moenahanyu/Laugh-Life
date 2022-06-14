

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: '76529675e19e4b1c8533aacec49d43d161a6',
        serviceId: 'u83tgepg1m',
        apis: [
          {
            endpoint: "news",
          },
        ],
      },
    },
  ],
}
