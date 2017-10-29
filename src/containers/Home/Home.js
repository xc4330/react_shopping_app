import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';
//actions
import { getCategory } from '../../actions/categoryActions'
//components
import NaviBar from '../../components/NaviBar'
import CategoryList from '../CategoryList'
import ProductList from '../ProductList'
import ProductDetail from '../ProductDetail'
import ShoppingCart from '../ShoppingCart'
//styles
import styles from './home.css'

class Home extends Component{

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.container}>
        <NaviBar
          title = {this.renderPageTitle()}
          goBack = {() => this.props.history.goBack()}
          showCart = {() => this.props.history.push('/shopping-cart')}
          hideCartBtn = {this.shouldHideCartBtn()}
          hideBackBtn = {this.shouldHideBackBtn()}
        />
        <Switch>
          <Route path="/categories" name="CategoryList" component={CategoryList}/>
          <Route path="/products" name="ProductList" component={ProductList}/>
          <Route path="/product-detail" name="ProductDetail" component={ProductDetail}/>
          <Route path="/shopping-cart" name="ShoppingCart" component={ShoppingCart}/>
          <Redirect from="/" to="/categories"/>
        </Switch>
      </div>
    )
  }

  //

  // render page title based on path
  renderPageTitle(){
    switch (this.props.history.location.pathname){
      case '/categories':
        return ''
      case '/shopping-cart':
        return 'Shopping Cart'
      case '/products':
        return this.props.selectedCategory.name
      case '/product-detail':
        return this.props.selectedProduct.name
    }
  }

  // check if needs to show back btn
  shouldHideBackBtn(){
    if(this.props.history.location.pathname === "/categories"){
      return true
    }
    return false
  }

  // check if needs to show back btn
  shouldHideCartBtn(){
    if(this.props.history.location.pathname === "/shopping-cart"){
      return true
    }
    return false
  }

}

function mapStateToProps(state) {
  let { product, category, shoppingCart } = state
  let selectedProduct = product.selected
  let selectedCategory = category.selected
  return {
    selectedProduct,
    selectedCategory,
  }
}

export default connect(mapStateToProps, { getCategory })(Home)
