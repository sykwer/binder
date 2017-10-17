import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const cpnt = ({ user, date }) => (
  <div className="header-wrapper clearfix">
    <div className="header-image">
      <img src={user.image} alt="user profile" />
    </div>
    <div className="header-text">
      <div className="header-profile-name">
        <span>{user.name}</span>
      </div>
      <div className="header-datetime">
        <span>{date}</span>
      </div>
    </div>
  </div>
)

cpnt.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  user: {
    name: state.user.name,
    image: state.user.image,
  },
  date: state.date,
})

const PostMetaInfo = connect(mapStateToProps)(cpnt)

export default PostMetaInfo
