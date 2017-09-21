import { combineReducers } from "redux"

const posts = (state = [], action) => {
  switch (action.type) {
    case "FINISH_FETCH":
      return [...state, ...action.posts]
    default:
      return state
  }
}

const isAllFetched = (state = false, action) => {
  switch (action.type) {
    case "NOTIFY_ALL_FETCHED":
      return true
    default:
      return state
  }
}

const page = (state = null, action) => {
  switch (action.type) {
    case "FINISH_FETCH":
      return action.page
    default:
      return state
  }
}

// eslint-disable-next-line
const userId = (state = null, action) => {
  return state
}

const rootReducer = combineReducers({
  posts,
  isAllFetched,
  page,
  userId,
})

export default rootReducer
