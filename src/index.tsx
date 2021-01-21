import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"

//Redux imports
import { createStore, applyMiddleware, combineReducers } from "redux"
import { Provider } from "react-redux"
// import mainReducer from "./store/reducers/reducer"
import basicReducer from "./store/reducers/basicReducer"
import blockReducer from "./store/reducers/blockReducer"
import txnReducer from "./store/reducers/txnReducer"

import thunk from "redux-thunk"

// Component Imports
import App from "./App"

// CSS
import "./style/global.css"

const rootReducer = combineReducers({
  basic: basicReducer,
  block: blockReducer,
  txn: txnReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
)

reportWebVitals()
