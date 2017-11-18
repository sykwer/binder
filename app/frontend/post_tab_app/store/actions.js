export const startFetchPosts = () => ({
  type: "START_FETCH_POSTS",
})

export const finishFetchPosts = (posts, postsCount) => ({
  type: "FINISH_FETCH_POSTS",
  posts,
  postsCount,
})

export const notifyAllFetched = () => ({
  type: "NOTIFY_ALL_FETCHED",
})

export const selectPost = postUuid => ({
  type: "SELECT_POST",
  postUuid,
})

export const unselectPost = postUuid => ({
  type: "UNSELECT_POST",
  postUuid,
})

export const resetSelectedPosts = () => ({
  type: "RESET_SELECTED_POSTS",
})

export const confirmDelete = () => ({
  type: "CONFIRM_DELETE",
})

export const confirmUnpublish = () => ({
  type: "CONFIRM_UNPUBLISH",
})

export const cancelDelete = () => ({
  type: "CANCEL_DELETE",
})

export const cancelUnpublish = () => ({
  type: "CANCEL_UNPUBLISH",
})

export const openDeleteScreen = () => ({
  type: "OPEN_DELETE_SCREEN",
})

export const openUnpublishScreen = () => ({
  type: "OPEN_UNPUBLISH_SCREEN",
})
