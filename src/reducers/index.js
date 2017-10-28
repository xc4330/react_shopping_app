import { combineReducers } from 'redux';
import category from './category'
import product from './product'
import shoppingCart from './shoppingCart'


export default combineReducers({
  category,
  product,
  shoppingCart,
})
