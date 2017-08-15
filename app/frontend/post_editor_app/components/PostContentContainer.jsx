import { connect } from "react-redux"

import { updatePostContent } from "../store/actions"
import PostContent from "./PostContent"

const mapStateToProps = state => ({
  text: state.postContent,
})

const mapDispatchToProps = dispatch => ({
  onChangeContent: text => dispatch(updatePostContent(text)),
})

const PostContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostContent)

export default PostContentContainer
