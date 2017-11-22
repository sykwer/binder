import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import PostsStream from "./PostsStream"
import BottomObserver from "./BottomObserver"
import LoginModalContainer from "./LoginModalContainer"

const cpnt = ({ isLoginModalDisplayed }) => (
  <div>
    {
      isLoginModalDisplayed && (
        <LoginModalContainer />
      )
    }
    <PostsStream />
    <BottomObserver />
  </div>
)

cpnt.propTypes = {
  isLoginModalDisplayed: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isLoginModalDisplayed: state.isLoginModalDisplayed,
})

const Root = connect(
  mapStateToProps,
)(cpnt)

export default Root
