import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

const About = ({ data }) => {
  const { about: { nodes } } = data;
  const { title, stack, info, image } = nodes[0];
  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <Image
          fluid={image.localFile.childImageSharp.fluid}
          className="about-img"
        />
        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {
              stack.map(stack => (
                <span key={stack.id}>
                  {stack.title}
                </span>
              ))
            }
          </div>
        </article>
      </div>
    </section>
  </Layout>
}
export const query = graphql`
  query {
    about:allStrapiAbout {
      nodes {
        title
        info
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

export default About
