import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//actions
import { getCategory, selectCategory } from '../../actions/categoryActions'
import { resetProductList } from '../../actions/productActions'
//components
import CategoryCard from '../../components/CategoryCard'
//style
import styles from './categoryList.css'


class CategoryList extends Component{

  constructor(props) {
    super(props)
  }

  renderCategoryCards() {
    let categoryList = this.props.all
    if(categoryList.length === 0){
      return (
        <div>
          Loading categories...
        </div>
      )
    } else {
      return (
        categoryList.map((category,index) => {
          return (
            <CategoryCard
              category = {category}
              onSelect = {() => this.handleCategorySelect(category)}
              key={index}
            />
          )
        })
      )
    }
  }

  handleCategorySelect(category) {
    this.props.selectCategory(category)
    this.props.history.push('/products')
  }

  componentDidMount(){
    // reset stored product list when user come back to category page
    this.props.resetProductList()
    this.props.getCategory()
  }

  render() {
    return (
      <div className={styles.container}>
        <ReactCSSTransitionGroup
          transitionName="card-animation"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
            {this.renderCategoryCards()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { category } = state
  let { all } = category
  return {
    all,
  }
}

export default connect(mapStateToProps, { getCategory, selectCategory, resetProductList })(CategoryList)
