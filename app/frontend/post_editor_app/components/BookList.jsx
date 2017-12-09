import React from "react"
import PropTypes from "prop-types"
import { Grid } from "react-virtualized"

const BookList = ({
  bookList,
  listBoxWord,
  isListEmpty,
  handleOnClickBook,
}) => {
  if (isListEmpty) {
    return (
      <div className="booklist-window">
        <span className="list-box-word">{listBoxWord}</span>
      </div>
    )
  }

  const cellRenderer = ({
    rowIndex,
    columnIndex,
    key,
    style,
  }) => {
    // Workaround: Custom style in valid place
    Object.assign(style, { margin: 15 })

    const book = bookList[rowIndex][columnIndex]

    // Workaround: Research how should we do when the number of books is odd number
    if (typeof book === "undefined") {
      Object.assign(style, { opacity: 0 })
      return (
        <div key={key} style={style} />
      )
    }

    const onClick = () => {
      handleOnClickBook(
        book.asin,
        book.title,
        book.author,
        book.publisher,
        book.imageUrl,
      )

      // focus caret on last of post content
      const node = document.getElementById("post-content-div")
      const range = document.createRange()
      const selection = window.getSelection()
      range.selectNodeContents(node)
      range.collapse()
      selection.removeAllRanges()
      selection.addRange(range)
    }

    return (
      <div
        key={key}
        style={style}
        role="button"
        onClick={onClick}
        tabIndex={(rowIndex * 2) + columnIndex}
      >
        <img
          src={book.imageUrl}
          alt={book.title}
          style={{ width: 170, height: 170 * 1.6 }}
        />
      </div>
    )
  }

  cellRenderer.propTypes = {
    rowIndex: PropTypes.number.isRequired,
    columnIndex: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
    // eslint-disable-next-line
    style: PropTypes.any.isRequired,
  }

  return (
    <Grid
      className="booklist-window"
      cellRenderer={cellRenderer}
      rowCount={bookList.length}
      columnCount={2}
      height={400}
      width={400}
      rowHeight={(170 * 1.6) + 15}
      columnWidth={170 + 30}
    />
  )
}

BookList.propTypes = {
  // eslint-disable-next-line
  bookList: PropTypes.array.isRequired,
  listBoxWord: PropTypes.string.isRequired,
  isListEmpty: PropTypes.bool.isRequired,
  handleOnClickBook: PropTypes.func.isRequired,
}

export default BookList
