import React, { Component } from 'react'
import styles from './categoryCard.css'

export default class CategoryCard extends Component{

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.container + " card"} onClick = {this.props.onSelect}>
        <div className={styles.cardHeader + " card-header"}>
          {this.props.category.name}
        </div>
        <div className={styles.imageContainer}>
          <img src={this.props.category.image} className={styles.image}/>
        </div>
      </div>
    )
  }
}
