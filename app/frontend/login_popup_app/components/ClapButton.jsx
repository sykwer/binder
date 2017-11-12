import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { openModal } from "../store/actions"

const cpnt = ({
  handleClickOpenModal,
  clapImage,
  clappedCount,
}) => (
  <button
    className="clap-button"
    onClick={(e) => {
      e.stopPropagation()
      handleClickOpenModal()
    }}
  >
    <img
      className="clap-image"
      src={clapImage}
      alt="clap"
    />
    <p className="claps-count-right">
      {clappedCount}
    </p>
  </button>
)

cpnt.propTypes = {
  handleClickOpenModal: PropTypes.func.isRequired,
  clapImage: PropTypes.string.isRequired,
  clappedCount: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  clapImage: state.clapImage,
  clappedCount: state.clappedCount,
})

const mapDispatchToProps = dispatch => ({
  handleClickOpenModal: () => {
    dispatch(openModal())
  },
})

const SigninButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default SigninButton
