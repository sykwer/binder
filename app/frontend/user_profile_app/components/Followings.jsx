import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import ListItem from "./ListItem"
import FollowingsBottomObserver from "./FollowingsBottomObserver"

const cpnt = ({ username, name, followings }) => (
  <div
    className="followers-follows-component"
    role="button"
    tabIndex="0"
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      const node = document.getElementById("followings-to-mypage")
      node.click()
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
            key={following.id}
            image={following.image}
            name={following.name}
            bio={following.bio}
            isFollowing={following.isFollowing}
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
}

const mapStateToProps = state => ({
  name: state.name,
  username: state.username,
  followings: state.followings,
})

const Followings = connect(
  mapStateToProps,
)(cpnt)

export default Followings
