export const displayMenu = postUuid => ({
  type: "DISPLAY_MENU",
  postUuid,
})

export const closeMenu = postUuid => ({
  type: "CLOSE_MENU",
  postUuid,
})

export const clickDeleteMenu = postUuid => ({
  type: "CLICK_DELETE_MENU",
  postUuid,
})

export const clickDelete = postUuid => ({
  type: "CLICK_DELETE",
  postUuid,
})

export const clickCancelDelete = () => ({
  type: "CLICK_CANCEL_DELETE",
})
