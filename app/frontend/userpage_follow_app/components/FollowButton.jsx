import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { clickFollow, clickUnfollow } from "../store/actions"

const cpnt = ({
  isFollowing,
  isDisabled,
  handleOnClickFollow,
  handleOnClickUnfollow,
}) => {
  if (isFollowing) {
    return (
      <button
        className="following-button"
        disabled={isDisabled}
        onClick={(e) => {
          e.preventDefault()
          handleOnClickUnfollow()
        }}
      >
        Following
      </button>
    )
  }

  return (
    <button
      className="follow-button"
      disabled={isDisabled}
      onClick={(e) => {
        e.preventDefault()
        handleOnClickFollow()
      }}
    >
      Follow
    </button>
  )
}

cpnt.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  handleOnClickFollow: PropTypes.func.isRequired,
  handleOnClickUnfollow: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isFollowing: ["DISABLED_FOLLOWING", "FOLLOWING"].includes(state.buttonState),
  isDisabled: ["DISABLED_FOLLOW", "DISABLED_FOLLOWING"].includes(state.buttonState),
})

const mapDispatchToProps = dispatch => ({
  handleOnClickFollow: () => {
    dispatch(clickFollow())
  },
  handleOnClickUnfollow: () => {
    dispatch(clickUnfollow())
  },
})

const FollowButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default FollowButton
