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
  handleChangeUsernameInput,
}) => (
  <div className="username-register-app">
    <input
      className="username-input"
      type="text"
      onChange={(e) => {
        handleChangeUsernameInput(e.target.value)
      }}
      value={usernameInput}
    />
    <div className="username-status-wrapper">
      {
        isEmpty && (
          <span />
        )
      }
      {
        isChecking && (
          <span className="is-checking">
            使用できるユーザネームか調べています.
          </span>
        )
      }
      {
        isRegrexInvalid && (
          <span className="is-regrex-invalid">
            ユーザネームに使用できない文字が含まれています.
          </span>
        )
      }
      {
        isNotUnique && (
          <span className="is-not-unique">
            すでに使用されているユーザネームです.
          </span>
        )
      }
      {
        isUsernameAvailable && (
          <span className="is-username-available">
            使用できるユーザネームです.
          </span>
        )
      }
    </div>
  </div>
)

cpnt.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  isChecking: PropTypes.bool.isRequired,
  isRegrexInvalid: PropTypes.bool.isRequired,
  isNotUnique: PropTypes.bool.isRequired,
  isUsernameAvailable: PropTypes.bool.isRequired,
  usernameInput: PropTypes.string.isRequired,
  handleChangeUsernameInput: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isEmpty: state.usernameState === "EMPTY",
  isChecking: state.usernameState === "CHECKING",
  isRegrexInvalid: state.usernameState === "REGREX_INVALID",
  isNotUnique: state.usernameState === "UNIQUENESS_INVALID",
  isUsernameAvailable: state.usernameState === "UNIQUENESS_VALID",
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
