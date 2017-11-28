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

const modalMode = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_TO_SIGNUP_MODE":
      return "signup"
    case "CHANGE_TO_SIGNIN_MODE":
      return "signin"
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
const logoImage = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const buttonId = (state = null, action) => {
  return state
}
// signin-button
// signup-button
// bookmark-button
// clap-button

// eslint-disable-next-line
const clappedCount = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const clapImage = (state = null, action) => {
  return state
}

const rootReducer = combineReducers({
  isModalDisplayed,
  modalMode,
  facebookAuthPath,
  twitterAuthPath,
  logoImage,
  buttonId,
  clappedCount,
  clapImage,
})

export default rootReducer
