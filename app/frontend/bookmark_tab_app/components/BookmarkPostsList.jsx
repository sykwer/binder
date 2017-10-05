import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { clickBookmark, clickUnbookmark } from "../store/actions"

const cpnt = ({
  posts,
  handleClickBookmark, // eslint-disable-line
  handleClickUnbookmark, // eslint-disable-line
}) => {
  const bookmarkedPosts = posts.map(post => (
    <div
      key={post.uuid}
      className="bookmarked-posts-list-item"
    >
      <div className="item-header clearfix">
        <img
          className="profile-image"
          src={post.userImageUrl}
          alt={post.userName}
        />
        <div className="item-header-right">
          <p className="profile-name">{post.userName}</p>
          <p className="published-name">{post.publishedAt}</p>
        </div>
      </div>
      <h2 className="post-title">{post.title}</h2>
      <div className="item-body">
        <img
          className="book-image"
          src={post.bookImageUrl}
          alt={post.bookTitle}
        />
        <p className="post-content">
          {post.content}
        </p>
      </div>
    </div>
  ))

  return (
    <div className="bookmarked-posts-list">
      {bookmarkedPosts}
    </div>
  )
}

cpnt.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    bookImageUrl: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthor: PropTypes.string.isRequired,
    bookPublisher: PropTypes.string.isRequired,
    affiliateLink: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    userImageUrl: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userUserName: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    bookmarkedCount: PropTypes.number.isRequired,
  })).isRequired,
  handleClickBookmark: PropTypes.func.isRequired,
  handleClickUnbookmark: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
  handleClickBookmark: (postUuid) => {
    dispatch(clickBookmark(postUuid))
  },
  handleClickUnbookmark: (postUuid) => {
    dispatch(clickUnbookmark(postUuid))
  },
})

const BookmarkPostsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default BookmarkPostsList
