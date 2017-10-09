import { combineReducers } from "redux"

// eslint-disable-next-line
const userId = (state = null, action) => {
  return state
}

const isFollowed = (state = null, action) => {
  switch (action.type) {
    case "SUCCEED_FOLLOW":
      return true
    case "SUCCEED_UNFOLLOW":
      return false
    default:
      return state
  }
}

const rootReducer = combineReducers({
  userId,
  isFollowed,
})

export default rootReducer
