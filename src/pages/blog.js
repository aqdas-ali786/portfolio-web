import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({ data }) => {
  const { allStrapiBlog: { nodes: blogs } } = data;

  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title={"blog page"} />
      </section>
    </Layout>
  )
}

export const query = graphql`{
  allStrapiBlog {
    nodes {
      category
      id
      description
      slug
      title
      strapi_id
      date(formatString: "MMM Do,YYYY")
      image {
        localFile {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
}
`

export default Blog
