import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const cpnt = ({ username, followingsCount, followersCount }) => (
  <div className="follows">
    <Link to={`/@${username}/followings`}>
      <span className="following">
        <span className="num">{followingsCount}</span> Following
      </span>
    </Link>
    <Link to={`/@${username}/followers`}>
      <span className="follower">
        <span className="num">{followersCount}</span> Follower
      </span>
    </Link>
  </div>
)

cpnt.propTypes = {
  username: PropTypes.string.isRequired,
  followingsCount: PropTypes.number.isRequired,
  followersCount: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  username: state.username,
  followingsCount: state.followingsCount,
  followersCount: state.followersCount,
})

const FollowsCount = connect(
  mapStateToProps,
)(cpnt)

export default FollowsCount
