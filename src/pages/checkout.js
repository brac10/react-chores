import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Checkout from "../components/Checkout/Checkout"

const checkout = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.checkoutBcg.childImageSharp.fluid} />
      <Checkout />
    </Layout>
  )
}

export const query = graphql`
  query {
    checkoutBcg: file(relativePath: { eq: "checkoutBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default checkout
