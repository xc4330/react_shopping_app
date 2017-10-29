import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

const middleWares = applyMiddleware(
  thunk,
)

const config = {
  key: 'root',
  storage,
}

const reducer = persistCombineReducers(config, reducers)

function configureStore () {

  let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleWares,
  )

  let persistor = persistStore(store)

  return { persistor, store }
}

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleWares,
)

// Create an enhanced history that syncs navigation events with the store
// export const history = syncHistoryWithStore(browserHistory, store)
// history.listen(location => console.log(`Current route is ${location.pathname}`))
