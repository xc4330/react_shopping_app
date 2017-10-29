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
          currentPath = {this.props.history.location.pathname}
          goBack = {() => this.props.history.goBack()}
          showCart = {() => this.props.history.push('/shopping-cart')}
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
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, { getCategory })(Home)
