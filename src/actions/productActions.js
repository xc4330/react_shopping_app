export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'

// mock api that returns a list fo product
import  { productAPI }  from '../util/mockServer.js'

export function getProduct(cid) {
  return dispatch => {
    // mock API call
    productAPI(cid, response => {
      dispatch(getCategorySuccess(response))
    })
  }
}

function getCategorySuccess(data) {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: data,
  }
}
