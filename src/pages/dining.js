import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const Dining = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.diningBcg.childImageSharp.fluid} />
    </Layout>
  )
}
export default Dining

export const query = graphql`
  query {
    diningBcg: file(relativePath: { eq: "diningBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
