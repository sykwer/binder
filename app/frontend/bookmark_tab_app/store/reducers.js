import { combineReducers } from "redux"

// eslint-disable-next-line
const userId = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const isLoggedIn = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const beforeClapImage = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const afterClapImage = (state = null, action) => {
  return state
}

const posts = (state = [], action) => {
  switch (action.type) {
    case "FINISH_FETCH_POSTS":
      return [...state, ...action.posts]
    case "SUCCEED_BOOKMARK":
      return state.map((post) => {
        if (post.uuid === action.postUuid) {
          return { ...post, isBookmarked: true }
        }

        return post
      })
    case "SUCCEED_UNBOOKMARK":
      return state.map((post) => {
        if (post.uuid === action.postUuid) {
          return { ...post, isBookmarked: false }
        }

        return post
      })
    case "SUCCEED_CLAP":
      return state.map((post) => {
        if (post.uuid === action.postUuid) {
          return {
            ...post,
            clappedCount: post.clappedCount + 1,
            clappedCountByMe: post.clappedCountByMe + 1,
          }
        }

        return post
      })
    default:
      return state
  }
}

const oldestUnixTime = (state = null, action) => {
  switch (action.type) {
    case "FINISH_FETCH_POSTS":
      return action.oldestUnixTime
    default:
      return state
  }
}

const isAllPostsFetched = (state = false, action) => {
  switch (action.type) {
    case "NOTIFY_ALL_POSTS_FETCHED":
      return true
    default:
      return state
  }
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
const facebookAuthPath = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const twitterAuthPath = (state = null, action) => {
  return state
}

const rootReducer = combineReducers({
  userId,
  isLoggedIn,
  beforeClapImage,
  afterClapImage,
  posts,
  oldestUnixTime,
  isAllPostsFetched,
  isLoginModalDisplayed,
  modalMode,
  facebookAuthPath,
  twitterAuthPath,
})

export default rootReducer
