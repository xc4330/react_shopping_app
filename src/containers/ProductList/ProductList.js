import React, { Component } from 'react'
import { connect } from 'react-redux'
//actions
import { getProduct } from '../../actions/productActions'
//components
import ProductCard from '../../components/ProductCard'
//style
import styles from './productList.css'


class ProductList extends Component{

  constructor(props) {
    super(props)
  }

  renderProductCards() {
    console.log(this.props.productList)
    let productList = this.props.productList
    if(productList.length === 0){
      return (
        <div>
          Loading products...
        </div>
      )
    } else {
      return (
        productList.map((product,index) => {
          return (
            <ProductCard
              product = {product}
              onSelect = {() => this.handleProductSelect(product)}
              key={index}
            />
          )
        })
      )
    }
  }

  handleProductSelect(product) {
    console.log(product);
  }



  componentDidMount(){
    this.props.getProduct(this.props.selectedCategory.cid)
  }

  render() {
    return (
      <div className={styles.container}>
        ProductList
        {this.renderProductCards()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { category, product } = state
  let selectedCategory = category.selected
  let productList = product.all
  return {
    selectedCategory,
    productList,
  }
}

export default connect(mapStateToProps, { getProduct })(ProductList)