export const startFetch = () => ({
  type: "START_FETCH",
})

export const finishFetch = (posts, postsCount) => ({
  type: "FINISH_FETCH",
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
