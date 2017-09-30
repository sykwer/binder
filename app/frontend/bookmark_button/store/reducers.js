import { combineReducers } from "redux"

// eslint-disable-next-line
const postUuid = (state = null, action) => {
  return state
}

const isBookmarked = (state = false, action) => {
  switch (action.type) {
    case "SUCCEED_BOOKMARK":
      return true
    case "SUCCEED_UNBOOKMARK":
      return false
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postUuid,
  isBookmarked,
})

export default rootReducer
