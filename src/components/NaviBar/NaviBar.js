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
        </div>
        <div className={styles.centerItemGroup}>
            Navi Bar
        </div>
        <div className={styles.RightItemGroup}>
          <button className="btn btn-primary" onClick={this.props.showCart}>
            Cart
          </button>
        </div>
      </div>
    )
  }
}
