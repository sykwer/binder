import { combineReducers } from "redux"

const isWindowOpen = (state = false, action) => {
  switch (action.type) {
    case "OPEN_WINDOW":
      return true
    case "CLOSE_WINDOW":
      return false
    default:
      return state
  }
}

// eslint-disable-next-line
const name = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const username = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const destroySessionPath = (state = null, action) => {
  return state
}

const rootReducer = combineReducers({
  isWindowOpen,
  name,
  username,
  destroySessionPath,
})

export default rootReducer
