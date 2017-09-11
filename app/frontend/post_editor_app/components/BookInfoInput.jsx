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
  <div className="bookinfo-input">
    <input
      type="text"
      placeholder="BookName"
      className="book-title input-item"
      onChange={(e) => {
        onChangeBookName(e.target.value)
      }}
      value={bookNameInput}
    />
    <input
      type="text"
      placeholder="Author"
      className="book-author input-item"
      onChange={(e) => {
        onChangeAuthor(e.target.value)
      }}
      value={authorInput}
    />
    <input
      type="text"
      placeholder="Publisher"
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
