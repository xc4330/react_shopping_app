import {
  GET_PRODUCT_SUCCESS,
  SELECT_PRODUCT,
} from '../actions/productActions'

const INIT_STATE = {
  all: [],
  selected: null,
}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        all: action.payload,
      }
      break
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: action.payload,
      }
      break
    default:
      return state
  }
}
