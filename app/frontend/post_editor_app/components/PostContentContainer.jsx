import { connect } from "react-redux"

import { updatePostContent } from "../../shared/store/editor/actions"
import PostContent from "./PostContent"

const mapDispatchToProps = dispatch => ({
  onChangeContent: text => dispatch(updatePostContent(text)),
})

const PostContentContainer = connect(
  null,
  mapDispatchToProps,
)(PostContent)

export default PostContentContainer
