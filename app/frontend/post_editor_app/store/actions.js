export const changeBookNameInput = text => {
  return {
    type: "CHANGE_BOOK_NAME_INPUT",
    text,
  }
}

export const changeAuthorInput = text => {
  return {
    type: "CHANGE_AUTHOR_INPUT",
    text,
  }
}

export const changePublisherInput = text => {
  return {
    type: "CHANGE_PUBLISHER_INPUT",
    text,
  }
}

export const updateBookList = books => {
  return {
    type: "UPDATE_BOOK_LIST",
    books,
  }
}

export const selectBook = bookAsin => {
  return {
    type: "SELECT_BOOK",
    bookAsin,
  }
}

export const updatePostContent = text => {
  return {
    type: "UPDATE_POST_CONTENT",
    text,
  }
}

export const requestBookList = (
  bookName, author, publisher
) => {
  return {
    type: "REQUEST_BOOK_LIST",
    bookName,
    author,
    publisher,
  }
}

export const receiveBookList = books => {
  return {
    type: "RECEIVE_BOOK_LIST",
    books,
  }
}

export const startSavingPostContent = text => {
  return {
    type: "START_SAVING_POST_CONTENT",
    text,
  }
}

export const finishSavingPostContent = () => {
  return {
    type: "FINISH_SAVING_POST_CONTENT",
  }
}
