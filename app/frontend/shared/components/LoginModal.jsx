import React from "react"
import PropTypes from "prop-types"

const LoginModal = ({
  handleClickCloseModal,
  handleClickChangeToSignup,
  handleClickChangeToSignin,
  isSignupMode,
  logoImage,
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
    <a href="/" onClick={(e) => { e.stopPropagation() }}>
      <img
        className="logo-image"
        src={logoImage}
        alt="binder"
      />
    </a>
    <div
      className="login-modal cancel-focus-outline"
      role="button"
      tabIndex="0"
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {
        isSignupMode ? (
          <h2 className="login-modal-header">Binderに登録する</h2>
        ) : (
          <h2 className="login-modal-header">ログイン</h2>
        )
      }
      {
        isSignupMode ? (
          <p className="login-modal-desc">
            <a href="/terms">利用規約</a>と<a href="/terms/privacy">プライバシーポリシー</a>に同意した上で
          </p>
        ) : (
          <p className="login-modal-desc">
            Binderのアカウントをお持ちの方は、このページからログインできます
          </p>
        )
      }
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
  logoImage: PropTypes.string.isRequired,
  isSignupMode: PropTypes.bool.isRequired,
}

export default LoginModal
