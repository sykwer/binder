import { combineReducers } from "redux"

const posts = (state = [], action) => {
  switch (action.type) {
    case "FINISH_FETCH":
      return [...state, ...action.posts]
    case "SUCCEED_BOOKMARK":
      return state.map((post) => {
        if (post.uuid === action.postUuid) {
          return {
            ...post,
            isBookmarked: true,
            bookmarkedCount: post.bookmarkedCount + 1,
          }
        }

        return post
      })
    case "SUCCEED_UNBOOKMARK":
      return state.map((post) => {
        if (post.uuid === action.postUuid) {
          return {
            ...post,
            isBookmarked: false,
            bookmarkedCount: post.bookmarkedCount - 1,
          }
        }

        return post
      })
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

// only for stream identified followings
const page = (state = null, action) => {
  switch (action.type) {
    case "FINISH_FETCH":
      return action.page
    default:
      return state
  }
}

// only for stream identified timeline
const oldestUnixtime = (state = null, action) => {
  switch (action.type) {
    case "FINISH_FETCH":
      return action.oldestUnixtime
    default:
      return state
  }
}

// eslint-disable-next-line
const streamId = (state = null, action) => {
  return state
}

// loginModal

const isLoginModalDisplayed = (state = false, action) => {
  switch (action.type) {
    case "OPEN_LOGIN_MODAL":
      return true
    case "CLOSE_LOGIN_MODAL":
      return false
    default:
      return state
  }
}

const modalMode = (state = "signup", action) => {
  switch (action.type) {
    case "CHANGE_TO_SIGNUP_MODE":
      return "signup"
    case "CHANGE_TO_SIGNIN_MODE":
      return "signin"
    default:
      return state
  }
}

// eslint-disable-next-line
const isLoggedIn = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const facebookAuthPath = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const twitterAuthPath = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const logoImage = (state = null, action) => {
  return state
}

const rootReducer = combineReducers({
  posts,
  isAllFetched,
  page,
  oldestUnixtime,
  streamId,
  isLoginModalDisplayed,
  modalMode,
  isLoggedIn,
  facebookAuthPath,
  twitterAuthPath,
  logoImage,
})

export default rootReducer
