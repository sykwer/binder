import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { closeModal } from "../store/actions"

const cpnt = ({
  handleClickCloseModal,
  facebookAuthPath,
  twitterAuthPath,
}) => (
  <div
    className="login-modal-wrapper"
    role="button"
    tabIndex="0"
    onClick={(e) => {
      e.stopPropagation()
      handleClickCloseModal()
    }}
  >
    <div
      className="login-modal"
      role="button"
      tabIndex="0"
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <div className="buttons-wrapper">
        <a
          className="facebook-login-button login-button"
          href={facebookAuthPath}
        >
          Login with facebook
        </a>
        <a
          className="twitter-login-button login-button"
          href={twitterAuthPath}
        >
          Login with twitter
        </a>
      </div>
    </div>
  </div>
)

cpnt.propTypes = {
  handleClickCloseModal: PropTypes.func.isRequired,
  facebookAuthPath: PropTypes.string.isRequired,
  twitterAuthPath: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  facebookAuthPath: state.facebookAuthPath,
  twitterAuthPath: state.twitterAuthPath,
})

const mapDispatchToProps = dispatch => ({
  handleClickCloseModal: () => {
    dispatch(closeModal())
  },
})

const LoginModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default LoginModal
