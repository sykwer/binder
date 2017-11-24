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

const isUsernamePermitted = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME_INPUT":
      return false
    case "CONFIRM_USERNAME_UNIQUE":
      return true
    default:
      return state
  }
}

const isChecking = (state = "CHECKED", action) => {
  switch (action.type) {
    case "CONFIRM_USERNAME_UNIQUE":
    case "CONFIRM_USERNAME_NOT_UNIQUE":
      return "CHECKED"
    case "CHANGE_USERNAME_INPUT":
      return "CHECKING"
    default:
      return state
  }
}

const rootReducer = combineReducers({
  usernameInput,
  isUsernamePermitted,
  isChecking,
})

export default rootReducer
