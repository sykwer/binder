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

export const clickBookmark = postUuid => ({
  type: "CLICK_BOOKMARK",
  postUuid,
})

export const succeedBookmark = postUuid => ({
  type: "SUCCEED_BOOKMARK",
  postUuid,
})

export const clickUnbookmark = postUuid => ({
  type: "CLICK_UNBOOKMARK",
  postUuid,
})

export const succeedUnbookmark = postUuid => ({
  type: "SUCCEED_UNBOOKMARK",
  postUuid,
})
