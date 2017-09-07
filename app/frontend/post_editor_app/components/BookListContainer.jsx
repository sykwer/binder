import { connect } from "react-redux"

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

const BookListContainer = connect(
  mapStateToProps,
)(BookList)

export default BookListContainer
