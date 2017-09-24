import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({ followingsCount, followersCount }) => (
  <div className="follows">
    <span className="following">
      <span className="num">{followingsCount}</span> Following
    </span>
    <span className="follower">
      <span className="num">{followersCount}</span> Follower
    </span>
  </div>
)

cpnt.propTypes = {
  followingsCount: PropTypes.number.isRequired,
  followersCount: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  followingsCount: state.followingsCount,
  followersCount: state.followersCount,
})

const FollowsCount = connect(
  mapStateToProps,
)(cpnt)

export default FollowsCount
