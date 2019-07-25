import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleChore/Day"

const Template = ({ data }) => {
  const {
    name,
    description: { description },
    images,
    price,
    project,
  } = data.contentfulChore
  const [mainImage, ...choreImages] = images

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {choreImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="Chore"
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              Rates starting at ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
            </p>
          </div>
          <p className={styles.desc}>{description}</p>

          <h2>Schedule</h2>
          <div className={styles.project}>
            {project.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />
            })}
          </div>
          <Link to="/chores" className="btn-primary">
            back to list
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulChore(slug: { eq: $slug }) {
      name
      price
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      project {
        day
        info
      }
      description {
        description
      }
    }
  }
`

export default Template
