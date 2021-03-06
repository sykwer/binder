import { combineReducers } from "redux"

const displayedName = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.text
    case "CANCEL_EDIT":
      return action.savedName
    default:
      return state
  }
}

const displayedBio = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_BIO":
      return action.text
    case "CANCEL_EDIT":
      return action.savedBio
    default:
      return state
  }
}

const savedName = (state = "", action) => {
  switch (action.type) {
    case "SAVE":
      return action.displayedName
    default:
      return state
  }
}

const savedBio = (state = "", action) => {
  switch (action.type) {
    case "SAVE":
      return action.displayedBio
    default:
      return state
  }
}

// eslint-disable-next-line
const image = (state = "", action) => {
  return state
}

// eslint-disable-next-line
const id = (state = "", action) => {
  return state
}

const followingsCount = (state = null, action) => {
  switch (action.type) {
    case "SUCCEED_FOLLOW_FROM_FOLLOWINGS":
    case "SUCCEED_FOLLOW_FROM_FOLLOWERS":
      return state + 1
    case "SUCCEED_UNFOLLOW_FROM_FOLLOWINGS":
    case "SUCCEED_UNFOLLOW_FROM_FOLLOWERS":
      return state - 1
    default:
      return state
  }
}

// eslint-disable-next-line
const followersCount = (state = null, action) => {
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

// eslint-disable-next-line
const facebookLink = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const twitterLink = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const facebookOmniauthPath = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const twitterOmniauthPath = (state = null, action) => {
  return state
}

const appState = (state = "NOT_EDITING", action) => {
  switch (action.type) {
    case "START_EDIT":
      return "IS_EDITTING"
    case "SAVE":
    case "CANCEL_EDIT":
      return "NOT_EDITTING"
    default:
      return state
  }
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
  displayedName,
  displayedBio,
  savedName,
  savedBio,
  image,
  id,
  followersCount,
  followingsCount,
  name,
  username,
  facebookLink,
  twitterLink,
  facebookOmniauthPath,
  twitterOmniauthPath,
  appState,
  followers,
  followings,
  followersPage,
  followingsPage,
  isAllFollowersFetched,
  isAllFollowingsFetched,
  isButtonsDisabled,
})

export default rootReducer
