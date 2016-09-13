import 'babel-polyfill'

// With React

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../redux/OrderReducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import App from '../container/App'

const loggerMiddleware = createLogger()
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('body-slide')
)

// Debugging

// import { createStore, applyMiddleware } from 'redux'
// import rootReducer from '../redux/reducers'
// import createLogger from 'redux-logger'
// import thunkMiddleware from 'redux-thunk';
// import * as actions from '../redux/actions'

// const loggerMiddleware = createLogger()
// const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     thunkMiddleware, // lets us dispatch() functions
//     loggerMiddleware // neat middleware that logs actions
//   )
// )

// store.dispatch(actions.initSlideAsync(1))