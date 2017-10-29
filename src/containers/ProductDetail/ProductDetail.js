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
          <img src={this.props.selectedProduct.image} className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <div className={styles.titleContainer}>
              <div className={styles.nameLabel}>
                {this.props.selectedProduct.name}
              </div>
              <div className={styles.priceLabel}>
                $ {this.props.selectedProduct.price}
              </div>
            </div>
            <button className={styles.addBtn + " btn"} onClick={this.handleAddToCart}>
              Add to cart
            </button>
          </div>
          <div className={styles.contentContainer}>
            {this.props.selectedProduct.description}
          </div>
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
