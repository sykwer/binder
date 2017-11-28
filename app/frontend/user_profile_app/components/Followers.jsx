import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import {
  clickFollowFromFollowers,
  clickUnfollowFromFollowers,
  closeFollowersList,
} from "../store/actions"
import ListItem from "../../shared/components/ListItem"
import FollowersBottomObserver from "./FollowersBottomObserver"

const cpnt = ({
  name,
  username,
  followers,
  isButtonsDisabled,
  handleOnClickFollow,
  handleOnClickUnfollow,
  handleCloseFollowersList,
}) => (
  <div
    className="followers-follows-component"
    role="button"
    tabIndex="0"
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      const node = document.getElementById("followers-to-mypage")
      node.click()
      handleCloseFollowersList()
    }}
  >
    <i className="fa fa-times close-list-mark" aria-hidden="true" />
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
            userId={follower.id}
            image={follower.image}
            name={follower.name}
            username={follower.username}
            bio={follower.bio}
            isFollowing={follower.isFollowing}
            isButtonsDisabled={isButtonsDisabled}
            isLoggedIn
            isMyself={false}
            handleOnClickFollow={handleOnClickFollow}
            handleOnClickUnfollow={handleOnClickUnfollow}
            handleOpenLoginModal={() => {}}
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
  isButtonsDisabled: PropTypes.bool.isRequired,
  handleOnClickFollow: PropTypes.func.isRequired,
  handleOnClickUnfollow: PropTypes.func.isRequired,
  handleCloseFollowersList: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  name: state.name,
  username: state.username,
  followers: state.followers,
  isButtonsDisabled: state.isButtonsDisabled,
})

const mapDispatchToProps = dispatch => ({
  handleOnClickFollow: (destinationId) => {
    dispatch(clickFollowFromFollowers(destinationId))
  },
  handleOnClickUnfollow: (destinationId) => {
    dispatch(clickUnfollowFromFollowers(destinationId))
  },
  handleCloseFollowersList: () => {
    dispatch(closeFollowersList())
  },
})

const Followers = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default Followers
