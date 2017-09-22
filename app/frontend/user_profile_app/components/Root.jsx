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
    <div className="profile-footer">
      <Button />
    </div>
    <Route
      path={"/@:username"}
      render={() => {
        const body = document.getElementsByTagName("body").item(0)
        body.style.removeProperty("overflow")
        body.style.removeProperty("height")
        return <div />
      }}
    />
    <Route
      path={"/@:username/followers"}
      render={() => {
        const body = document.getElementsByTagName("body").item(0)
        body.style.setProperty("overflow", "hidden")
        body.style.setProperty("height", "100%")
        return <Followers />
      }}
    />
    <Route
      path={"/@:username/followings"}
      render={() => {
        const body = document.getElementsByTagName("body").item(0)
        body.style.setProperty("overflow", "hidden")
        body.style.setProperty("height", "100%")
        return <Followings />
      }}
    />
  </div>
)

export default Root
