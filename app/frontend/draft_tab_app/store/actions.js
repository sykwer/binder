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
