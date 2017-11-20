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

export const cancelDelete = () => ({
  type: "CANCEL_DELETE",
})

export const openDeleteScreen = () => ({
  type: "OPEN_DELETE_SCREEN",
})
