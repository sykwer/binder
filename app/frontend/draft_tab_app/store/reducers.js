import { combineReducers } from "redux"

// eslint-disable-next-line
const username = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const posts = (state = [], action) => {
  return state
}

const selectedPostUuids = (state = [], action) => {
  switch (action.type) {
    case "SELECT_POST":
      return [...state, action.postUuid]
    case "UNSELECT_POST":
      return state.filter(postUuid => postUuid !== action.postUuid)
    case "RESET_SELECTED_POSTS":
      return []
    default:
      return state
  }
}

const screenMode = (state = "LIST", action) => {
  switch (action.type) {
    case "CANCEL_DELETE":
      return "LIST"
    case "OPEN_DELETE_SCREEN":
      return "DELETE"
    default:
      return state
  }
}

const rootReducer = combineReducers({
  username,
  posts,
  selectedPostUuids,
  screenMode,
})

export default rootReducer
