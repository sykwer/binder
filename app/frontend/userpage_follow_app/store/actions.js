export const clickFollow = () => ({
  type: "CLICK_FOLLOW",
})

export const clickUnfollow = () => ({
  type: "CLICK_UNFOLLOW",
})

export const succeedInFollow = () => ({
  type: "SUCCEED_IN_FOLLOW",
})

export const succeedInUnfollow = () => ({
  type: "SUCCEED_IN_UNFOLLOW",
})

// FollowersListApp
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

// FollowingsListApp
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
