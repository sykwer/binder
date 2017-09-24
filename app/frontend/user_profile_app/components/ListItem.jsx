import React from "react"
import PropTypes from "prop-types"

const ListItem = ({
  userId,
  image,
  name,
  bio,
  isFollowing,
  isButtonsDisabled,
  handleOnClickFollow,
  handleOnClickUnfollow,
}) => {
  let button
  if (isFollowing) {
    button = (
      <button
        className="following-button"
        disabled={isButtonsDisabled}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleOnClickUnfollow(userId)
        }}
      >
        Following
      </button>
    )
  } else {
    button = (
      <button
        className="follow-button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleOnClickFollow(userId)
        }}
      >
        Follow
      </button>
    )
  }

  return (
    <div
      className="followers-follows-item clearfix cancel-focus-outline"
      role="button"
      tabIndex="0"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      <div className="item-left">
        <img src={image} alt={name} />
      </div>
      <div className="item-center">
        <div className="item-center-upper">
          <span className="profile-name">{name}</span>
        </div>
        <div className="item-center-lower">
          <span className="profile-bio">{bio}</span>
        </div>
      </div>
      <div className="item-right">
        {button}
      </div>
    </div>
  )
}

ListItem.propTypes = {
  userId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isButtonsDisabled: PropTypes.bool.isRequired,
  handleOnClickFollow: PropTypes.func.isRequired,
  handleOnClickUnfollow: PropTypes.func.isRequired,
}

export default ListItem
