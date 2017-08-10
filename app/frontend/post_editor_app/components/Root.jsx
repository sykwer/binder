import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"

import rootReducer from "../store/reducers"

const store = createStore(rootReducer)

const Root = () => (
  <Provider store={store}>
    <p>hello sykwer from Root component</p>
  </Provider>
)

export default Root
