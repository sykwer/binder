import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import BookmarkPostsList from "./BookmarkPostsList"
import BottomObserver from "./BottomObserver"
import LoginModalContainer from "./LoginModalContainer"

const cpnt = ({ isLoginModalDisplayed }) => (
  <div className="bookmark-tab-app-wrapper">
    {
      isLoginModalDisplayed && (
        <LoginModalContainer />
      )
    }
    <BookmarkPostsList />
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
