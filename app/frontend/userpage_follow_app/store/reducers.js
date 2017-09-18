import { combineReducers } from "redux"

// eslint-disable-next-line
const followings = (state = null, action) => {
  return state
}

const followers = (state = null, action) => {
  switch (action.type) {
    case "SUCCEED_IN_FOLLOW":
      return state + 1
    case "SUCCEED_IN_UNFOLLOW":
      return state - 1
    default:
      return state
  }
}

const buttonState = (state = "", action) => {
  switch (action.type) {
    case "CLICK_FOLLOW":
      return "DISABLED_FOLLOW"
    case "CLICK_UNFOLLOW":
      return "DISABLED_FOLLOWING"
    case "SUCCEED_IN_FOLLOW":
      return "FOLLOWING"
    case "SUCCEED_IN_UNFOLLOW":
      return "FOLLOW"
    default:
      return state
  }
}

// eslint-disable-next-line
const opponentUserId = (state = null, action) => {
  return state
}

const rootReducer = combineReducers({
  followings,
  followers,
  buttonState,
  opponentUserId,
})

export default rootReducer
