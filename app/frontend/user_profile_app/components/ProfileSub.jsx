import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const cpnt = ({ followings, followers, username }) => (
  <div className="profile-sub-wrapper clearfix">
    <div className="follows">
      <Link to={`/@${username}/followings`} className="following">
        <span className="num">{followings}</span> Following
      </Link>
      <Link to={`/@${username}/followers`} className="follower">
        <span className="num">{followers}</span> Follower
      </Link>
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
  username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  followings: state.followings,
  followers: state.followers,
  username: state.username,
})

const ProfileSub = connect(
  mapStateToProps,
)(cpnt)

export default ProfileSub
