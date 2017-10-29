export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const RESET_PRODUCT_LIST = 'RESET_PRODUCT_LIST'

// mock api that returns a list fo product
import  { productAPI }  from '../util/mockServer.js'

export function getProduct(cid) {
  return dispatch => {
    // mock API call
    productAPI(cid, response => {
      dispatch(getProductSuccess(response))
    })
  }
}

function getProductSuccess(data) {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: data,
  }
}

export function selectProduct(data) {
  return {
    type: SELECT_PRODUCT,
    payload: data,
  }
}

export function resetProductList() {
  console.log("resrt");
  return {
    type: RESET_PRODUCT_LIST,
    payload: null,
  }
}
