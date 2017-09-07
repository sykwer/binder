import React from "react"
import PropTypes from "prop-types"
import { Grid } from "react-virtualized"

const BookList = ({ bookList, handleOnClickBook }) => {
  const cellRenderer = ({ rowIndex, columnIndex, key, style }) => {
    // Workaround: Custom style in valid place
    Object.assign(style, { margin: 15 })

    const book = bookList[rowIndex][columnIndex]

    // Workaround: Research how should we do when the number of books is odd number
    if (typeof book === "undefined") {
      Object.assign(style, { opacity: 0 })
      return (
        <div key={key} style={style}>
          <img src="http://via.placeholder.com/130x208" alt="blank" />
        </div>
      )
    }

    const bookName = book.volumeInfo.title
    const imageURL = book.volumeInfo.imageLinks.thumbnail
    const bookId = book.id

    const onClick = () => {
      handleOnClickBook(bookId)
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
          src={imageURL}
          alt={bookName}
          style={{ width: 130, height: 130 * 1.6 }}
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
      className={"booklist-window"}
      cellRenderer={cellRenderer}
      rowCount={bookList.length}
      columnCount={2}
      height={400}
      width={320}
      rowHeight={(130 * 1.6) + 15}
      columnWidth={130 + 30}
    />
  )
}

BookList.propTypes = {
  // eslint-disable-next-line
  bookList: PropTypes.array.isRequired,
  handleOnClickBook: PropTypes.func.isRequired,
}

export default BookList
