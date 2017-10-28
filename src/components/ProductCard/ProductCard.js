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
      <div className={styles.container}>
        {this.props.product.name}
        <button className="btn btn-primary" onClick={this.props.onSelect}>
          View
        </button>
        {this.props.mode === "cart" ? this.props.quantity : ''}
        {this.props.mode === "cart" ?
          <button className="btn btn-danger" onClick={this.props.onDelete}>
            remove
          </button> : ''
        }
      </div>
    )
  }
}
