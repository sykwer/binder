import { combineReducers } from "redux"

// eslint-disable-next-line
const postUuid = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const afterClapImage = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const beforeClapImage = (state = null, action) => {
  return state
}

const clappedCount = (state = null, action) => {
  switch (action.type) {
    case "SUCCEED_CLAP":
      return state + 1
    default:
      return state
  }
}

const clappedCountByMe = (state = null, action) => {
  switch (action.type) {
    case "SUCCEED_CLAP":
      return state + 1
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postUuid,
  afterClapImage,
  beforeClapImage,
  clappedCount,
  clappedCountByMe,
})

export default rootReducer
