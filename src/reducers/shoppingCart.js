import _ from 'lodash'
import {
  ADD_ITEM,
  REMOVE_ITEM,
} from '../actions/shoppingCartActions'

const INIT_STATE = {
  itemList: [], // list of { product: PRODUCT, quantity: INT }
}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        itemList: addItem([...state.itemList], action.payload),
      }
      break
    case REMOVE_ITEM:
      return {
        ...state,
        itemList: removeItem([...state.itemList], action.payload),
      }
      break
    default:
      return state
  }
}

function addItem(itemList, selectedProduct){
  let itemAdded = false
  itemList.some((item) => {
    // check if there is existing product
    if(item.product.pid === selectedProduct.pid){
      item.quantity += 1
      itemAdded = true
      return
    }
  })
  if(!itemAdded){
    // no existing product, insert item
    itemList.push({
      product: selectedProduct,
      quantity: 1,
    })
  }
  return itemList
}

function removeItem(itemList, selectedProduct){
  let indexToRemove = -1
  itemList.some((item,index) => {
    if(item.product.pid === selectedProduct.pid){
      // mark the item to be removed
      indexToRemove = index
      return
    }
  })
  // remove item
  if(indexToRemove !== -1){
    _.pullAt(itemList, indexToRemove)
  }
  return itemList
}
