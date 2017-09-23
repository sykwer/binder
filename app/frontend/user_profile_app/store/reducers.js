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
const followingsCount = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const followersCount = (state = null, action) => {
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

const followers = (state = [], action) => {
  switch (action.type) {
    case "FINISH_FETCH_FOLLOWERS":
      return [...state, ...action.followers]
    default:
      return state
  }
}

const followings = (state = [], action) => {
  switch (action.type) {
    case "FINISH_FETCH_FOLLOWINGS":
      return [...state, ...action.followings]
    default:
      return state
  }
}

const followersPage = (state = null, action) => {
  switch (action.type) {
    case "FINISH_FETCH_FOLLOWERS":
      return action.page
    default:
      return state
  }
}

const followingsPage = (state = null, action) => {
  switch (action.type) {
    case "FINISH_FETCH_FOLLOWINGS":
      return action.page
    default:
      return state
  }
}

const isAllFollowersFetched = (state = false, action) => {
  switch (action.type) {
    case "NOFITY_ALL_FOLLOWERS_FETCHED":
      return true
    default:
      return state
  }
}

const isAllFollowingsFetched = (state = false, action) => {
  switch (action.type) {
    case "NOTIFY_ALL_FOLLOWINGS_FETCHED":
      return true
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
  followersCount,
  followingsCount,
  name,
  username,
  appState,
  followers,
  followings,
  followersPage,
  followingsPage,
  isAllFollowersFetched,
  isAllFollowingsFetched,
})

export default rootReducer
