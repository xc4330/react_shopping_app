import React, { Component } from 'react'
import styles from './productCard.css'

export default class ProductCard extends Component{

  constructor(props) {
    super(props)
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className={styles.container} onClick = {this.props.onSelect}>
        {this.props.product.name}
      </div>
    )
  }
}
