import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { openModal } from "../store/actions"

const cpnt = ({ handleClickOpenModal }) => (
  <button
    className="bookmark-button"
    onClick={(e) => {
      e.stopPropagation()
      handleClickOpenModal()
    }}
  >
    <i
      className="fa fa-bookmark-o"
      aria-hidden="true"
    />
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

const SigninButton = connect(
  null,
  mapDispatchToProps,
)(cpnt)

export default SigninButton
