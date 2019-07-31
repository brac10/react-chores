import React from "react"
import Chore from "../Chores/Chore"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getChores = graphql`
  query {
    featuredChores: allContentfulChore(filter: { featured: { eq: false } }) {
      edges {
        node {
          name
          price
          slug
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedChores = () => {
  const response = useStaticQuery(getChores)
  const chores = response.featuredChores.edges
  return (
    <section className={styles.chores}>
      <Title title="featured" subtitle="chores" />
      <div className={styles.center}>
        {chores.map(({ node }) => {
          return <Chore key={node.contentful_id} chore={node} />
        })}
      </div>

      <AniLink fade to="/chores" className="btn-primary">
        all Chores
      </AniLink>
    </section>
  )
}

export default FeaturedChores
