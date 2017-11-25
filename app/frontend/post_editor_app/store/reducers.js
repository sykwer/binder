import { combineReducers } from "redux"

const bookNameInput = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_BOOK_NAME_INPUT":
      return action.text
    case "SELECT_BOOK":
      return ""
    default:
      return state
  }
}

const authorInput = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_AUTHOR_INPUT":
      return action.text
    case "SELECT_BOOK":
      return ""
    default:
      return state
  }
}

const publisherInput = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_PUBLISHER_INPUT":
      return action.text
    case "SELECT_BOOK":
      return ""
    default:
      return state
  }
}

const bookList = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_BOOK_LIST":
      return action.books
    case "NOTIFY_BOOK_SEARCH_INPUT_EMPTY":
      return []
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

const selectedBookTitle = (state = "", action) => {
  switch (action.type) {
    case "SELECT_BOOK":
      return action.title
    default:
      return state
  }
}

const selectedBookAuthor = (state = "", action) => {
  switch (action.type) {
    case "SELECT_BOOK":
      return action.author
    default:
      return state
  }
}

const selectedBookPublisher = (state = "", action) => {
  switch (action.type) {
    case "SELECT_BOOK":
      return action.publisher
    default:
      return state
  }
}

const selectedBookImage = (state = "", action) => {
  switch (action.type) {
    case "SELECT_BOOK":
      return action.image
    default:
      return state
  }
}

const isBookChanged = (state = false, action) => {
  switch (action.type) {
    case "SELECT_BOOK":
      return true
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

const postTitle = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_POST_TITLE":
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

const titleSaveState = (state = "INITIAL", action) => {
  switch (action.type) {
    case "UPDATE_POST_TITLE":
      return "IS_NOT_SAVED"
    case "START_SAVING_POST_TITLE":
      return "IS_SAVING"
    case "FINISH_SAVING_POST_TITLE":
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
    case "RECEIVE_EMPTY":
      return "IS_FETCHED_EMPTY"
    case "NOTIFY_BOOK_SEARCH_INPUT_EMPTY":
      return "EMPTY"
    default:
      return state
  }
}

const isBookSelectorOpen = (state = false, action) => {
  switch (action.type) {
    case "OPEN_BOOK_SELECTOR":
      return true
    case "CLOSE_BOOK_SELECTOR":
    case "SELECT_BOOK":
      return false
    default:
      return state
  }
}

const isPublishWindowDisplayed = (state = false, action) => {
  switch (action.type) {
    case "OPEN_PUBLISH_WINDOW":
      return true
    case "CLOSE_PUBLISH_WINDOW":
      return false
    default:
      return state
  }
}

const isSharedOnTwitter = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SHARED_ON_TWITTER":
      return !state
    default:
      return state
  }
}

const isSharedOnFacebook = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SHARED_ON_FACEBOOK":
      return !state
    default:
      return state
  }
}

// eslint-disable-next-line
const uuid = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const date = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const isPublished = (state = null, action) => {
  return state
}

const isChangesUnpublished = (state = null, action) => {
  switch (action.type) {
    case "UPDATE_POST_CONTENT":
    case "UPDATE_POST_TITLE":
      return true
    default:
      return state
  }
}

// eslint-disable-next-line
const user = (state = null, action) => {
  return state
}

// eslint-disable-next-line
const logoImage = (state = null, action) => {
  return state
}

const selectedTags = (state = [], action) => {
  switch (action.type) {
    case "SELECT_TAG":
      if (state.some(tag => tag.name === action.tag.name)) {
        return state
      }

      return [...state, action.tag]
    case "DELETE_TAG":
      return state.filter(tag => (
        tag.name !== action.tagName
      ))
    default:
      return state
  }
}

const tagNameInput = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_TAG_INPUT":
      return action.text
    case "SELECT_TAG":
      return ""
    default:
      return state
  }
}

const tagSearchState = (state = "NOT_FETCHED", action) => {
  switch (action.type) {
    case "START_FETCH_TAGS":
      return "FETCHING"
    case "FINISH_FETCH_TAGS":
      return "FETCHED"
    case "EMPTY_TAG_INPUT":
      return "NOT_FETCHED"
    default:
      return state
  }
}

const searchedTagsList = (state = [], action) => {
  switch (action.type) {
    case "FINISH_FETCH_TAGS":
      return action.tags
    case "SELECT_TAG":
    case "EMPTY_TAG_INPUT":
      return []
    default:
      return state
  }
}

const isTagsChanged = (state = false, action) => {
  switch (action.type) {
    case "SELECT_TAG":
    case "DELETE_TAG":
      return true
    default:
      return state
  }
}

const rootReducer = combineReducers({
  bookNameInput,
  authorInput,
  publisherInput,
  bookList,
  selectedBookAsin,
  selectedBookTitle,
  selectedBookAuthor,
  selectedBookPublisher,
  selectedBookImage,
  isBookChanged,
  postContent,
  postTitle,
  contentSaveState,
  titleSaveState,
  bookSearchState,
  isBookSelectorOpen,
  isPublishWindowDisplayed,
  isSharedOnTwitter,
  isSharedOnFacebook,
  uuid,
  date,
  isChangesUnpublished,
  isPublished,
  user,
  logoImage,
  selectedTags,
  tagNameInput,
  tagSearchState,
  searchedTagsList,
  isTagsChanged,
})

export default rootReducer
