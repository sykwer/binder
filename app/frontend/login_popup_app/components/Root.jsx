import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import LoginModal from "./LoginModal"
import SigninButton from "./SigninButton"
import SignupButton from "./SignupButton"
import BookmarkButton from "./BookmarkButton"

const cpnt = ({ isModalDisplayed, buttonId }) => {
  let button
  switch (buttonId) {
    case "signin-button":
      button = <SigninButton />
      break
    case "signup-button":
      button = <SignupButton />
      break
    case "bookmark-button":
      button = <BookmarkButton />
      break
    default:
  }

  return (
    <div>
      {
        isModalDisplayed && (
          <LoginModal />
        )
      }
      {
        button
      }
    </div>
  )
}

cpnt.propTypes = {
  isModalDisplayed: PropTypes.bool.isRequired,
  buttonId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  isModalDisplayed: state.isModalDisplayed,
  buttonId: state.buttonId,
})

const Root = connect(
  mapStateToProps,
)(cpnt)

export default Root
