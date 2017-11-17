import { combineReducers } from "redux"

// eslint-disable-next-line
const userId = (state = null, action) => {
  return state
}

const posts = (state = [], action) => {
  switch (action.type) {
    case "FINISH_FETCH_POSTS":
      return [...state, ...action.posts]
    default:
      return state
  }
}

const postsCount = (state = 0, action) => {
  switch (action.type) {
    case "FINISH_FETCH_POSTS":
      return state + action.postsCount
    default:
      return state
  }
}

const isAllFetched = (state = false, action) => {
  switch (action.type) {
    case "NOFITY_ALL_FETCHED":
      return true
    default:
      return state
  }
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
    case "CANCEL_UNPUBLISH":
      return "LIST"
    case "OPEN_DELETE_SCREEN":
      return "DELETE"
    case "OPEN_UNPUBLISH_SCREEN":
      return "UNPUBLISH"
    default:
      return state
  }
}

const rootReducer = combineReducers({
  userId,
  posts,
  postsCount,
  isAllFetched,
  selectedPostUuids,
  screenMode,
})

export default rootReducer
