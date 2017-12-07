export const startFetch = () => ({
  type: "START_FETCH",
})

export const succeedFetch = (notifications, oldestUnixtime) => ({
  type: "SUCCEED_FETCH",
  notifications,
  oldestUnixtime,
})

export const openWindow = () => ({
  type: "OPEN_WINDOW",
})

export const closeWindow = () => ({
  type: "CLOSE_WINDOW",
})

export const notifyAllFetched = () => ({
  type: "NOFITY_ALL_FETCHED",
})

export const clickProfileLink = (notificationId, username) => ({
  type: "CLICK_PROFILE_LINK",
  notificationId,
  username,
})

export const clickPostLink = (notificationId, postUuid) => ({
  type: "CLICK_POST_LINK",
  notificationId,
  postUuid,
})
