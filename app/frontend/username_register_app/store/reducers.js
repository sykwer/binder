import { combineReducers } from "redux"

import { usernameMaxLength } from "../../settings/constants"

const usernameInput = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_USERNAME_INPUT":
      if (action.text.length > usernameMaxLength) {
        return state
      }

      return action.text
    default:
      return state
  }
}

const usernameState = (state = "EMPTY", action) => {
  switch (action.type) {
    case "NOTIFY_INPUT_EMPTY":
      return "EMPTY"
    case "CHANGE_USERNAME_INPUT":
      return "CHECKING"
    case "CONFIRM_REGREX_INVALID":
      return "REGREX_INVALID"
    case "CONFIRM_USERNAME_NOT_UNIQUE":
      return "UNIQUENESS_INVALID"
    case "CONFIRM_USERNAME_UNIQUE":
      return "UNIQUENESS_VALID"
    default:
      return state
  }
}

// eslint-disable-next-line
const registrationPath = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const formAuthenticityToken = (state = null, action) => {
  return state
}

const rootReducer = combineReducers({
  usernameInput,
  usernameState,
  registrationPath,
  formAuthenticityToken,
})

export default rootReducer
