import {
  GET_PRODUCT_SUCCESS,
} from '../actions/productActions'

const INIT_STATE = {
  all: [],
}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        all: action.payload,
      }
      break
    default:
      return state
  }
}
