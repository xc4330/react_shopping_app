import React, { Component } from 'react'
import styles from './categoryCard.css'

export default class CategoryCard extends Component{

  constructor(props) {
    super(props)
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className={styles.container} onClick = {this.props.onSelect}>
        {this.props.category.name}
      </div>
    )
  }
}
