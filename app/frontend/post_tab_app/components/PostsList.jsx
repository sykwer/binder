import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { binderRootUrl } from "../../settings/endpoints"

const cpnt = ({
  posts,
}) => {
  const items = posts.map(post => (
    <div
      className="list-item"
      key={post.id}
    >
      <a href={`${binderRootUrl}/posts/${post.id}/edit`}>
        <h2 className="post-title">
          {post.title}
        </h2>
      </a>
      <a href={`${binderRootUrl}/posts/${post.id}/edit`}>
        <p className="published-at">
          {`Published at ${post.publishedAt}`}
        </p>
      </a>
    </div>
  ))

  return (
    <div className="published-posts-list">
      {items}
    </div>
  )
}

cpnt.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
  })).isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const PostsList = connect(
  mapStateToProps,
)(cpnt)

export default PostsList
