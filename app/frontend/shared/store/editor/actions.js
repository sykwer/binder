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

export const selectBook = (bookAsin, title, author, publisher, image) => ({
  type: "SELECT_BOOK",
  bookAsin,
  title,
  author,
  publisher,
  image,
})

export const updatePostContent = text => ({
  type: "UPDATE_POST_CONTENT",
  text,
})

export const updatePostTitle = text => ({
  type: "UPDATE_POST_TITLE",
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

export const receiveEmpty = () => ({
  type: "RECEIVE_EMPTY",
})

export const startSavingPostContent = () => ({
  type: "START_SAVING_POST_CONTENT",
})

export const finishSavingPostContent = () => ({
  type: "FINISH_SAVING_POST_CONTENT",
})

export const startSavingPostTitle = () => ({
  type: "START_SAVING_POST_TITLE",
})

export const finishSavingPostTitle = () => ({
  type: "FINISH_SAVING_POST_TITLE",
})

export const openBookSelector = () => ({
  type: "OPEN_BOOK_SELECTOR",
})

export const closeBookSelector = () => ({
  type: "CLOSE_BOOK_SELECTOR",
})

export const openPublishWindow = () => ({
  type: "OPEN_PUBLISH_WINDOW",
})

export const closePublishWindow = () => ({
  type: "CLOSE_PUBLISH_WINDOW",
})

export const toggleSharedOnTwitter = () => ({
  type: "TOGGLE_SHARED_ON_TWITTER",
})

export const toggleSharedOnFacebook = () => ({
  type: "TOGGLE_SHARED_ON_FACEBOOK",
})

export const publishPost = () => ({
  type: "PUBLISH_POST",
})

export const selectTag = tag => ({
  type: "SELECT_TAG",
  tag,
})

export const deleteTag = tagName => ({
  type: "DELETE_TAG",
  tagName,
})

export const changeTagInput = text => ({
  type: "CHANGE_TAG_INPUT",
  text,
})

export const startFetchTags = () => ({
  type: "START_FETCH_TAGS",
})

export const finishFetchTags = tags => ({
  type: "FINISH_FETCH_TAGS",
  tags,
})

export const emptyTagInput = () => ({
  type: "EMPTY_TAG_INPUT",
})
