export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const START_CART_ANIMATION = 'START_CART_ANIMATION'
export const STOP_CART_ANIMATION = 'STOP_CART_ANIMATION'

export function addItem(product) {
  return dispatch => {
    dispatch({
        type: ADD_ITEM,
        payload: product,
    })
    dispatch(startCartAnimation())
    setTimeout( _ => {
      dispatch(stopCartAnimation())
    }, 800)
  }
}

export function removeItem(product) {
  return {
    type: REMOVE_ITEM,
    payload: product,
  }
}

function startCartAnimation(){
  return {
    type: START_CART_ANIMATION,
    payload: null,
  }
}

function stopCartAnimation(){
  return {
    type: STOP_CART_ANIMATION,
    payload: null,
  }
}
