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
  const imageURL = state.selectedBookAsin ? state.selectedBookImage : "http://via.placeholder.com/142x212"
  const title = state.selectedBookTitle
  const author = state.selectedBookAuthor

  return { imageURL, title, author }
}

const SelectedBook = connect(
  mapStateToProps,
)(cpnt)

export default SelectedBook
