import React, { Component } from 'react'
import styles from './naviBar.css'

export default class NaviBar extends Component{

  constructor(props) {
    super(props)
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftItemGroup}>
          <button
            className={styles.goBackBtn + " btn icon-arrow-left"}
            style={this.props.hideBackBtn ? {display : "none"} : {}}
            onClick={this.props.goBack}
          />
        </div>
        <div className={styles.centerItemGroup}>
            {this.props.title}
        </div>
        <div className={styles.rightItemGroup}>
          <button
            className={styles.cartBtn + " btn icon-basket"}
            onClick={this.props.showCart}
            style={this.props.hideCartBtn ? {display : "none"} : {}}
          />
          <div className={styles.cartIndicator} style={this.props.cartIsEmpty || this.props.hideCartBtn ? {display : "none"} : {}} />
        </div>
      </div>
    )
  }
}
