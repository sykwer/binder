import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import ListItem from "./ListItem"
import FollowersBottomObserver from "./FollowersBottomObserver"

const cpnt = ({ name, username, followers }) => (
  <div
    className="followers-follows-component"
    role="button"
    tabIndex="0"
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      const node = document.getElementById("followers-to-mypage")
      node.click()
    }}
  >
    <Link to={`/@${username}`} id="followers-to-mypage" />
    <div className="title-header">
      <h2 className="title">
        {`${name} is followed by`}
      </h2>
    </div>
    <div className="followers-follows-list">
      {
        followers.map(follower => (
          <ListItem
            key={follower.id}
            image={follower.image}
            name={follower.name}
            bio={follower.bio}
            isFollowing={follower.isFollowing}
          />
        ))
      }
    </div>
    <FollowersBottomObserver />
  </div>
)

cpnt.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  followers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired,
  })).isRequired,
}

const mapStateToProps = state => ({
  name: state.name,
  username: state.username,
  followers: state.followers,
})

const Followers = connect(
  mapStateToProps,
)(cpnt)

export default Followers
