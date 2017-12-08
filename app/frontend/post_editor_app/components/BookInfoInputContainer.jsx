import { connect } from "react-redux"

import {
  changeBookNameInput,
  changeAuthorInput,
  changePublisherInput,
} from "../../shared/store/editor/actions"

import BookInfoInput from "./BookInfoInput"

const mapStateToProps = state => ({
  bookNameInput: state.bookNameInput,
  authorInput: state.authorInput,
  publisherInput: state.publisherInput,
})

const mapDispatchToProps = dispatch => ({
  onChangeBookName: text => (
    dispatch(changeBookNameInput(text))
  ),
  onChangeAuthor: text => (
    dispatch(changeAuthorInput(text))
  ),
  onChangePublisher: text => (
    dispatch(changePublisherInput(text))
  ),
})

const BookInfoInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookInfoInput)

export default BookInfoInputContainer
