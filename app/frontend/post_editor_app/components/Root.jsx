import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"

import rootReducer from "../store/reducers"

const initialState = {}
const store = createStore(
  rootReducer,
  initialState,
)

const Root = () => (
  <Provider store={store}>
    <p>hello sykwer from Root component</p>
  </Provider>
)

export default Root
