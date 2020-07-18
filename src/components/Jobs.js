import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import Title from "./Title"

const query = graphql`
  {
    jobs: allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        position
        date
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const [jobIndex, setJobIndex] = useState(0)

  const {
    jobs: { nodes },
  } = useStaticQuery(query)

  const { company, position, date, description } = nodes[jobIndex]

  return (
    <section className="section jobs">
      <Title title="jobs" />
      <div className="jobs-center">
        <div className="btn-container">
          {nodes.map(({ strapiId, company }, index) => (
            <button
              key={strapiId}
              onClick={() => setJobIndex(index)}
              className={`job-btn ${index === jobIndex && "active-btn"}`}
            >
              {company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(({ id, name }) => (
            <div key={id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
