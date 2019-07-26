import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpg"
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore root cause</h4>
          <p>
            We as kids would like to get "paid" for services rendered while
            making bank. We're talking some serious coin, no hand-outs or
            federal subsidies. Just some cold hard cash !
          </p>
          <p>
            Didn't cause this, well maybe a bit, but still, we're kids. We're
            making plans for the future and need to start investing now.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
