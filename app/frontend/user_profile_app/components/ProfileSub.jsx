import React from "react"

const ProfileSub = () => (
  <div className="profile-sub-wrapper clearfix">
    <div className="follows">
      <span className="following">
        <span className="num">150</span>Following
      </span>
      <span className="follower">
        <span className="num">75</span> Follower
      </span>
    </div>
    <div className="sns-buttons">
      <span className="twitter-button">
        <i className="fa fa-twitter" aria-hidden="true" />
      </span>
      <span className="facebook-button">
        <i className="fa fa-facebook" aria-hidden="true" />
      </span>
    </div>
  </div>
)

export default ProfileSub
