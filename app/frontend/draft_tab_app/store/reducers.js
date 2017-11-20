import { combineReducers } from "redux"

// eslint-disable-next-line
const userName = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const posts = (state = [], action) => {
  return state
}

const rootReducer = combineReducers({
  userName,
  posts,
})

export default rootReducer
