export const startFetch = () => ({
  type: "START_FETCH",
})

export const finishFetch = (
  posts,
  page,
  oldestUnixtimeNano,
) => ({
  type: "FINISH_FETCH",
  posts,
  page,
  oldestUnixtimeNano,
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

export const notifyAllFetched = () => ({
  type: "NOTIFY_ALL_FETCHED",
})