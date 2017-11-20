import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { binderRootUrl } from "../../settings/endpoints"

const cpnt = ({
  posts,
}) => {
  const items = posts.map(post => (
    <div
      key={post.uuid}
      className="draft-list-item"
    >
      <a href={`${binderRootUrl}/posts/${post.uuid}/edit`}>
        <h2 className="post-title">
          { post.titleDraft ? post.titleDraft : "タイトル未設定" }
        </h2>
      </a>
      <div className="item-footer clearfix">
        <a href={`${binderRootUrl}/posts/${post.uuid}/edit`}>
          <p className="last-edited">
            {`Last Edited ${post.updatedAt}`}
          </p>
        </a>
      </div>
    </div>
  ))

  return (
    <div>
      {
        posts.length > 0 && (
          <div className="draft-list">
            {items}
          </div>
        )
      }
    </div>
  )
}

cpnt.propTypes = {
  posts: PropTypes.array.isRequired, // eslint-disable-line
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const Root = connect(
  mapStateToProps,
)(cpnt)

export default Root
