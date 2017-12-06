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
