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
            isoBookmarked: false,
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
const oldestUnixtimeNano = (state = null, action) => {
  switch (action.type) {
    case "FINISH_FETCH":
      return action.oldestUnixtimeNano
    default:
      return state
  }
}

// eslint-disable-next-line
const streamId = (state = null, action) => {
  return state
}

const rootReducer = combineReducers({
  posts,
  isAllFetched,
  page,
  oldestUnixtimeNano,
  streamId,
})

export default rootReducer
