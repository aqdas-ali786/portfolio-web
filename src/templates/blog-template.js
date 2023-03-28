import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = ({ data }) => {
  const { blog: { content: { data: { content } } } } = data;
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown>
              {content}
            </ReactMarkdown>
          </article>
          <Link to="/blog" className="btn center-btn">blog</Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlog(slug: { eq: $slug }) {
      content {
        data {
          content
        }
      }
    }
  }
`

export default ComponentName
