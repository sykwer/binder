import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Route } from "react-router-dom"
import { withRouter } from "react-router"

import FollowsCount from "./FollowsCount"
import SnsButtons from "./SnsButtons"
import FollowButton from "./FollowButton"
import Followers from "./Followers"
import Followings from "./Followings"
import LoginModalContainer from "./LoginModalContainer"

const cpnt = ({ isLoginModalDisplayed }) => (
  <div>
    {
      isLoginModalDisplayed && (
        <LoginModalContainer />
      )
    }
    <div className="profile-sub-wrapper clearfix">
      <FollowsCount />
      <SnsButtons />
    </div>
    <FollowButton />
    <Route
      path="/@:username/followers"
      component={Followers}
    />
    <Route
      path="/@:username/followings"
      component={Followings}
    />
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

export default withRouter(Root)
