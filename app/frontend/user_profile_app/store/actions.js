export const changeName = text => ({
  type: "CHANGE_NAME",
  text,
})

export const changeBio = text => ({
  type: "CHAGNE_BIO",
  text,
})

export const save = ({ name, bio }) => ({
  type: "SAVE",
  name,
  bio,
})

export const startEdit = () => ({
  type: "START_EDIT",
})

export const cancelEdit = () => ({
  type: "CANCEL_EDIT",
})
