import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Chore from "./Chore"
import Title from "../Title"

export default class ChoreList extends Component {
  state = {
    chores: [],
    sortedChores: [],
  }
  componentDidMount() {
    this.setState({
      chores: this.props.chores.edges,
      sortedChores: this.props.chores.edges,
    })
  }

  render() {
    return (
      <section className={styles.chores}>
        <Title title="my" subtitle="chores" />
        <div className={styles.center}>
          {this.state.sortedChores.map(({ node }) => {
            return <Chore key={node.contentful_id} chore={node} />
          })}
        </div>
      </section>
    )
  }
}
