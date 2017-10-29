import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducers from './reducers'

const middleWares = applyMiddleware(
  thunk,
  logger,
)

export const store = createStore(
  reducers,
  compose(middleWares, autoRehydrate())
)

persistStore(store)
