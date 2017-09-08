import { connect } from "react-redux"

import { selectBook } from "../store/actions"
import BookList from "./BookList"

const mapStateToProps = (state) => {
  const bookList = state.bookList.filter(book => (
    typeof book.volumeInfo.imageLinks !== "undefined"
  ))
  const gridArr = []
  while (bookList.length) {
    gridArr.push(bookList.splice(0, 2))
  }

  let listBoxWord
  let isListEmpty
  switch (state.bookSearchState) {
    case "EMPTY":
      listBoxWord = "Type in search critearia."
      isListEmpty = true
      break
    case "IS_TYPING":
    case "IS_FETCHING":
      listBoxWord = "Searching.."
      isListEmpty = true
      break
    case "IS_FETCHED_EMPTY":
      listBoxWord = "Not found."
      isListEmpty = true
      break
    default:
      listBoxWord = ""
      isListEmpty = false
  }

  return {
    bookList: gridArr,
    listBoxWord,
    isListEmpty,
  }
}

const mapDispatchToProps = dispatch => ({
  handleOnClickBook: (bookAsin, title, author, publisher, image) => (
    dispatch(selectBook(bookAsin, title, author, publisher, image))
  ),
})

const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList)

export default BookListContainer
