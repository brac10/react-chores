import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import FeaturedChores from "../components/Home/FeaturedChores"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Link to="/chores" className="btn-white">
        Chore List
      </Link>
    </StyledHero>
    <About />
    <Services />
    <FeaturedChores />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
