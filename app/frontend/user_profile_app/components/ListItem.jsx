import React from "react"
import PropTypes from "prop-types"

const ListItem = ({
  image,
  name,
  bio,
  isFollowing,
}) => {
  let button
  if (isFollowing) {
    button = (
      <button
        className="following-button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          // handleOnClickUnfollow(userId)
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
          // handleOnClickFollow(userId)
        }}
      >
        Follow
      </button>
    )
  }

  return (
    <div className="followers-follows-item clearfix">
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
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
}

export default ListItem
