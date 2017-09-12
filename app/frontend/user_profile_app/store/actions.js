export const changeName = text => ({
  type: "CHANGE_NAME",
  text,
})

export const changeBio = text => ({
  type: "CHAGNE_BIO",
  text,
})

export const save = (displayedName, displayedBio) => ({
  type: "SAVE",
  displayedName,
  displayedBio,
})

export const startEdit = () => ({
  type: "START_EDIT",
})

export const cancelEdit = (savedName, savedBio) => ({
  type: "CANCEL_EDIT",
  savedName,
  savedBio,
})
