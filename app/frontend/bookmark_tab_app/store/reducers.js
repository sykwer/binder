import { combineReducers } from "redux"

// eslint-disable-next-line
const userId = (state = null, action) => {
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

const rootReducer = combineReducers({
  userId,
  posts,
  oldestUnixTime,
  isAllPostsFetched,
})

export default rootReducer
