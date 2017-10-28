export const startFetchPosts = () => ({
  type: "START_FETCH_POSTS",
})

export const finishFetchPosts = (posts, oldestUnixTime) => ({
  type: "FINISH_FETCH_POSTS",
  posts,
  oldestUnixTime,
})

export const notifyAllPostsFetched = () => ({
  type: "NOTIFY_ALL_POSTS_FETCHED",
})

export const clickBookmark = postUuid => ({
  type: "CLICK_BOOKMARK",
  postUuid,
})

export const clickUnbookmark = postUuid => ({
  type: "CLICK_UNBOOKMARK",
  postUuid,
})

export const succeedBookmark = postUuid => ({
  type: "SUCCEED_BOOKMARK",
  postUuid,
})

export const succeedUnbookmark = postUuid => ({
  type: "SUCCEED_UNBOOKMARK",
  postUuid,
})
