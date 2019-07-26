import React from "react"
import Title from "../Title"
import styles from "../../css/checkout.module.css"
const Checkout = () => {
  return (
    <section className={styles.checkout}>
      <Title title="Checking" subtitle="out" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/scott.braconnier@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="john smith"
            />
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className={styles.formControl}
              placeholder="--- Text ---"
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Checkout
