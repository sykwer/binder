import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { selectPost, unselectPost } from "../store/actions"
import { binderRootUrl } from "../../settings/endpoints"

const cpnt = ({
  posts,
  selectedPostUuids,
  handleSelectPost,
  handleUnselectPost,
}) => {
  const items = posts.map((post) => {
    const isChecked = selectedPostUuids.includes(post.uuid)

    return (
      <div
        key={post.uuid}
        className="list-item"
      >
        <input
          type="checkbox"
          className="post-select-checkbox common-checkbox-appearance"
          checked={isChecked}
          onChange={isChecked ?
            () => { handleUnselectPost(post.uuid) } :
            () => { handleSelectPost(post.uuid) }}
        />
        <div className="list-item-main">
          <a
            className="edit-button"
            href={`${binderRootUrl}/posts/${post.uuid}`}
          >
            Edit
          </a>
          <a href={`${binderRootUrl}/posts/${post.uuid}`}>
            <h2 className="post-title">
              { post.titleDraft ? post.titleDraft : "タイトル未設定" }
            </h2>
          </a>
          <a href={`${binderRootUrl}/posts/${post.uuid}`}>
            <p className="last-edited">
              {`Last Edited ${post.updatedAt}`}
            </p>
          </a>
        </div>
      </div>
    )
  })

  return (
    <div>
      {
        posts.length > 0 && (
          <div className="posts-list-in-tab">
            {items}
          </div>
        )
      }
    </div>
  )
}

cpnt.propTypes = {
  posts: PropTypes.array.isRequired, // eslint-disable-line
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
