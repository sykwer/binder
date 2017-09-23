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

export const closeFollowersWindow = () => ({
  type: "CLOSE_FOLLOWERS_WINDOW",
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

export const closeFollowingsWindow = () => ({
  type: "CLOSE_FOLLOWINGS_WINDOW",
})
