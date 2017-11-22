import { connect } from "react-redux"

import {
  closeModal,
  changeToSignupMode,
  changeToSigninMode,
} from "../store/actions"

import LoginModal from "../../shared/components/LoginModal"

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

const LoginModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginModal)

export default LoginModalContainer
