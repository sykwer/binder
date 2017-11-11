import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { openModal } from "../store/actions"

const cpnt = ({ handleClickOpenModal }) => (
  <button
    className="login-button"
    onClick={(e) => {
      e.stopPropagation()
      handleClickOpenModal()
    }}
  >
    Signin / Signup
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

const LoginButton = connect(
  null,
  mapDispatchToProps,
)(cpnt)

export default LoginButton
