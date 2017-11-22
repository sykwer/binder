import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import {
  clickFollowFromFollowings,
  clickUnfollowFromFollowings,
  closeFollowingsList,
  openLoginModal,
} from "../store/actions"
import ListItem from "../../shared/components/ListItem"
import FollowingsBottomObserver from "./FollowingsBottomObserver"

const cpnt = ({
  myUserId,
  username,
  name,
  followings,
  isButtonsDisabled,
  isLoggedIn,
  handleOnClickFollow,
  handleOnClickUnfollow,
  handleCloseFollowingsList,
  handleOpenLoginModal,
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
    <i className="fa fa-times close-list-mark" aria-hidden="true" />
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
            username={following.username}
            bio={following.bio}
            isFollowing={following.isFollowing}
            isButtonsDisabled={isButtonsDisabled}
            isLoggedIn={isLoggedIn}
            isMyself={myUserId === following.id}
            handleOnClickFollow={handleOnClickFollow}
            handleOnClickUnfollow={handleOnClickUnfollow}
            handleOpenLoginModal={handleOpenLoginModal}
          />
        ))
      }
    </div>
    <FollowingsBottomObserver />
  </div>
)

cpnt.propTypes = {
  myUserId: PropTypes.number,
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
  isLoggedIn: PropTypes.bool.isRequired,
  handleOnClickFollow: PropTypes.func.isRequired,
  handleOnClickUnfollow: PropTypes.func.isRequired,
  handleCloseFollowingsList: PropTypes.func.isRequired,
  handleOpenLoginModal: PropTypes.func.isRequired,
}

cpnt.defaultProps = {
  myUserId: null,
}

const mapStateToProps = state => ({
  myUserId: state.myUserId,
  name: state.name,
  username: state.username,
  followings: state.followings,
  isButtonsDisabled: state.isButtonsDisabled,
  isLoggedIn: !!state.myUserId,
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
  handleOpenLoginModal: () => {
    dispatch(openLoginModal())
  },
})

const Followings = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cpnt)

export default Followings
