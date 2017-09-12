import React from "react"

import Name from "./Name"
import Bio from "./Bio"
import ProfileSub from "./ProfileSub"
import Image from "./Image"
import Button from "./Button"

const Root = () => (
  <div className="profile">
    <div className="profile-main clearfix">
      <div className="profile-main-left">
        <Name />
        <Bio />
        <ProfileSub />
      </div>
      <div className="profile-main-right">
        <Image />
      </div>
    </div>
    <div className="edit-button">
      <Button />
    </div>
  </div>
)

export default Root
