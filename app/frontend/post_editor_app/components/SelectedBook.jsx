import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { openBookSelector } from "../store/actions"

const cpnt = ({ imageURL, title, author, handleClickOpenBookSelector }) => {
  let mainBook
  if (imageURL) {
    mainBook = (
      <div className="main-book-shadowed">
        <img src={imageURL} alt={title} />
      </div>
    )
  } else {
    mainBook = (
      <div className="main-book-placeholded" />
    )
  }

  return (
    <div className="main-left">
      {mainBook}
      <span
        className="link-to-selector"
        role="button"
        tabIndex="0"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleClickOpenBookSelector()

          window.setTimeout(() => {
            const input = document.getElementById("book-title-input")
            input.focus()
          }, 300)
        }}
      >
        {">> Select book"}
      </span>
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
}

cpnt.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  handleClickOpenBookSelector: PropTypes.func.isRequired,
}

cpnt.defaultProps = {
  title: "",
  author: "",
}

const mapStateToProps = (state) => {
  const imageURL = state.selectedBookAsin ? state.selectedBookImage : ""
  const title = state.selectedBookTitle
  const author = state.selectedBookAuthor

  return { imageURL, title, author }
}

const mapDispatchToProps = dispatch => ({
  handleClickOpenBookSelector: () => {
    dispatch(openBookSelector())
  },
})

const SelectedBook = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default SelectedBook
