import { combineReducers } from "redux"

const displayedName = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.text
    default:
      return state
  }
}

const displayedBio = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_BIO":
      return action.text
    default:
      return state
  }
}

const savedName = (state = "", action) => {
  switch (action.type) {
    case "SAVE":
      return action.name
    default:
      return state
  }
}

const savedBio = (state = "", action) => {
  switch (action.type) {
    case "SAVE":
      return action.bio
    default:
      return state
  }
}

// eslint-disable-next-line
const image = (state = "", action) => {
  return state
}

const appState = (state = "NOT_EDITING", action) => {
  switch (action.type) {
    case "START_EDIT":
      return "IS_EDITTING"
    case "SAVE":
    case "CANCEL_EDIT":
      return "NOT_EDITTING"
    default:
      return state
  }
}

const rootReducer = combineReducers({
  displayedName,
  displayedBio,
  savedName,
  savedBio,
  image,
  appState,
})

export default rootReducer
