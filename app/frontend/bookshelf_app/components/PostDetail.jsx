import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { startFetchPostDetail, startFetching } from "../store/actions"

const cpnt = ({
  post,
  nextPostUuid,
  priorPostUuid,
  handleOnClickArrow,
  isNeedPostsFetch,
  startPostsFetch,
}) => {
  if (!post) {
    return null
  }

  window.onkeydown = (e) => {
    const leftCode = 37
    const rightCode = 39

    if (e.keyCode === leftCode) {
      if (!priorPostUuid) {
        return
      }

      document.getElementById("angle-left-link").click()
    }

    if (e.keyCode === rightCode) {
      if (!nextPostUuid) {
        return
      }

      if (isNeedPostsFetch) {
        startPostsFetch()
      }

      document.getElementById("angle-right-link").click()
    }
  }

  return (
    <div
      className="post-detail-component"
      role="button"
      tabIndex="0"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        const node = document.getElementById("link-to-username-page")
        node.click()
      }}
    >
      <i className="fa fa-times close-post-detail-mark" aria-hidden="true" />
      <Link to={`/@${post.userUserName}/bookshelf`} id="link-to-username-page" />
      <div
        className="post-detail-card"
        role="button"
        tabIndex="0"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        {priorPostUuid && <Link to={`/posts/${priorPostUuid}`}><i
          id="angle-left-link"
          className="fa fa-angle-left link-to-prior-post"
          aria-hidden="true"
          role="button"
          tabIndex="0"
          onClick={() => {
            handleOnClickArrow(priorPostUuid)
          }}
        /></Link>}
        {nextPostUuid && <Link to={`/posts/${nextPostUuid}`}><i
          id="angle-right-link"
          className="fa fa-angle-right link-to-next-post"
          aria-hidden="true"
          role="button"
          tabIndex="0"
          onClick={() => {
            if (isNeedPostsFetch) {
              startPostsFetch()
            }
            handleOnClickArrow(nextPostUuid)
          }}
          onKeyDown={(e) => {
            if (e.keyCode !== 39) {
              return
            }
            if (isNeedPostsFetch) {
              startPostsFetch()
            }
            handleOnClickArrow(nextPostUuid)
          }}
        /></Link>}
        <div className="header-wrapper clearfix">
          <div className="header-image">
            <img
              src={post.userImageUrl}
              alt={post.userName}
            />
          </div>
          <div className="header-text">
            <div className="header-profile-name">
              <span>{post.userName}</span>
            </div>
            <div className="header-datetime">
              <span>{post.publishedAt}</span>
            </div>
          </div>
        </div>
        <div className="main-wrapper clearfix">
          <div className="main-left">
            <div className="main-book">
              <img src={post.bookImageUrl} alt={post.bookTitle} />
            </div>
            <div className="main-bookinfo">
              <div className="book-name overflow-ellipsis">
                <span>{post.bookTitle}</span>
              </div>
              <div className="book-author overflow-ellipsis">
                <span>{post.bookAuthor}</span>
              </div>
            </div>
          </div>
          <div className="main-right">
            <div className="main-book-review">
              <span>{post.content}</span>
            </div>
            <div className="book-review-below" />
          </div>
        </div>
        <div className="footer-wrapper clearfix">
          <div className="footer-left">
            <span className="bookmark">
              <i className="fa fa-bookmark-o" aria-hidden="true" />
            </span>
            <span className="bookmark-count">
              31
            </span>
          </div>
          <div className="footer-right">
            <span className="article-menu">
              <i className="fa fa-angle-down" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

cpnt.propTypes = {
  post: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
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
  }),
  nextPostUuid: PropTypes.string.isRequired,
  priorPostUuid: PropTypes.string.isRequired,
  isNeedPostsFetch: PropTypes.bool.isRequired,
  handleOnClickArrow: PropTypes.func.isRequired,
  startPostsFetch: PropTypes.func.isRequired,
}

cpnt.defaultProps = {
  post: null,
}

const stateToSiblingPostUuid = (state, offset) => {
  if (!state.selectedPost) {
    return ""
  }

  const idx = state.posts.findIndex(post => (
    post.id === state.selectedPost.uuid
  ))

  if (!state.posts[idx + offset]) {
    return ""
  }

  return state.posts[idx + offset].id
}

const mapStateToProps = state => ({
  post: state.selectedPost,
  nextPostUuid: stateToSiblingPostUuid(state, 1),
  priorPostUuid: stateToSiblingPostUuid(state, -1),
  isNeedPostsFetch: !stateToSiblingPostUuid(state, 3),
})

const mapDispatchToProps = dispatch => ({
  handleOnClickArrow: (postUuid) => {
    dispatch(startFetchPostDetail(postUuid))
  },
  startPostsFetch: () => {
    dispatch(startFetching())
  },
})

const PostDetail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default PostDetail
