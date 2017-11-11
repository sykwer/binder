import { combineReducers } from "redux"

const isModalDisplayed = (state = false, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return true
    case "CLOSE_MODAL":
      return false
    default:
      return state
  }
}

// eslint-disable-next-line
const facebookAuthPath = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const twitterAuthPath = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const buttonId = (state = null, action) => {
  return state // login-button
}

const rootReducer = combineReducers({
  isModalDisplayed,
  facebookAuthPath,
  twitterAuthPath,
  buttonId,
})

export default rootReducer
