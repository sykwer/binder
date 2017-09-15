export const startFetching = () => ({
  type: "START_FETCHING",
})

export const finishFetching = (postsCount, posts) => ({
  type: "FINISH_FETCHING",
  postsCount,
  posts,
})

export const notifyAllFetched = () => ({
  type: "NOTIFY_ALL_FETCHED",
})
