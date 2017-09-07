import React from "react"
import PropTypes from "prop-types"
import { Grid } from "react-virtualized"

const BookList = ({ bookList }) => {
  const cellRenderer = ({ rowIndex, columnIndex, key, style }) => {
    const book = bookList[rowIndex][columnIndex]
    const bookName = book.volumeInfo.title

    let imageURL
    if (typeof book.volumeInfo.imageLinks !== "undefined") {
      imageURL = book.volumeInfo.imageLinks.smallThumbnail
    } else {
      imageURL = "http://via.placeholder.com/130x208"
    }

    Object.assign(style, { margin: 15 })

    return (
      <div key={key} style={style} >
        <img src={imageURL} alt={bookName} style={{ width: 130, height: 130 * 1.6 }} />
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
}

export default BookList
