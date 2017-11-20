import React from "react"
import PropTypes from "prop-types"

const LoginModal = ({
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

LoginModal.propTypes = {
  handleClickCloseModal: PropTypes.func.isRequired,
  handleClickChangeToSignin: PropTypes.func.isRequired,
  handleClickChangeToSignup: PropTypes.func.isRequired,
  facebookAuthPath: PropTypes.string.isRequired,
  twitterAuthPath: PropTypes.string.isRequired,
  isSignupMode: PropTypes.bool.isRequired,
}

export default LoginModal
