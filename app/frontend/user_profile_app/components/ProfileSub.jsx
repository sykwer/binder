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
  facebookOmniauthPath,
  twitterOmniauthPath,
  isEditMode,
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
      <div className="twitter-button-wrapper">
        {
          twitterLink && (
            <a href={twitterLink} target="_blank">
              <i className="fa fa-twitter active-button button-icon" aria-hidden="true" />
            </a>
          )
        }
        {
          !twitterLink && !isEditMode && (
            <i className="fa fa-twitter inactive-button button-icon" aria-hidden="true" />
          )
        }
        {
          !twitterLink && isEditMode && (
            <a
              className="twitter-connect-button button-icon"
              href={twitterOmniauthPath}
            >
              Connect <i className="fa fa-twitter" />
            </a>
          )
        }
      </div>
      <div className="facebook-button-wrapper">
        {
          facebookLink && (
            <a href={facebookLink} target="_blank">
              <i className="fa fa-facebook active-button button-icon" aria-hidden="true" />
            </a>
          )
        }
        {
          !facebookLink && !isEditMode && (
            <i className="fa fa-facebook inactive-button button-icon" aria-hidden="true" />
          )
        }
        {
          !facebookLink && isEditMode && (
            <a
              href={facebookOmniauthPath}
              className="facebook-connect-button button-icon"
            >
              Connect <i className="fa fa-facebook" />
            </a>
          )
        }
      </div>
    </div>
  </div>
)

cpnt.propTypes = {
  followingsCount: PropTypes.number.isRequired,
  followersCount: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  facebookLink: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
  facebookOmniauthPath: PropTypes.string.isRequired,
  twitterOmniauthPath: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  followingsCount: state.followingsCount,
  followersCount: state.followersCount,
  username: state.username,
  facebookLink: state.facebookLink ? state.facebookLink : "",
  twitterLink: state.twitterLink ? state.twitterLink : "",
  facebookOmniauthPath: state.facebookOmniauthPath,
  twitterOmniauthPath: state.twitterOmniauthPath,
  isEditMode: state.appState === "IS_EDITTING",
})

const ProfileSub = connect(
  mapStateToProps,
)(cpnt)

export default ProfileSub
