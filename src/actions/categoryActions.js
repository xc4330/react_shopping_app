export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

// mock api that returns a list fo category
import  { categoryAPI }  from '../util/mockServer.js'

export function getCategory() {
  return dispatch => {
    // mock API call
    categoryAPI(response => {
      dispatch(getCategorySuccess(response))
    })
  }
}

function getCategorySuccess(data) {
  return {
    type: GET_CATEGORY_SUCCESS,
    payload: data,
  }
}

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    payload: category,
  }
}
