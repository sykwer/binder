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
        {
          twitterLink ? (
            <a href={twitterLink} target="_blank">
              <i className="fa fa-twitter active-button" aria-hidden="true" />
            </a>
          ) : (
            <i className="fa fa-twitter inactive-button" aria-hidden="true" />
          )
        }
      </span>
      <span className="facebook-button">
        {
          facebookLink ? (
            <a href={facebookLink} target="_blank">
              <i className="fa fa-facebook active-button" aria-hidden="true" />
            </a>
          ) : (
            <i className="fa fa-facebook inactive-button" aria-hidden="true" />
          )
        }
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
