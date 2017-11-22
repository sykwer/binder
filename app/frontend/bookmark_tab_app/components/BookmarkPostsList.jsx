import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import renderHTML from "react-render-html"

import {
  clickBookmark,
  clickUnbookmark,
  clickClap,
  openLoginModal,
} from "../store/actions"

const cpnt = ({
  posts,
  isLoggedIn,
  beforeClapImage,
  afterClapImage,
  handleClickBookmark,
  handleClickUnbookmark,
  handleClickClap,
  handleOpenLoginModal,
}) => {
  const bookmarkedPosts = posts.map(post => (
    <div
      key={post.uuid}
      className="bookmarked-posts-list-item"
    >
      <div className="item-header clearfix">
        <a href={`/@${post.userUserName}`}>
          <img
            className="profile-image"
            src={post.userImageUrl}
            alt={post.userName}
          />
        </a>
        <div className="item-header-right">
          <p className="profile-name">
            <a
              className="profile-name-link"
              href={`/@${post.userUserName}`}
            >
              {post.userName}
            </a>
          </p>
          <p className="profile-bio">
            <a
              className="profile-bio-link"
              href={`/@${post.userUserName}`}
            >
              {post.userBio}
            </a>
          </p>
          <p className="published-date">{post.publishedAt}</p>
        </div>
      </div>
      <div className="tags-wrapper">
        <button
          className="tag-button"
        >
          {post.bookTitle}
        </button>
        <button
          className="tag-button"
        >
          {post.bookAuthor}
        </button>
      </div>
      <img
        className="book-image"
        src={post.bookImageUrl}
        alt={post.bookTitle}
      />
      <div className="item-body clearfix">
        <a href={`/posts/${post.uuid}`}>
          <h2 className="post-title">
            {post.title}
          </h2>
        </a>
        <a href={`/posts/${post.uuid}`}>
          <p className="post-content">
            {renderHTML(post.content.replace(/<(?!br\s*\/?)[^>]+>/g, ""))}
          </p>
        </a>
      </div>
      <div className="item-footer clearfix">
        {
          post.clappedCountByMe > 0 && (
            <button
              className="clap-button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleClickClap(post.uuid)
              }}
            >
              <img
                className="clap-image"
                src={afterClapImage}
                alt="clapped"
              />
              <span className="clap-count">{post.clappedCount}</span>
            </button>
          )
        }
        {
          isLoggedIn && post.clappedCountByMe === 0 && (
            <button
              className="clap-button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleClickClap(post.uuid)
              }}
            >
              <img
                className="clap-image"
                src={beforeClapImage}
                alt="clap"
              />
              <span className="clap-count">{post.clappedCount}</span>
            </button>
          )
        }
        {
          !isLoggedIn && (
            <button
              className="clap-button"
              onClick={(e) => {
                e.stopPropagation()
                handleOpenLoginModal()
              }}
            >
              <img
                className="clap-image"
                src={beforeClapImage}
                alt="clap"
              />
              <span className="clap-count">{post.clappedCount}</span>
            </button>
          )
        }
        {
          post.isBookmarked && (
            <button
              className="bookmark-button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleClickUnbookmark(post.uuid)
              }}
            >
              <i className="fa fa-bookmark" aria-hidden="true" />
            </button>
          )
        }
        {
          isLoggedIn && !post.isBookmarked && (
            <button
              className="bookmark-button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleClickBookmark(post.uuid)
              }}
            >
              <i className="fa fa-bookmark-o" aria-hidden="true" />
            </button>
          )
        }
        {
          !isLoggedIn && (
            <button
              className="bookmark-button"
              onClick={(e) => {
                e.stopPropagation()
                handleOpenLoginModal()
              }}
            >
              <i className="fa fa-bookmark-o" aria-hidden="true" />
            </button>
          )
        }
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
    userBio: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    bookmarkedCount: PropTypes.number.isRequired,
    clappedCount: PropTypes.number.isRequired,
    clappedCountByMe: PropTypes.number.isRequired,
  })).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  beforeClapImage: PropTypes.string.isRequired,
  afterClapImage: PropTypes.string.isRequired,
  handleClickBookmark: PropTypes.func.isRequired,
  handleClickUnbookmark: PropTypes.func.isRequired,
  handleClickClap: PropTypes.func.isRequired,
  handleOpenLoginModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
  isLoggedIn: state.isLoggedIn,
  beforeClapImage: state.beforeClapImage,
  afterClapImage: state.afterClapImage,
})

const mapDispatchToProps = dispatch => ({
  handleClickBookmark: (postUuid) => {
    dispatch(clickBookmark(postUuid))
  },
  handleClickUnbookmark: (postUuid) => {
    dispatch(clickUnbookmark(postUuid))
  },
  handleClickClap: (postUuid) => {
    dispatch(clickClap(postUuid))
  },
  handleOpenLoginModal: () => {
    dispatch(openLoginModal())
  },
})

const BookmarkPostsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default BookmarkPostsList
