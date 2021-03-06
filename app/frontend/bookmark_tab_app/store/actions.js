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

export const clickClap = post => ({
  type: "CLICK_CLAP",
  post,
})

export const succeedClap = postUuid => ({
  type: "SUCCEED_CLAP",
  postUuid,
})

// loginModal

export const openLoginModal = () => ({
  type: "OPEN_LOGIN_MODAL",
})

export const closeLoginModal = () => ({
  type: "CLOSE_LOGIN_MODAL",
})

export const changeToSignupMode = () => ({
  type: "CHANGE_TO_SIGNUP_MODE",
})

export const changeToSigninMode = () => ({
  type: "CHANGE_TO_SIGNIN_MODE",
})
