import { combineReducers } from "redux"

const displayedName = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.text
    case "CANCEL_EDIT":
      return action.savedName
    default:
      return state
  }
}

const displayedBio = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_BIO":
      return action.text
    case "CANCEL_EDIT":
      return action.savedBio
    default:
      return state
  }
}

const savedName = (state = "", action) => {
  switch (action.type) {
    case "SAVE":
      return action.displayedName
    default:
      return state
  }
}

const savedBio = (state = "", action) => {
  switch (action.type) {
    case "SAVE":
      return action.displayedBio
    default:
      return state
  }
}

// eslint-disable-next-line
const image = (state = "", action) => {
  return state
}

// eslint-disable-next-line
const id = (state = "", action) => {
  return state
}

// eslint-disable-next-line
const followings = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const followers = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const name = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const username = (state = null, action) => {
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
  id,
  followers,
  followings,
  name,
  username,
  appState,
})

export default rootReducer
