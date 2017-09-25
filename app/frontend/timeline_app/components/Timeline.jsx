import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({ posts }) => {
  const postCpnts = posts.map(post => (
    <div key={post.uuid} className="article-card">
      <div className="header-wrapper clearfix">
        <div className="header-image">
          <a href={`/@${post.userUserName}`}>
            <img src={post.userImageUrl} alt={post.userName} />
          </a>
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
            <a href={post.affiliateLink || "#"}>
              <img src={post.bookImageUrl} alt={post.bookTitle} />
            </a>
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
          <div className="book-review-below">
            <span>
              <a href={`/posts/${post.uuid}`}>Read More..</a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-wrapper clearfix">
        <div className="footer-left">
          <span className="bookmark">
            <i className="fa fa-bookmark-o" aria-hidden="true" />
          </span>
          <span className="bookmark-count">3</span>
        </div>
        <div className="footer-right">
          <span className="article-menu">
            <i className="fa fa-angle-down" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  ))

  return (
    <div>
      {postCpnts}
    </div>
  )
}

cpnt.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequird,
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
  })),
}

cpnt.defaultProps = {
  posts: [],
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const Timeline = connect(
  mapStateToProps,
)(cpnt)

export default Timeline
