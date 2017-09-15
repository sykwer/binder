import React from "react"
import PropTypes from "prop-types"

const PostDetail = ({ match }) => (
  <h1>{match.params.uuid}</h1>
)

PostDetail.propTypes = {
  // eslint-disable-next-line
  match: PropTypes.any,
}

export default PostDetail
