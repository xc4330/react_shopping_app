import React, { Component } from 'react'
import { connect } from 'react-redux'
//actions
import { removeItem } from '../../actions/shoppingCartActions'
import { selectProduct } from '../../actions/productActions'
//components
import ProductCard from '../../components/ProductCard'
//style
import styles from './shoppingCart.css'

class ShoppingCart extends Component{

  constructor(props) {
    super(props)
  }

  renderProductCards() {
    let itemList = this.props.itemList
    if(itemList.length === 0){
      return (
        <div>
          No item added
        </div>
      )
    } else {
      return (
        itemList.map((item,index) => {
          return (
            <ProductCard
              product = {item.product}
              onSelect = {() => this.handleProductSelect(item.product)}
              mode = "cart" // allow product card to show delete btn and quantity
              onDelete = {() => this.props.removeItem(item.product)}
              quantity = {item.quantity}
              key={index}
            />
          )
        })
      )
    }
  }

  handleProductSelect(product) {
    this.props.selectProduct(product)
    this.props.history.push('/product-detail')
  }

  render(){
    return (
      <div className={styles.container}>
        ShoppingCart
        {this.renderProductCards()}
      </div>
    )
  }

}

function mapStateToProps(state) {
  const { shoppingCart } = state
  let { itemList }= shoppingCart
  return {
    itemList,
  }
}

export default connect(mapStateToProps, { removeItem, selectProduct })(ShoppingCart)
