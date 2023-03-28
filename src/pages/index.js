import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export default ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
    allStrapiBlog: { nodes: blogs }
  } = data;

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title={"Latest articles"} showLink />
    </Layout>
  )
}

export const query = graphql`
query {
  allStrapiProject(filter: {featured: {eq: true}}) {
    nodes {
      github
      id
      description
      title
      url
      stack {
        title
        id
      }
      image {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }

  allStrapiBlog(sort: {date: DESC}, limit: 3) {
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`
