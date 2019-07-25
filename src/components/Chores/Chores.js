import React from "react"
import ChoreList from "./ChoreList"
import { useStaticQuery, graphql } from "gatsby"

const getChores = graphql`
  query {
    chores: allContentfulChore {
      edges {
        node {
          name
          price
          slug
          contentful_id
          description {
            description
          }
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

const Chores = () => {
  const { chores } = useStaticQuery(getChores)

  return <ChoreList chores={chores} />
}

export default Chores
