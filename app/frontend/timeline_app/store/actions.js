export const startFetch = () => ({
  type: "START_FETCH",
})

export const finishFetch = (page, posts) => ({
  type: "FINISH_FETCH",
  page,
  posts,
})

export const notifyAllFetched = () => ({
  type: "NOTIFY_ALL_FETCHED",
})
