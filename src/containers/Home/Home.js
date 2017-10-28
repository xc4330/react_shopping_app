import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './home.css'
import { getCategory } from '../../actions/categoryActions'
import NaviBar from '../../components/NaviBar'
import CategoryList from '../CategoryList'
import ProductList from '../ProductList'

class Home extends Component{

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.container}>
        <NaviBar />
        <Switch>
          <Route path="/categories" name="CategoryList" component={CategoryList}/>
          <Route path="/products" name="ProductList" component={ProductList}/>
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
