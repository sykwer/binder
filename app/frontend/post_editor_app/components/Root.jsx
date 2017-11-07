import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import HeaderContainer from "./HeaderContainer"
import PostContentContainer from "./PostContentContainer"
import BookInfoInputContainer from "./BookInfoInputContainer"
import PostMetaInfo from "./PostMetaInfo"
import BookListContainer from "./BookListContainer"
import SelectedBook from "./SelectedBook"
import PostTitle from "./PostTitle"

import {
  closeBookSelector,
  closePublishWindow,
} from "../store/actions"

const cpnt = ({
  isBookSelectorOpen,
  handleClickCloseBookSelector,
  handleClickClosePublishWindow,
}) => (
  <div
    className="post-editor-component cancel-focus-outline"
    role="button"
    tabIndex="0"
    onClick={(e) => {
      e.stopPropagation()
      handleClickClosePublishWindow()
    }}
  >
    <HeaderContainer />
    {
      isBookSelectorOpen && (
        <div
          className="book-selector-component"
          role="button"
          tabIndex="0"
          onClick={() => {
            handleClickCloseBookSelector()
          }}
        >
          <BookInfoInputContainer />
          <BookListContainer />
        </div>
      )
    }
    <div className="post-preview-component">
      <PostMetaInfo />
      <div className="main-wrapper clearfix">
        <SelectedBook />
        <div className="main-right">
          <PostTitle />
          <PostContentContainer />
        </div>
      </div>
    </div>
  </div>
)

cpnt.propTypes = {
  isBookSelectorOpen: PropTypes.bool.isRequired,
  handleClickCloseBookSelector: PropTypes.func.isRequired,
  handleClickClosePublishWindow: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isBookSelectorOpen: state.isBookSelectorOpen,
})

const mapDispatchToProps = dispatch => ({
  handleClickCloseBookSelector: () => {
    dispatch(closeBookSelector())
  },
  handleClickClosePublishWindow: () => {
    dispatch(closePublishWindow())
  },
})

const Root = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default Root
