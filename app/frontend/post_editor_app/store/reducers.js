import { combineReducers } from "redux"

const bookNameInput = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_BOOK_NAME_INPUT":
      return action.text
    default:
      return state
  }
}

const authorInput = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_AUTHOR_INPUT":
      return action.text
    default:
      return state
  }
}

const publisherInput = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_PUBLISHER_INPUT":
      return action.text
    default:
      return state
  }
}

const bookList = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_BOOK_LIST":
      return action.books
    default:
      return state
  }
}

const selectedBookAsin = (state = "", action) => {
  switch (action.type) {
    case "SELECT_BOOK":
      return action.bookAsin
    default:
      return state
  }
}

const postContent = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_POST_CONTENT":
      return action.text
    default:
      return state
  }
}

const contentSaveState = (state = "INITIAL", action) => {
  switch (action.type) {
    case "UPDATE_POST_CONTENT":
      return "IS_NOT_SAVED"
    case "START_SAVING_POST_CONTENT":
      return "IS_SAVING"
    case "FINISH_SAVING_POST_CONTENT":
      return "IS_SAVED"
    default:
      return state
  }
}

const bookSearchState = (state = "EMPTY", action) => {
  switch (action.type) {
    case "CHANGE_BOOK_NAME_INPUT":
    case "CHANGE_AUTHOR_INPUT":
    case "CHANGE_PUBLISHER_INPUT":
      return "IS_TYPING"
    case "REQUEST_BOOK_LIST":
      return "IS_FETCHING"
    case "RECEIVE_BOOK_LIST":
      return "IS_FETCHED"
    default:
      return state
  }
}

// eslint-disable-next-line
const uuid = (state = null, action) => {
  return state
}

const rootReducer = combineReducers({
  bookNameInput,
  authorInput,
  publisherInput,
  bookList,
  selectedBookAsin,
  postContent,
  contentSaveState,
  bookSearchState,
  uuid,
})

export default rootReducer
