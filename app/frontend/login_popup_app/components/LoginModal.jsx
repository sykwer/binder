import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import {
  closeModal,
  changeToSignupMode,
  changeToSigninMode,
} from "../store/actions"

const cpnt = ({
  handleClickCloseModal,
  handleClickChangeToSignup,
  handleClickChangeToSignin,
  isSignupMode,
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
      className="login-modal cancel-focus-outline"
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
          {isSignupMode ? "Facebookで登録する" : "facebookでログインする"}
        </a>
        <a
          className="twitter-login-button login-button"
          href={twitterAuthPath}
        >
          {isSignupMode ? "Twitterで登録する" : "Twitterでログインする"}
        </a>
      </div>
      {
        isSignupMode ? (
          <a
            className="modal-mode-changer cancel-focus-outline"
            role="button"
            tabIndex="0"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleClickChangeToSignin()
            }}
          >
            ログインはこちら
          </a>
        ) : (
          <a
            className="modal-mode-changer cancel-focus-outline"
            role="button"
            tabIndex="0"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleClickChangeToSignup()
            }}
          >
            新規登録はこちら
          </a>
        )
      }
    </div>
  </div>
)

cpnt.propTypes = {
  handleClickCloseModal: PropTypes.func.isRequired,
  handleClickChangeToSignin: PropTypes.func.isRequired,
  handleClickChangeToSignup: PropTypes.func.isRequired,
  facebookAuthPath: PropTypes.string.isRequired,
  twitterAuthPath: PropTypes.string.isRequired,
  isSignupMode: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  facebookAuthPath: state.facebookAuthPath,
  twitterAuthPath: state.twitterAuthPath,
  isSignupMode: state.modalMode === "signup",
})

const mapDispatchToProps = dispatch => ({
  handleClickCloseModal: () => {
    dispatch(closeModal())
  },
  handleClickChangeToSignin: () => {
    dispatch(changeToSigninMode())
  },
  handleClickChangeToSignup: () => {
    dispatch(changeToSignupMode())
  },
})

const LoginModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default LoginModal
