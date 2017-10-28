import {
  GET_CATEGORY_SUCCESS,
  SELECT_CATEGORY,
} from '../actions/categoryActions'

const INIT_STATE = {
  all: [],
  selected: null,
}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        all: action.payload,
      }
      break
    case SELECT_CATEGORY:
      return {
        ...state,
        selected: action.payload,
      }
      break
    default:
      return state
  }
}
