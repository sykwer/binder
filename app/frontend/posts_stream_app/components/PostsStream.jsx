import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import renderHTML from "react-render-html"

import {
  clickBookmark,
  clickUnbookmark,
  openLoginModal,
} from "../store/actions"

const cpnt = ({
  posts,
  isLoggedIn,
  handleClickBookmark,
  handleClickUnbookmark,
  handleOpenLoginModal,
}) => {
  const items = posts.map(post => (
    <div
      key={post.uuid}
      className="posts-std-grid-item"
    >
      <img
        src={post.bookImageUrl}
        alt={post.bookTitle}
        className="book-image"
      />
      <div className="post-info">
        <a className="post-title" href={`/posts/${post.uuid}`}>{post.title}</a>
        <a className="post-content" href={`/posts/${post.uuid}`}>
          {renderHTML(post.content.replace(/<(?!br\s*\/?)[^>]+>/g, ""))}
        </a>
      </div>
      <div className="profile-info clearfix">
        <a href={`/@${post.userUserName}`}>
          <img className="profile-image" src={post.userImageUrl} alt={post.userName} />
        </a>
        <div className="profile-right">
          <a className="profile-name" href={`/@${post.userUserName}`}>{post.userName}</a>
          <p className="post-published-at">{post.publishedAt}</p>
        </div>
      </div>
      <div className="bookmark-button-wrapper">
        {
          post.isBookmarked && (
            <i
              className="fa fa-bookmark unbookmark-button"
              aria-hidden="true"
              onClick={(e) => {
                e.stopPropagation()
                handleClickUnbookmark(post.uuid)
              }}
            />
          )
        }
        {
          isLoggedIn && !post.isBookmarked && (
            <i
              className="fa fa-bookmark-o bookmark-button"
              aria-hidden="true"
              onClick={(e) => {
                e.stopPropagation()
                handleClickBookmark(post.uuid)
              }}
            />
          )
        }
        {
          !isLoggedIn && (
            <i
              className="fa fa-bookmark-o bookmark-button"
              aria-hidden="true"
              onClick={(e) => {
                e.stopPropagation()
                handleOpenLoginModal()
              }}
            />
          )
        }
      </div>
    </div>
  ))

  return (
    <div className="posts-std-grid">
      {items}
    </div>
  )
}

cpnt.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    bookImageUrl: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequried,
    affiliateLink: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    userImageUrl: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userUserName: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    bookmarkedCount: PropTypes.number.isRequired,
  })).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  handleClickBookmark: PropTypes.func.isRequired,
  handleClickUnbookmark: PropTypes.func.isRequired,
  handleOpenLoginModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
  isLoggedIn: state.isLoggedIn,
})

const mapDispatchToProps = dispatch => ({
  handleClickBookmark: (postUuid) => {
    dispatch(clickBookmark(postUuid))
  },
  handleClickUnbookmark: (postUuid) => {
    dispatch(clickUnbookmark(postUuid))
  },
  handleOpenLoginModal: () => {
    dispatch(openLoginModal())
  },
})

const PostsStream = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default PostsStream
