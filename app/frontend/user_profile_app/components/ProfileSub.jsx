import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({ followings, followers }) => (
  <div className="profile-sub-wrapper clearfix">
    <div className="follows">
      <span className="following">
        <span className="num">{followings}</span> Following
      </span>
      <span className="follower">
        <span className="num">{followers}</span> Follower
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

cpnt.propTypes = {
  followings: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  followings: state.followings,
  followers: state.followers,
})

const ProfileSub = connect(
  mapStateToProps,
)(cpnt)

export default ProfileSub
