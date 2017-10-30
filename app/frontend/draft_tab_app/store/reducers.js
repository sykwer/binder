import { combineReducers } from "redux"

// eslint-disable-next-line
const userName = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const posts = (state = [], action) => {
  return state
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
  userName,
  posts,
  toBeDeletedPostUuid,
})

export default rootReducer
