import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"

//Redux imports
import { createStore } from "redux"
import { Provider } from "react-redux"
import hashReducer from "./store/reducers/reducer"

// Component Imports
import App from "./App"

// CSS
import "./style/global.css"

// const rootReducer =

const store = createStore(hashReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
)

reportWebVitals()
