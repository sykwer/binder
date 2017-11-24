import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { changeUsernameInput } from "../store/actions"

const cpnt = ({
  isEmpty,
  isChecking,
  isRegrexInvalid,
  isNotUnique,
  isUsernameAvailable,
  usernameInput,
  registrationPath,
  formAuthenticityToken,
  handleChangeUsernameInput,
}) => (
  <div className="username-register-app-wrapper">
    <form action={registrationPath} method="post">
      <div className="username-input-wrapper">
        <input
          id="username-input-box-id"
          className="username-input cancel-focus-outline"
          type="text"
          name="registration[username]"
          onChange={(e) => {
            handleChangeUsernameInput(e.target.value)
          }}
          value={usernameInput}
        />
        {
          isEmpty && (
            <span />
          )
        }
        {
          isChecking && (
            <span className="is-checking">
              Checking
            </span>
          )
        }
        {
          isRegrexInvalid && (
            <span className="is-regrex-invalid">
              Invalid Characters
            </span>
          )
        }
        {
          isNotUnique && (
            <span className="is-not-unique">
              Already used
            </span>
          )
        }
        {
          isUsernameAvailable && (
            <span className="is-username-available">
              Available
            </span>
          )
        }
        {
          isUsernameAvailable ? (
            <button className="submit-button">Register</button>
          ) : (
            <button
              className="disabled-button"
              onClick={(e) => { e.preventDefault() }}
            >
              Register
            </button>
          )
        }
      </div>
      <input
        type="hidden"
        name="authenticity_token"
        value={formAuthenticityToken}
      />
    </form>
  </div>
)

window.addEventListener("load", () => {
  const input = document.getElementById("username-input-box-id")
  input.focus()
})

cpnt.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  isChecking: PropTypes.bool.isRequired,
  isRegrexInvalid: PropTypes.bool.isRequired,
  isNotUnique: PropTypes.bool.isRequired,
  isUsernameAvailable: PropTypes.bool.isRequired,
  usernameInput: PropTypes.string.isRequired,
  registrationPath: PropTypes.string.isRequired,
  formAuthenticityToken: PropTypes.string.isRequired,
  handleChangeUsernameInput: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isEmpty: state.usernameState === "EMPTY",
  isChecking: state.usernameState === "CHECKING",
  isRegrexInvalid: state.usernameState === "REGREX_INVALID",
  isNotUnique: state.usernameState === "UNIQUENESS_INVALID",
  isUsernameAvailable: state.usernameState === "UNIQUENESS_VALID",
  registrationPath: state.registrationPath,
  formAuthenticityToken: state.formAuthenticityToken,
  usernameInput: state.usernameInput,
})

const mapDispatchToProps = dispatch => ({
  handleChangeUsernameInput: (text) => {
    dispatch(changeUsernameInput(text))
  },
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default App
