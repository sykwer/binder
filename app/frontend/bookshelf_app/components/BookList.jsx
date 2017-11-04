import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const BookCpnt = ({ post }) => (
  <a href={`/posts/${post.id}`}>
    <div className="book-in-shelf-container">
      <img
        className="book-in-shelf"
        src={post.bookImageUrl}
        alt={post.bookTitle}
      />
    </div>
  </a>
)

BookCpnt.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    bookImageUrl: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
  }).isRequired,
}

const cpnt = ({ posts }) => {
  const bookCpnts = posts.map(post => (
    <BookCpnt
      key={post.id}
      post={post}
    />
  ))

  return (
    <div className="book-list">
      {bookCpnts}
    </div>
  )
}

cpnt.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    bookImageUrl: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
  })).isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const BookList = connect(
  mapStateToProps,
)(cpnt)

export default BookList
