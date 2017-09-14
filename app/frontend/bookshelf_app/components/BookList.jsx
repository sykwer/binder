import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const tableRow = ({ rowBooks, rowCount }) => {
  const bookColumns = rowBooks.map(book => (
    <td key={book.id}>
      <img src={book.book_image_url} alt={book.book_title} />
    </td>
  ))

  return (
    <tr key={rowCount}>
      {bookColumns}
    </tr>
  )
}

tableRow.propTypes = {
  // eslint-disable-next-line
  rowBooks: PropTypes.array.isRequired,
  rowCount: PropTypes.number.isRequired,
}

const cpnt = ({ books }) => {
  const tableRows = []

  let rowCount = 0
  while (books.length) {
    const rowBooks = books.splice(0, 5)
    tableRows.push(tableRow({ rowBooks, rowCount }))
    rowCount += 1
  }

  return (
    <table>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}

cpnt.propTypes = {
  // eslint-disable-next-line
  books: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  books: state.books,
})

const BookList = connect(
  mapStateToProps,
)(cpnt)

export default BookList
