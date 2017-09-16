import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const cpnt = ({ post }) => {
  if (!post) {
    return null
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
      <Link to={`/@${post.userUserName}`} id="link-to-username-page" />
      <div
        className="post-detail-card"
        role="button"
        tabIndex="0"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        <div className="header-wrapper clearfix">
          <div className="header-image">
            <img src={post.userImageUrl} alt={post.userName} />
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
            <span className="like-heart">
              <i className="fa fa-heart-o" aria-hidden="true" />
            </span>
            <span className="like-count">
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
}

cpnt.defaultProps = {
  post: null,
}

const mapStateToProps = state => ({
  post: state.selectedPost,
})

const PostDetail = connect(
  mapStateToProps,
)(cpnt)

export default PostDetail
