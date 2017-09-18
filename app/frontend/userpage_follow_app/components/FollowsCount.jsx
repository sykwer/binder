import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({ followings, followers }) => (
  <div className="follows">
    <span className="following">
      <span className="num">{followings}</span> Following
    </span>
    <span className="follower">
      <span className="num">{followers}</span> Follower
    </span>
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

const FollowsCount = connect(
  mapStateToProps,
)(cpnt)

export default FollowsCount
