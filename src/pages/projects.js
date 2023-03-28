import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({ data }) => {
  const { allStrapiProject: { nodes: projects } } = data;
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title={"all projects"}/>
      </section>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  query {
    allStrapiProject {
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
  }
`
