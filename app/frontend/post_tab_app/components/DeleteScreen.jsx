import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { cancelDelete } from "../store/actions"

const cpnt = ({
  handleClickCancelDelete,
  selectedPostsCount,
}) => (
  <div className="confirmation-window">
    <p className="confirm-msg">
      {`本当に${selectedPostsCount}件の記事を削除しますか?`}
    </p>
    <div className="buttons-wrapper">
      <button
        className="delete-button"
      >
        Delete
      </button>
      <button
        className="cancel-button"
        onClick={(e) => {
          e.stopPropagation()
          handleClickCancelDelete()
        }}
      >
        Cancel
      </button>
    </div>
  </div>
)

cpnt.propTypes = {
  selectedPostsCount: PropTypes.number.isRequired,
  handleClickCancelDelete: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  selectedPostsCount: state.selectedPostUuids.length,
})

const mapDispatchToProps = dispatch => ({
  handleClickCancelDelete: () => {
    dispatch(cancelDelete())
  },
})

const DeleteScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default DeleteScreen
