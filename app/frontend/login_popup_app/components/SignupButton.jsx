import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { openModal } from "../store/actions"

const cpnt = ({ handleClickOpenModal }) => (
  <button
    className="signup-button"
    onClick={(e) => {
      e.stopPropagation()
      handleClickOpenModal()
    }}
  >
    Sign up
  </button>
)

cpnt.propTypes = {
  handleClickOpenModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  handleClickOpenModal: () => {
    dispatch(openModal())
  },
})

const SignupButton = connect(
  null,
  mapDispatchToProps,
)(cpnt)

export default SignupButton
