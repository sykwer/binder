export const changeUsernameInput = text => ({
  type: "CHANGE_USERNAME_INPUT",
  text,
})

export const confirmRegrexInvalid = () => ({
  type: "CONFIRM_REGREX_INVALID",
})

export const confirmUsernameUnique = () => ({
  type: "CONFIRM_USERNAME_UNIQUE",
})

export const confirmUsernameNotUnique = () => ({
  type: "CONFIRM_USERNAME_NOT_UNIQUE",
})

export const notifyInputEmpty = () => ({
  type: "NOTIFY_INPUT_EMPTY",
})
