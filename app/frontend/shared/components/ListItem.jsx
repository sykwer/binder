import React from "react"
import PropTypes from "prop-types"

const ListItem = ({
  userId,
  image,
  name,
  username,
  bio,
  isFollowing,
  isButtonsDisabled,
  isLoggedIn,
  isMyself,
  handleOnClickFollow,
  handleOnClickUnfollow,
  handleOpenLoginModal,
}) => {
  let button
  if (!isLoggedIn) {
    button = (
      <button
        className="follow-button-in-list"
        onClick={(e) => {
          e.stopPropagation()
          handleOpenLoginModal()
        }}
      >
        Follow
      </button>
    )
  } else if (isMyself) {
    button = <div />
  } else if (isFollowing) {
    button = (
      <button
        className="following-button-in-list"
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
        className="follow-button-in-list"
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
      <div
        className="item-left cancel-focus-outline"
        role="button"
        tabIndex="0"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          window.location.assign(`/@${username}`)
        }}
      >
        <img src={image} alt={name} className="profile-image" />
      </div>
      <div className="item-center">
        <div className="item-center-upper">
          <span
            className="profile-name cancel-focus-outline"
            role="button"
            tabIndex="0"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.location.assign(`/@${username}`)
            }}
          >
            {name}
          </span>
        </div>
        <div className="item-center-lower">
          <span
            className="profile-bio cancel-focus-outline"
            role="button"
            tabIndex="0"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.location.assign(`/@${username}`)
            }}
          >
            {bio}
          </span>
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
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isButtonsDisabled: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isMyself: PropTypes.bool.isRequired,
  handleOnClickFollow: PropTypes.func.isRequired,
  handleOnClickUnfollow: PropTypes.func.isRequired,
  handleOpenLoginModal: PropTypes.func.isRequired,
}

export default ListItem
