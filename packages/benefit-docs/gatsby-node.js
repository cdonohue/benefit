const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              route
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic('🚨  ERROR: Loading "createPages" query', result.errors)
  }
  // Create blog post pages.
  const docs = result.data.allMdx.edges
  // We'll call `createPage` for each result
  docs.forEach(({ node }, index) => {
    createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.route,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/Page.js`),
      // We can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}
