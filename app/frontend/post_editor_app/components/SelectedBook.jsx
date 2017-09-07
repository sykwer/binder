import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({ imageURL, title, author }) => (
  <div className="main-left">
    <div className="main-book">
      <img src={imageURL} alt={title} />
    </div>
    <div className="main-bookinfo">
      <div className="book-name overflow-ellipsis">
        <span>{title}</span>
      </div>
      <div className="book-author overflow-ellipsis">
        <span>{author}</span>
      </div>
    </div>
  </div>
)

cpnt.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
}

cpnt.defaultProps = {
  title: "",
  author: "",
}

const mapStateToProps = (state) => {
  let imageURL
  let title
  let author
  if (!state.selectedBookAsin) {
    imageURL = "http://via.placeholder.com/142x212"
  } else {
    const bk = state.bookList.find(book => book.id === state.selectedBookAsin)
    imageURL = bk.volumeInfo.imageLinks.thumbnail
    title = bk.volumeInfo.title
    author = bk.volumeInfo.authors[0] // FIXME: Deal with multiple authors
  }

  return { imageURL, title, author }
}

const SelectedBook = connect(
  mapStateToProps,
)(cpnt)

export default SelectedBook
