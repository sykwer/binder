export const startFetch = () => ({
  type: "START_FETCH",
})

export const finishFetch = (
  posts,
  page,
  oldestUnixtime,
) => ({
  type: "FINISH_FETCH",
  posts,
  page,
  oldestUnixtime,
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
