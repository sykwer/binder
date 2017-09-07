export const changeBookNameInput = text => ({
  type: "CHANGE_BOOK_NAME_INPUT",
  text,
})

export const changeAuthorInput = text => ({
  type: "CHANGE_AUTHOR_INPUT",
  text,
})

export const changePublisherInput = text => ({
  type: "CHANGE_PUBLISHER_INPUT",
  text,
})

export const notifyBookSearchInputEmpty = () => ({
  type: "NOTIFY_BOOK_SEARCH_INPUT_EMPTY",
})

export const updateBookList = books => ({
  type: "UPDATE_BOOK_LIST",
  books,
})

export const selectBook = bookAsin => ({
  type: "SELECT_BOOK",
  bookAsin,
})

export const updatePostContent = text => ({
  type: "UPDATE_POST_CONTENT",
  text,
})

export const requestBookList = (
  bookName, author, publisher,
) => ({
  type: "REQUEST_BOOK_LIST",
  bookName,
  author,
  publisher,
})

export const receiveBookList = books => ({
  type: "RECEIVE_BOOK_LIST",
  books,
})

export const startSavingPostContent = text => ({
  type: "START_SAVING_POST_CONTENT",
  text,
})

export const finishSavingPostContent = () => ({
  type: "FINISH_SAVING_POST_CONTENT",
})
