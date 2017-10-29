import React, { Component } from "react"
import styles from "./productCard.css"

export default class ProductCard extends Component{

  constructor(props) {
    super(props)
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer} >
          <img src={this.props.product.image} className={styles.image}/>
        </div>
        <div className={styles.textContainer} onClick={this.props.onSelect} style={this.props.mode === "cart" ? {width : "calc(100% - 100px - 80px)"} : {width : "calc(100% - 100px)"}}>
          <div className={styles.nameLabel}>
            {this.props.product.name}
          </div>
          <div className={styles.priceLabel}>
            $ {this.props.product.price}
          </div>
        </div>
        <div className={styles.btnGroup} style={this.props.mode === "cart" ? {} : {display : "none"}}>
          {this.props.mode === "cart" ? `x ${this.props.quantity}` : ''}
          <button className={styles.deleteBtn + " btn icon-trash"} onClick={this.props.onDelete} />
        </div>
      </div>
    )
  }
}
