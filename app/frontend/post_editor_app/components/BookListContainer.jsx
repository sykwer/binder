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

  return { bookList: gridArr }
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
