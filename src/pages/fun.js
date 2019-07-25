import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const Fun = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultFunBcg.childImageSharp.fluid} />
    </Layout>
  )
}
export default Fun

export const query = graphql`
  query {
    defaultFunBcg: file(relativePath: { eq: "funBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
