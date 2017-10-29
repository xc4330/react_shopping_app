import React, { Component } from 'react'
import styles from './naviBar.css'

export default class NaviBar extends Component{

  constructor(props) {
    super(props)
  }

  componentDidMount(){
  }

  render() {
    console.log(this.props);
    return (
      <div className={styles.container}>
        <div className={styles.leftItemGroup}>
          <button
            className={styles.goBackBtn + " btn icon-arrow-left"}
            style={this.shouldHideBackBtn() ? {display : "none"} : {}}
            onClick={this.props.goBack}
          />
        </div>
        <div className={styles.centerItemGroup}>
            Navi Bar
        </div>
        <div className={styles.rightItemGroup}>
          <button
            className={styles.cartBtn + " btn icon-basket"}
            onClick={this.props.showCart}
            style={this.shouldHideCartBtn() ? {display : "none"} : {}}
          />
        </div>
      </div>
    )
  }

  // check if needs to show back btn
  shouldHideBackBtn(){
    if(this.props.currentPath === "/categories"){
      return true
    }
    return false
  }

  // check if needs to show back btn
  shouldHideCartBtn(){
    if(this.props.currentPath === "/shopping-cart"){
      return true
    }
    return false
  }
}
