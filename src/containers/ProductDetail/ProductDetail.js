import React, { Component } from 'react'
import { connect } from 'react-redux'
//actions
import { addItem } from '../../actions/shoppingCartActions'
//components
//style
import styles from './productDetail.css'


class ProductDetail extends Component{

  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  handleAddToCart() {
    this.props.addItem(this.props.selectedProduct)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
        </div>
        <div className={styles.textContainer}>
          {this.props.selectedProduct.name}
        </div>
        <div className={styles.btnContainer}>
          <button className="btn btn-primary" onClick={this.handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { product } = state
  let selectedProduct = product.selected
  return {
    selectedProduct,
  }
}

export default connect(mapStateToProps, { addItem })(ProductDetail)
