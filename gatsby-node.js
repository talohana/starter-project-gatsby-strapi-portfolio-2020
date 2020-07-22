// const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      blogs: allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)

  data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: require.resolve("./src/templates/blog-template.js"),
      context: {
        slug: blog.slug,
      },
    })
  })
}
