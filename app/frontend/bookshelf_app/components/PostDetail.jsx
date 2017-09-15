import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({ post }) => {
  if (!post) {
    return null
  }

  return (
    <div>
      <p>{post.uuid}</p>
      <p>{post.content}</p>
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
