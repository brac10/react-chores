/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      chores: allContentfulChore {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.chores.edges.forEach(({ node }) => {
    createPage({
      path: `chores/${node.slug}`,
      component: path.resolve("./src/templates/chore-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
