import { combineReducers } from "redux"

const notifications = (state = [], action) => {
  switch (action.type) {
    case "SUCCEED_FETCH":
      return [...state, ...action.notifications]
    default:
      return state
  }
}

const oldestUnixtime = (state = null, action) => {
  switch (action.type) {
    case "SUCCEED_FETCH":
      return action.oldestUnixtime
    default:
      return state
  }
}

const isWindowOpen = (state = false, action) => {
  switch (action.type) {
    case "OPEN_WINDOW":
      return true
    case "CLOSE_WINDOW":
      return false
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

const rootReducer = combineReducers({
  notifications,
  oldestUnixtime,
  isWindowOpen,
  isAllFetched,
})

export default rootReducer
