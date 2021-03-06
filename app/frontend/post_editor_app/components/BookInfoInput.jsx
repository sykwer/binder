import React from "react"
import PropTypes from "prop-types"

const BookInfoInput = ({
  bookNameInput,
  authorInput,
  publisherInput,
  onChangeBookName,
  onChangeAuthor,
  onChangePublisher,
}) => (
  <div
    className="bookinfo-input"
    role="button"
    tabIndex="0"
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
    }}
  >
    <input
      type="text"
      placeholder="タイトル"
      className="book-title input-item"
      id="book-title-input"
      onChange={(e) => {
        onChangeBookName(e.target.value)
      }}
      value={bookNameInput}
    />
    <input
      type="text"
      placeholder="著者"
      className="book-author input-item"
      onChange={(e) => {
        onChangeAuthor(e.target.value)
      }}
      value={authorInput}
    />
    <input
      type="text"
      placeholder="出版社"
      className="book-publisher input-item"
      onChange={(e) => {
        onChangePublisher(e.target.value)
      }}
      value={publisherInput}
    />
  </div>
)

BookInfoInput.propTypes = {
  bookNameInput: PropTypes.string.isRequired,
  authorInput: PropTypes.string.isRequired,
  publisherInput: PropTypes.string.isRequired,
  onChangeBookName: PropTypes.func.isRequired,
  onChangeAuthor: PropTypes.func.isRequired,
  onChangePublisher: PropTypes.func.isRequired,
}

export default BookInfoInput
