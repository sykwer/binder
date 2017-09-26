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

export const startFetchPostDetail = postUuid => ({
  type: "START_FETCH_POST_DETAIL",
  postUuid,
})

export const fetchedPostDetail = post => ({
  type: "FETCHED_POST_DETAIL",
  post,
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
