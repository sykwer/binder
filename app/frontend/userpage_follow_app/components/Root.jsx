import React from "react"
import { Route } from "react-router-dom"

import FollowsCount from "./FollowsCount"
import SnsButtons from "./SnsButtons"
import FollowButton from "./FollowButton"
import Followers from "./Followers"
import Followings from "./Followings"

const Root = () => (
  <div>
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

export default Root
