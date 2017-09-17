import React from "react"

import FollowsCount from "./FollowsCount"
import SnsButtons from "./SnsButtons"
import FollowButton from "./FollowButton"

const Root = () => (
  <div>
    <div className="profile-sub-wrapper clearfix">
      <FollowsCount />
      <SnsButtons />
    </div>
    <FollowButton />
  </div>
)

export default Root
