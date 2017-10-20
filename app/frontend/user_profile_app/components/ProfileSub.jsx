import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const cpnt = ({
  followingsCount,
  followersCount,
  username,
  facebookLink,
  twitterLink,
}) => (
  <div className="profile-sub-wrapper clearfix">
    <div className="follows">
      <Link to={`/@${username}/followings`} className="following">
        <span className="num">{followingsCount}</span> Following
      </Link>
      <Link to={`/@${username}/followers`} className="follower">
        <span className="num">{followersCount}</span> Follower
      </Link>
    </div>
    <div className="sns-buttons">
      <span className="twitter-button">
        <a href={twitterLink} target="_blank">
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
      </span>
      <span className="facebook-button">
        <a href={facebookLink} target="_blank">
          <i className="fa fa-facebook" aria-hidden="true" />
        </a>
      </span>
    </div>
  </div>
)

cpnt.propTypes = {
  followingsCount: PropTypes.number.isRequired,
  followersCount: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  facebookLink: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  followingsCount: state.followingsCount,
  followersCount: state.followersCount,
  username: state.username,
  facebookLink: state.facebookLink ? state.facebookLink : "",
  twitterLink: state.twitterLink ? state.twitterLink : "",
})

const ProfileSub = connect(
  mapStateToProps,
)(cpnt)

export default ProfileSub
