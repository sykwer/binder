// UserProfileApp
export const changeName = text => ({
  type: "CHANGE_NAME",
  text,
})

export const changeBio = text => ({
  type: "CHANGE_BIO",
  text,
})

export const save = (displayedName, displayedBio) => ({
  type: "SAVE",
  displayedName,
  displayedBio,
})

export const startEdit = () => ({
  type: "START_EDIT",
})

export const cancelEdit = (savedName, savedBio) => ({
  type: "CANCEL_EDIT",
  savedName,
  savedBio,
})

// FollowersApp
export const startFetchFollowers = () => ({
  type: "START_FETCH_FOLLOWERS",
})

export const finishFetchFollowers = (followers, page) => ({
  type: "FINISH_FETCH_FOLLOWERS",
  followers,
  page,
})

export const notifyAllFollowersFetched = () => ({
  type: "NOFITY_ALL_FOLLOWERS_FETCHED",
})

export const clickFollowFromFollowers = destinationId => ({
  type: "CLICK_FOLLOW_FROM_FOLLOWERS",
  destinationId,
})

export const succeedFollowFromFollowers = destinationId => ({
  type: "SUCCEED_FOLLOW_FROM_FOLLOWERS",
  destinationId,
})

export const clickUnfollowFromFollowers = destinationId => ({
  type: "CLICK_UNFOLLOW_FROM_FOLLOWERS",
  destinationId,
})

export const succeedUnfollowFromFollowers = destinationId => ({
  type: "SUCCEED_UNFOLLOW_FROM_FOLLOWERS",
  destinationId,
})

export const closeFollowersList = () => ({
  type: "CLOSE_FOLLOWERS_LIST",
})

// FollowingsApp
export const startFetchFollowings = () => ({
  type: "START_FETCH_FOLLOWINGS",
})

export const finishFetchFollowings = (followings, page) => ({
  type: "FINISH_FETCH_FOLLOWINGS",
  followings,
  page,
})

export const notifyAllFollowingsFetched = () => ({
  type: "NOTIFY_ALL_FOLLOWINGS_FETCHED",
})

export const clickFollowFromFollowings = destinationId => ({
  type: "CLICK_FOLLOW_FROM_FOLLOWINGS",
  destinationId,
})

export const succeedFollowFromFollowings = destinationId => ({
  type: "SUCCEED_FOLLOW_FROM_FOLLOWINGS",
  destinationId,
})

export const clickUnfollowFromFollowings = destinationId => ({
  type: "CLICK_UNFOLLOW_FROM_FOLLOWINGS",
  destinationId,
})

export const succeedUnfollowFromFollowings = destinationId => ({
  type: "SUCCEED_UNFOLLOW_FROM_FOLLOWINGS",
  destinationId,
})

export const closeFollowingsList = () => ({
  type: "CLOSE_FOLLOWINGS_LIST",
})
