import { combineReducers } from "redux"

// eslint-disable-next-line
const followingsCount = (state = null, action) => {
  return state
}

const followersCount = (state = null, action) => {
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

// eslint-disable-next-line
const myUserId = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const name = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const username = (state = null, action) => {
  return state
}

const followers = (state = [], action) => {
  switch (action.type) {
    case "FINISH_FETCH_FOLLOWERS":
      return [...state, ...action.followers]
    case "SUCCEED_FOLLOW_FROM_FOLLOWERS":
      return state.map((follower) => {
        if (action.destinationId === follower.id) {
          return { ...follower, isFollowing: true }
        }

        return follower
      })
    case "SUCCEED_UNFOLLOW_FROM_FOLLOWERS":
      return state.map((follower) => {
        if (action.destinationId === follower.id) {
          return { ...follower, isFollowing: false }
        }

        return follower
      })
    case "CLOSE_FOLLOWERS_LIST":
      return []
    default:
      return state
  }
}

const followings = (state = [], action) => {
  switch (action.type) {
    case "FINISH_FETCH_FOLLOWINGS":
      return [...state, ...action.followings]
    case "SUCCEED_FOLLOW_FROM_FOLLOWINGS":
      return state.map((following) => {
        if (action.destinationId === following.id) {
          return { ...following, isFollowing: true }
        }

        return following
      })
    case "SUCCEED_UNFOLLOW_FROM_FOLLOWINGS":
      return state.map((following) => {
        if (action.destinationId === following.id) {
          return { ...following, isFollowing: false }
        }

        return following
      })
    case "CLOSE_FOLLOWINGS_LIST":
      return []
    default:
      return state
  }
}

const followersPage = (state = null, action) => {
  switch (action.type) {
    case "FINISH_FETCH_FOLLOWERS":
      return action.page
    case "CLOSE_FOLLOWERS_LIST":
      return null
    default:
      return state
  }
}

const followingsPage = (state = null, action) => {
  switch (action.type) {
    case "FINISH_FETCH_FOLLOWINGS":
      return action.page
    case "CLOSE_FOLLOWINGS_LIST":
      return null
    default:
      return state
  }
}

const isAllFollowersFetched = (state = false, action) => {
  switch (action.type) {
    case "NOFITY_ALL_FOLLOWERS_FETCHED":
      return true
    case "CLOSE_FOLLOWERS_LIST":
      return false
    default:
      return state
  }
}

const isAllFollowingsFetched = (state = false, action) => {
  switch (action.type) {
    case "NOTIFY_ALL_FOLLOWINGS_FETCHED":
      return true
    case "CLOSE_FOLLOWINGS_LIST":
      return false
    default:
      return state
  }
}

const isButtonsDisabled = (state = false, action) => {
  switch (action.type) {
    case "CLICK_FOLLOW_FROM_FOLLOWERS":
    case "CLICK_UNFOLLOW_FROM_FOLLOWERS":
    case "CLICK_FOLLOW_FROM_FOLLOWINGS":
    case "CLICK_UNFOLLOW_FROM_FOLLOWINGS":
      return true
    case "SUCCEED_FOLLOW_FROM_FOLLOWERS":
    case "SUCCEED_UNFOLLOW_FROM_FOLLOWERS":
    case "SUCCEED_FOLLOW_FROM_FOLLOWINGS":
    case "SUCCEED_UNFOLLOW_FROM_FOLLOWINGS":
      return false
    default:
      return state
  }
}

const rootReducer = combineReducers({
  followingsCount,
  followersCount,
  buttonState,
  opponentUserId,
  myUserId,
  username,
  name,
  followers,
  followings,
  followersPage,
  followingsPage,
  isAllFollowersFetched,
  isAllFollowingsFetched,
  isButtonsDisabled,
})

export default rootReducer
