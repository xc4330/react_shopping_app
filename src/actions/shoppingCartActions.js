export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export function addItem(product) {
  return {
    type: ADD_ITEM,
    payload: product,
  }
}

export function removeItem(product) {
  return {
    type: REMOVE_ITEM,
    payload: product,
  }
}
