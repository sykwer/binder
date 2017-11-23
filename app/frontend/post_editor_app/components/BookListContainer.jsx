import { connect } from "react-redux"

import { selectBook } from "../store/actions"
import BookList from "./BookList"

const mapStateToProps = (state) => {
  const bookList = state.bookList

  const gridArr = []
  while (bookList.length) {
    gridArr.push(bookList.splice(0, 2))
  }

  let listBoxWord
  let isListEmpty
  switch (state.bookSearchState) {
    case "EMPTY":
      listBoxWord = "検索条件を入力してください"
      isListEmpty = true
      break
    case "IS_TYPING":
    case "IS_FETCHING":
      listBoxWord = "検索中..."
      isListEmpty = true
      break
    case "IS_FETCHED_EMPTY":
      listBoxWord = "見つかりませんでした"
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
