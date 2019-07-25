import React from "react"
import Layout from "../components/layout"
import styles from "../css/error.module.css"
import Banner from "../components/banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops, that's not good. Dead End">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
