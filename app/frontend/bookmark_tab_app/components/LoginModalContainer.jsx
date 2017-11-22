import { connect } from "react-redux"

import {
  closeLoginModal,
  changeToSignupMode,
  changeToSigninMode,
} from "../store/actions"

import LoginModal from "../../shared/components/LoginModal"

const mapStateToProps = state => ({
  isSignupMode: state.modalMode === "signup",
  facebookAuthPath: state.facebookAuthPath,
  twitterAuthPath: state.twitterAuthPath,
})

const mapDispatchToProps = dispatch => ({
  handleClickCloseModal: () => {
    dispatch(closeLoginModal())
  },
  handleClickChangeToSignup: () => {
    dispatch(changeToSignupMode())
  },
  handleClickChangeToSignin: () => {
    dispatch(changeToSigninMode())
  },
})

const LoginModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginModal)

export default LoginModalContainer
