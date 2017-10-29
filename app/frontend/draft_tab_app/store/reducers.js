import { combineReducers } from "redux"

// eslint-disable-next-line
const userId = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const posts = (state = [], action) => {
  return state
}

const menuDisplayedPostUuid = (state = null, action) => {
  switch (action.type) {
    case "DISPLAY_MEMU":
      return action.postUuid
    case "CLOSE_MENU":
      return null
    case "CLICK_DELETE_MENU":
      return null
    default:
      return state
  }
}

const toBeDeletedPostUuid = (state = null, action) => {
  switch (action.type) {
    case "CLICK_DELETE_MENU":
      return action.postUuid
    case "CLICK_CANCEL_DELETE":
      return null
    default:
      return state
  }
}

const rootReducer = combineReducers({
  userId,
  posts,
  menuDisplayedPostUuid,
  toBeDeletedPostUuid,
})

export default rootReducer
