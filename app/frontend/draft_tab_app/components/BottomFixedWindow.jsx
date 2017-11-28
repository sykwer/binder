import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
  resetSelectedPosts,
  openDeleteScreen,
} from "../store/actions"

const cpnt = ({
  selectedPostsCount,
  handleClickResetSelect,
  handleClickOpenDeleteScreen,
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
        下書きを選択中
      </span>
      <i
        className="fa fa-trash-o draft-delete-button"
        aria-hidden="true"
        role="button"
        tabIndex="0"
        onClick={(e) => {
          e.stopPropagation()
          handleClickOpenDeleteScreen()
        }}
      />
    </div>
  </div>
)

cpnt.propTypes = {
  selectedPostsCount: PropTypes.number.isRequired,
  handleClickResetSelect: PropTypes.func.isRequired,
  handleClickOpenDeleteScreen: PropTypes.func.isRequired,
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
})

const BottomFixedWindow = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default BottomFixedWindow
