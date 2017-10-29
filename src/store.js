import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducers from './reducers'

const middleWares = applyMiddleware(
  thunk,
)

export const store = createStore(
  reducers,
  compose(middleWares, autoRehydrate())
)

persistStore(store)
