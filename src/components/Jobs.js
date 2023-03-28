import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  query {
    allStrapiJob(sort: {strapi_id: DESC}) {
      nodes {
        company
        id
        position
        Date
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const { allStrapiJob: { nodes: jobs } } = useStaticQuery(query);
  const [value, setValue] = React.useState(0);
  const { company, position, Date, desc } = jobs[value];
  return (
    <section className="section jobs">
      <Title title={"Experience"} />
      <div className="jobs-center">
        {/**button container */}
        <div className="btn-container">
          {
            jobs.map(({ strapi_id, company }, index) => (
              <button
                key={strapi_id}
                className={`job-btn ${value === index && "active-btn"}`}
                onClick={() => setValue(index)}
              >{company}</button>
            ))
          }
        </div>
        {/** job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{Date}</p>
          {
            desc?.map(({ name, id }) => (
              <div key={id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{name}</p>
              </div>
            ))
          }
        </article>
      </div>
      <Link to="/about" className="btn center-btn">more info</Link>
    </section>
  )
}

export default Jobs
