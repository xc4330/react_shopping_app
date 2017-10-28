import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middleWares = applyMiddleware(
  thunk,
)

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleWares,
)

// Create an enhanced history that syncs navigation events with the store
// export const history = syncHistoryWithStore(browserHistory, store)
// history.listen(location => console.log(`Current route is ${location.pathname}`))
