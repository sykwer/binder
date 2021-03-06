import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { binderRootUrl } from "../../settings/endpoints"
import {
  selectPost,
  unselectPost,
} from "../store/actions"

const cpnt = ({
  posts,
  selectedPostUuids,
  handleSelectPost,
  handleUnselectPost,
}) => {
  const items = posts.map((post) => {
    const isChecked = selectedPostUuids.includes(post.id)

    return (
      <div
        className="list-item"
        key={post.id}
      >
        <input
          type="checkbox"
          className="post-select-checkbox common-checkbox-appearance"
          checked={isChecked}
          onChange={isChecked ?
            () => { handleUnselectPost(post.id) } :
            () => { handleSelectPost(post.id) }}
        />
        <div className="list-item-main">
          <a
            className="edit-button"
            href={`${binderRootUrl}/posts/${post.id}/edit`}
          >
            Edit
          </a>
          <a href={`${binderRootUrl}/posts/${post.id}`}>
            <h2 className="post-title">
              {post.title}
            </h2>
          </a>
          <a href={`${binderRootUrl}/posts/${post.id}`}>
            <p className="published-at">
              {`Published at ${post.publishedAt}`}
            </p>
          </a>
        </div>
      </div>
    )
  })

  if (posts.length === 0) {
    return <div />
  }

  return (
    <div className="posts-list-in-tab">
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
  selectedPostUuids: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelectPost: PropTypes.func.isRequired,
  handleUnselectPost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
  selectedPostUuids: state.selectedPostUuids,
})

const mapDispatchToProps = dispatch => ({
  handleSelectPost: (postUuid) => {
    dispatch(selectPost(postUuid))
  },
  handleUnselectPost: (postUuid) => {
    dispatch(unselectPost(postUuid))
  },
})

const PostsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default PostsList
