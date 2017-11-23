import React from "react"
import PropTypes from "prop-types"
import renderHTML from "react-render-html"

import clapAnimation from "../../shared/utils/clap_animation"

const PostsListItem = ({
  post,
  isLoggedIn,
  beforeClapImage,
  afterClapImage,
  handleClickBookmark,
  handleClickUnbookmark,
  handleClickClap,
  handleOpenLoginModal,
}) => {
  let clapButton
  let clapCount
  let totalClapCount

  return (
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
          isLoggedIn && (
            <button
              className="clap-button-in-bookmark-tab"
              ref={(node) => { clapButton = node }}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleClickClap(post)

                clapAnimation(clapButton, clapCount, totalClapCount).replay()
              }}
            >
              <span
                className="clap-count-by-me"
                ref={(node) => { clapCount = node }}
              >
                {`+${post.clappedCountByMe}`}
              </span>
              <img
                className="clap-image"
                src={post.clappedCountByMe > 0 ? afterClapImage : beforeClapImage}
                alt="clap"
              />
              <span
                className="clap-count"
                ref={(node) => { totalClapCount = node }}
              >
                {post.clappedCount}
              </span>
            </button>
          )
        }
        {
          !isLoggedIn && (
            <button
              className="clap-button-in-bookmark-tab"
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
  )
}

PostsListItem.propTypes = {
  post: PropTypes.shape({
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
  }).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  beforeClapImage: PropTypes.string.isRequired,
  afterClapImage: PropTypes.string.isRequired,
  handleClickBookmark: PropTypes.func.isRequired,
  handleClickUnbookmark: PropTypes.func.isRequired,
  handleClickClap: PropTypes.func.isRequired,
  handleOpenLoginModal: PropTypes.func.isRequired,
}

export default PostsListItem
