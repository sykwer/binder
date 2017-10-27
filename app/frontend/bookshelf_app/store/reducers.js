import { combineReducers } from "redux"

const posts = (state = [], action) => {
  switch (action.type) {
    case "FINISH_FETCHING":
      return [...state, ...action.posts]
    case "SUCCEED_BOOKMARK":
      return state.map((post) => {
        if (post.uuid === action.postUuid) {
          return { ...post, isBookmarked: true, bookmarkedCount: post.bookmarkedCount + 1 }
        }

        return post
      })
    case "SUCCEED_UNBOOKMARK":
      return state.map((post) => {
        if (post.uuid === action.postUuid) {
          return { ...post, isBookmarked: false, bookmarkedCount: post.bookmarkedCount - 1 }
        }

        return post
      })
    default:
      return state
  }
}

const postsCount = (state = 0, action) => {
  switch (action.type) {
    case "FINISH_FETCHING":
      return state + action.postsCount
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

// eslint-disable-next-line
const userId = (state = null, action) => {
  return state
}

const rootReducer = combineReducers({
  posts,
  postsCount,
  isAllFetched,
  userId,
})

export default rootReducer
