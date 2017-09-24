import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import {
  clickFollowFromFollowings,
  clickUnfollowFromFollowings,
  closeFollowingsList,
} from "../store/actions"
import ListItem from "./ListItem"
import FollowingsBottomObserver from "./FollowingsBottomObserver"

const cpnt = ({
  username,
  name,
  followings,
  isButtonsDisabled,
  handleOnClickFollow,
  handleOnClickUnfollow,
  handleCloseFollowingsList,
}) => (
  <div
    className="followers-follows-component"
    role="button"
    tabIndex="0"
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      const node = document.getElementById("followings-to-mypage")
      node.click()
      handleCloseFollowingsList()
    }}
  >
    <Link to={`/@${username}`} id="followings-to-mypage" />
    <div className="title-header">
      <h2 className="title">
        {`${name} follows`}
      </h2>
    </div>
    <div className="followers-follows-list">
      {
        followings.map(following => (
          <ListItem
            userId={following.id}
            key={following.id}
            image={following.image}
            name={following.name}
            bio={following.bio}
            isFollowing={following.isFollowing}
            isButtonsDisabled={isButtonsDisabled}
            handleOnClickFollow={handleOnClickFollow}
            handleOnClickUnfollow={handleOnClickUnfollow}
          />
        ))
      }
    </div>
    <FollowingsBottomObserver />
  </div>
)

cpnt.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  followings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired,
  })).isRequired,
  isButtonsDisabled: PropTypes.bool.isRequired,
  handleOnClickFollow: PropTypes.func.isRequired,
  handleOnClickUnfollow: PropTypes.func.isRequired,
  handleCloseFollowingsList: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  name: state.name,
  username: state.username,
  followings: state.followings,
  isButtonsDisabled: state.isButtonsDisabled,
})

const mapDispatchToProps = dispatch => ({
  handleOnClickFollow: (destinationId) => {
    dispatch(clickFollowFromFollowings(destinationId))
  },
  handleOnClickUnfollow: (destinationId) => {
    dispatch(clickUnfollowFromFollowings(destinationId))
  },
  handleCloseFollowingsList: () => {
    dispatch(closeFollowingsList())
  },
})

const Followings = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default Followings
