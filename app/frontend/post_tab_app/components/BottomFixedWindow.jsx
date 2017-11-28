import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
  resetSelectedPosts,
  openDeleteScreen,
  openUnpublishScreen,
} from "../store/actions"

const cpnt = ({
  selectedPostsCount,
  handleClickResetSelect,
  handleClickOpenDeleteScreen,
  handleClickOpenUnpublishScreen,
}) => (
  <div className="published-posts-bottom-window">
    <div className="content-wrapper">
      <i
        className="fa fa-times close-button"
        aria-hidden="true"
        role="button"
        tabIndex="0"
        onClick={(e) => {
          e.stopPropagation()
          handleClickResetSelect()
        }}
      />
      <span className="selected-posts-count">
        {selectedPostsCount}
      </span>
      <span className="count-suffix">
        記事を選択中
      </span>
      <i
        className="fa fa-trash-o post-delete-button"
        aria-hidden="true"
        role="button"
        tabIndex="0"
        onClick={(e) => {
          e.stopPropagation()
          handleClickOpenDeleteScreen()
        }}
      />
      <i
        className="fa fa-low-vision unpublish-button"
        aria-hidden="true"
        role="button"
        tabIndex="0"
        onClick={(e) => {
          e.stopPropagation()
          handleClickOpenUnpublishScreen()
        }}
      />
    </div>
  </div>
)

cpnt.propTypes = {
  selectedPostsCount: PropTypes.number.isRequired,
  handleClickResetSelect: PropTypes.func.isRequired,
  handleClickOpenDeleteScreen: PropTypes.func.isRequired,
  handleClickOpenUnpublishScreen: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  selectedPostsCount: state.selectedPostUuids.length,
})

const mapDispatchToProps = dispatch => ({
  handleClickResetSelect: () => {
    dispatch(resetSelectedPosts())
  },
  handleClickOpenDeleteScreen: () => {
    dispatch(openDeleteScreen())
  },
  handleClickOpenUnpublishScreen: () => {
    dispatch(openUnpublishScreen())
  },
})

const BottomFixedWindow = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default BottomFixedWindow
