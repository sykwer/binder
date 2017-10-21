import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { startFetchPostDetail } from "../store/actions"

const BookCpnt = ({ post, handleClickBook }) => (
  <Link
    to={`/posts/${post.id}`}
    onClick={() => { handleClickBook() }}
  >
    <div className="book-in-shelf-container">
      <img
        className="book-in-shelf"
        src={post.bookImageUrl}
        alt={post.bookTitle}
      />
    </div>
  </Link>
)

BookCpnt.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    bookImageUrl: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
  }).isRequired,
  handleClickBook: PropTypes.func.isRequired,
}

const cpnt = ({ posts, handleClickBook }) => {
  const bookCpnts = posts.map(post => (
    <BookCpnt
      key={post.id}
      post={post}
      handleClickBook={handleClickBook}
    />
  ))

  return (
    <div className="book-list">
      {bookCpnts}
    </div>
  )
}

cpnt.propTypes = {
  // eslint-disable-next-line
  posts: PropTypes.array.isRequired,
  handleClickBook: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
  handleClickBook: (postUuid) => {
    dispatch(startFetchPostDetail(postUuid))
  },
})

const BookList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default BookList
