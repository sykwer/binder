import React from "react"
import { Route } from "react-router-dom"

import Name from "./Name"
import Bio from "./Bio"
import ProfileSub from "./ProfileSub"
import Image from "./Image"
import Button from "./Button"
import Followers from "./Followers"
import Followings from "./Followings"

const Root = () => (
  <div className="profile">
    <div className="profile-main">
      <div className="profile-main-left">
        <Name />
        <Bio />
        <ProfileSub />
      </div>
      <div className="profile-main-right">
        <Image />
      </div>
    </div>
    <div className="profile-footer">
      <Button />
    </div>
    <Route
      path={"/@:username/followers"}
      component={Followers}
    />
    <Route
      path={"/@:username/followings"}
      component={Followings}
    />
  </div>
)

export default Root
