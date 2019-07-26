import React from "react"
import Image from "gatsby-image"
import styles from "../../css/chore.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Chore = ({ chore }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const { name, price, slug, images } = chore

  // let mainImage
  // if (images) {
  //   mainImage = images[0].fluid
  // } else {
  //   mainImage = img
  // }
  let mainImage = images ? images[0].fluid : img

  return (
    <article className={styles.chore}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="chore" />
        <AniLink fade className={styles.link} to={`/chores/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <FaMap className={styles.icon} />
          <h3>Rate</h3>
          <div className={styles.details}>
            <h3>${price}</h3>
          </div>
          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={chore.content_id}
            data-item-name={chore.name}
            data-item-price={chore.price}
            data-item-image={mainImage}
            data-item-url="https://rangerpi.netlify.com/"
          >
            add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

Chore.propTypes = {
  chore: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Chore
