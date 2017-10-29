import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//actions
import { getProduct, selectProduct } from '../../actions/productActions'
//components
import ProductCard from '../../components/ProductCard'
//style
import styles from './productList.css'


class ProductList extends Component{

  constructor(props) {
    super(props)
  }

  renderProductCards() {
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
    this.props.selectProduct(product)
    this.props.history.push('/product-detail')
  }


  componentDidMount(){
    this.props.getProduct(this.props.selectedCategory.cid)
  }

  render() {
    return (
      <div className={styles.container}>
        <ReactCSSTransitionGroup
          transitionName="card-animation"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
            {this.renderProductCards()}
        </ReactCSSTransitionGroup>
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

export default connect(mapStateToProps, { getProduct, selectProduct })(ProductList)
