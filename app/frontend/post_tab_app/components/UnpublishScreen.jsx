import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { cancelUnpublish, confirmUnpublish } from "../store/actions"

const cpnt = ({
  handleClickCancelUnpublish,
  handleClickConfirmUnpublish,
  selectedPostsCount,
}) => (
  <div className="confirmation-window">
    <p className="confirm-msg">
      {`本当に${selectedPostsCount}件の記事を非公開にし、下書きリストに移動しますか?`}
    </p>
    <div className="buttons-wrapper">
      <button
        className="unpublish-button"
        onClick={(e) => {
          e.stopPropagation()
          handleClickConfirmUnpublish()
        }}
      >
        Unpublish
      </button>
      <button
        className="cancel-button"
        onClick={(e) => {
          e.stopPropagation()
          handleClickCancelUnpublish()
        }}
      >
        Cancel
      </button>
    </div>
  </div>
)

cpnt.propTypes = {
  selectedPostsCount: PropTypes.number.isRequired,
  handleClickCancelUnpublish: PropTypes.func.isRequired,
  handleClickConfirmUnpublish: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  selectedPostsCount: state.selectedPostUuids.length,
})

const mapDispatchToProps = dispatch => ({
  handleClickCancelUnpublish: () => {
    dispatch(cancelUnpublish())
  },
  handleClickConfirmUnpublish: () => {
    dispatch(confirmUnpublish())
  },
})

const UnpublishScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default UnpublishScreen
